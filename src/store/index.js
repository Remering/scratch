import Vuex from 'vuex';
import Vue from 'vue';
import login from '@/store/modules/login';
import register from '@/store/modules/register';
import snackbar from '@/store/modules/snackbar';
import account from '@/store/modules/account';
import avatarUploadDialog from '@/store/modules/avatarUploadDialog';
import courseUpload from '@/store/modules/courseUpload';
import courses from '@/store/modules/courses';
import videoPlay from '@/store/modules/videoPlay';
import courseModify from '@/store/modules/courseModify';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    login,
    register,
    snackbar,
    account,
    avatarUploadDialog,
    courseUpload,
    courses,
    videoPlay,
    courseModify
  },
  strict: debug,
})