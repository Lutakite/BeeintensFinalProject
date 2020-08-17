import { getAppData } from '../../selectors';

export const getStudentName = state => getAppData(state).studentName;
export const getLessonsList = state => getAppData(state).lessons;
export const getHwForm = state => getAppData(state).hwForm;
