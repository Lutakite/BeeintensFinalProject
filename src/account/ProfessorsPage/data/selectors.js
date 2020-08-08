import { getAppData } from '../../selectors';

export const getLessonName = state => getAppData(state).lessonName;
export const getLessonNum = state => getAppData(state).lessonNum;
export const getLessonUrl = state => getAppData(state).lessonUrl;
export const getLessonDate = state => getAppData(state).date;
export const getLessonProfessor = state => getAppData(state).professor;
export const getLessonsList = state => getAppData(state).lessons;

export const getProfessorsList = state => getAppData(state).professors;
