import api from '@/api';
import store from '@/store';
import {ACCOUNT_NAMESPACE, COURSES_NAMESPACE, DEFAULT_AVATAR_URL, SNACKBAR_NAMESPACE, SUCCESS} from '@/global';

const state = {
  imageUrl: '',
  courseUUID: '',
  questions: {}
};

const mutations = {
  setCourseUUID: (state, courseUUID) => state.courseUUID = courseUUID,
  setQuestions: (state, questions) => state.questions = questions,
  addQuestion: (state, question) => state.questions = {
    ...state.questions,
    [question.uuid]: question
  },
  removeQuestion: (state, uuid) => {
    state.questions = Object.values(state.questions)
      .filter((question) => question.uuid !== uuid)
      .reduce((acc, current) => ({
        ...acc,
        [current.uuid]: current
      }), {});
  }
};

const getters = {
  course: ({courseUUID}) => {
    const getByUUID = store.getters[`${COURSES_NAMESPACE}/getByUUID`];
    return getByUUID(courseUUID);
  },
  options: (_, getters) => {
    const {course} = getters;
    const videoUrl = course ? course.video : undefined;
    return {
      sources: [
        {
          type: '',
          src: videoUrl,

        }
      ],
      // fluid: true,
      fill: true,
      responsive: true,
      aspectRatio: '16:9',
    };
  },
  introduction(_, getters) {
    const {course} = getters;
    return course ? course.introduction : '';
  },
  title(_, getters) {
    const {course} = getters;
    return course ? course.name : '';
  },
  fileUrl(_, getters) {
    const {course} = getters;
    return course ? course.file : '';
  },
  teacher(_, getters) {
    const {course} = getters;
    return course ? course.teacher : '';
  },
  teacherAvatarUrl(_, getters) {
    const {teacher} = getters;
    return teacher ? teacher.avatarUrl || DEFAULT_AVATAR_URL : DEFAULT_AVATAR_URL;
  },
  teacherName(_, getters) {
    const {teacher} = getters;
    return teacher ? teacher.username : '';
  },

  questionsAsArray({questions}) {
    return Object.values(questions);
  },

  userIsOwner(_, getters) {
    const {course} = getters;
    const userUUID = store.state[ACCOUNT_NAMESPACE].uuid;
    return course.teacher.uuid === userUUID;
  },

};

const actions = {
  async fetchQuestions({state, dispatch, commit}) {
    const {courseUUID} = state;
    const response = await api.getQuestions({course: courseUUID});
    const {code, message, questions} = response.data;
    if (code !== SUCCESS) {
      dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
        code, message
      }, {
        root: true
      });
      return;
    }

    commit('setQuestions', questions);
  },
  async downloadFile(_, fileUrl) {
    window.open(fileUrl, '_blank');
  },
  async addQuestion({rootState, state, dispatch, commit}, text) {
    const {token} = rootState[ACCOUNT_NAMESPACE];
    const {courseUUID} = state;
    const response = api.addQuestion(token, {
      course: courseUUID,
      text, issueAt: +new Date()
    });
    const {code, message, question} = (await response).data;

    dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
      code, message
    }, {
      root: true
    });

    if (question)
      commit('addQuestion', question);
  },
  async modifyQuestionText({commit, rootState, dispatch}, {uuid, text}) {
    const {token} = rootState[ACCOUNT_NAMESPACE];
    const response = await api.modifyText(token, {
      uuid,
      text,
      issueAt: +new Date()
    });

    const {code, message, question} = response.data;

    dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
      message, code
    }, {
      root: true
    });

    if (code === SUCCESS) {
      commit('addQuestion', question);
    }
  },

  async answerQuestion({rootState, commit, dispatch}, {uuid, answer}) {
    const {token} = rootState[ACCOUNT_NAMESPACE];
    const response = await api.answerQuestion(token, {
      uuid,
      answer,
      answerAt: +new Date()
    });
    const {code, message, question} = response.data;
    dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
      message, code
    }, {
      root: true
    });

    if (code === SUCCESS) {
      commit('addQuestion', question);
    }

  },

  async deleteQuestion({commit, rootState, dispatch}, uuid) {
    const {token} = rootState[ACCOUNT_NAMESPACE];
    const response = await api.deleteQuestion(token, {
      uuid
    });

    const {code, message} = response.data;

    dispatch(`${SNACKBAR_NAMESPACE}/showState`, {
      message, code
    }, {
      root: true
    });

    if (code === SUCCESS) {
      commit('removeQuestion', uuid);
    }

  }

};


export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
};