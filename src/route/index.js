import main from '@/route/main';
import profile from '@/route/profile';
import logout from '@/route/logout';
import feedback from '@/route/feedback';
import courseUpload from '@/route/courseUpload';

export const PERSON = 'person';
// export const MESSAGE = 'message';
// export const HISTORY = 'history';
export const FEEDBACK = 'feedback';
export const EXIT = 'exit_to_app';
export const COURSE_UPLOAD = 'course_upload';

export default [
  main,
  profile,
  logout,
  feedback,
  courseUpload,
];