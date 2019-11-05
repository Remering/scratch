import Vuex from 'vuex';
import Vue from 'vue';
import login from '@/store/modules/login';
import register from '@/store/modules/register';
import snackbar from '@/store/modules/snackbar';
import user from '@/store/modules/user';
import avatarUploadDialog from '@/store/modules/avatarUploadDialog';
import courseUpload from '@/store/modules/courseUpload';
import courses from '@/store/modules/courses';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export const LOGIN_NAMESPACE = 'login';
export const REGISTER_NAMESPACE = 'register';
export const SNACKBAR_NAMESPACE = 'snackbar';
export const USER_NAMESPACE = 'user';
export const AVATAR_UPLOAD_DIALOG_NAMESPACE = 'avatarUploadDialog';
export const COURSE_UPLOAD_NAMESPACE = 'courseUpload';
export const COURSES_NAMESPACE = 'courses';

export default new Vuex.Store({
  modules: {
    login,
    register,
    snackbar,
    user,
    avatarUploadDialog,
    courseUpload,
    courses,
  },
  strict: debug,
})