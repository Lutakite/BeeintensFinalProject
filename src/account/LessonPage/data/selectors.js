import { getAppData } from '../../selectors';

export const getLessonName = state => getAppData(state).lessonName;
export const getLessonNum = state => getAppData(state).lessonNum;
export const getLessonYoutube = state => getAppData(state).lessonYoutube;