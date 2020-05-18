import main from '@/route/main';
import profile from '@/route/profile';
import feedback from '@/route/feedback';
import courseUpload from '@/route/courseUpload';
import videoPlay from '@/route/videoPlay';
import courseModify from '@/route/courseModify';

export const PERSON = 'person';
// export const MESSAGE = 'message';
// export const HISTORY = 'history';
export const FEEDBACK = 'feedback';
export const COURSE_UPLOAD = 'course_upload';

export default [
  main,
  profile,
  feedback,
  courseUpload,
  videoPlay,
  courseModify
];