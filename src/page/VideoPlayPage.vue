<template>
  <v-container class="">

    <v-card class="mx-auto ma-4" raised>

      <video-player :options="options">
      </video-player>

      <v-card-actions>
        <v-avatar class="mr-2" size="36">
          <v-img :src="teacherAvatarUrl"></v-img>
        </v-avatar>
        <span>{{teacherName}}</span>
        <v-spacer></v-spacer>
        <v-btn
            @click="$router.push(`/course_modify/${$route.params.courseUUID}`)" color="orange"
            dark
            v-if="userIsOwner"
        >修改课程
        </v-btn>
        <v-btn @click="downloadFile(fileUrl)" color="orange" dark>下载课件</v-btn>
      </v-card-actions>

      <v-card-title>{{title}}</v-card-title>

      <v-card-text>{{introduction}}</v-card-text>
    </v-card>
    <add-question class="mb-4" v-if="!userIsOwner"></add-question>
    <v-card outlined>
      <v-toolbar color="orange" dark>提问区</v-toolbar>
      <v-expansion-panels>
        <question-list-item
            :key="question.uuid"
            :question="question"
            v-for="(question) in questions"
        >
        </question-list-item>

      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>

  import {mapActions, mapGetters, mapState} from 'vuex';
  import store from '@/store';
  import AddQuestion from '@/components/AddQuestion';
  import {ACCOUNT_NAMESPACE, VIDEO_PLAY_NAMESPACE} from '@/global';
  import QuestionListItem from '@/components/QuestionListItem';

  export default {
    name: 'VideoPlayPage',
    components: {QuestionListItem, AddQuestion},
    props: ['courseUuid'],
    beforeRouteEnter(to, from, next) {
      const {courseUUID} = to.params;
      store.commit(`${VIDEO_PLAY_NAMESPACE}/setCourseUUID`, courseUUID);
      store.dispatch(`${VIDEO_PLAY_NAMESPACE}/fetchQuestions`).then(_ => {
        const course = store.getters[`${VIDEO_PLAY_NAMESPACE}/course`];
        if (course && course.video) {
          next();
        } else {
          setTimeout(() => {
            next();
          }, 500);
        }
      });
    },
    beforeRouteUpdate(to, from, next) {
      store.dispatch(`${VIDEO_PLAY_NAMESPACE}/fetchQuestions`).then(_ => {
        next();
      });
    },
    computed: {
      ...mapState(ACCOUNT_NAMESPACE, {
        userUUID: 'uuid'
      }),
      ...mapGetters(VIDEO_PLAY_NAMESPACE, [
        'course', 'options', 'introduction',
        'title', 'fileUrl',
        'teacher', 'teacherAvatarUrl', 'teacherName',
        'userIsOwner'
      ]),
      ...mapGetters(VIDEO_PLAY_NAMESPACE, {
        allQuestions: 'questionsAsArray'
      }),

      questions() {
        return this.allQuestions.filter(question => question.course === this.course.uuid);
      }

    },
    methods: {
      ...mapActions(VIDEO_PLAY_NAMESPACE, [
        'downloadFile'
      ])
    },

  };
</script>

<style scoped>

</style>