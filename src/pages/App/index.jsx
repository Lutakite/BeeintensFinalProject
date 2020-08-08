import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeStore } from 'account';
import { getPageView } from 'account/common/selectors';
import { PageViews, STUDENT_PAGE, LESSON_PAGE, LESSONS_PAGE, PROFESSORS_PAGE} from 'account/common/constants';
import { withDataConverter, withHMR, withReduxStore, withAdaptivity } from 'enhancers';
import { breakpoints, setBreakpoint, getBreakpoint } from 'account/common/breakpoint';

import StudentPage from '../StudentPage';
import LessonPage from '../LessonPage';
import LessonsPage from '../LessonsPage';
import ProfessorsPage from '../ProfessorsPage';
import dataConverter from './dataConverter';


function App({ view }) {
  switch (view) {   
    case STUDENT_PAGE:
      //default:
      return <StudentPage />;
  
    case LESSON_PAGE:
      return <LessonPage />;
      
    case LESSONS_PAGE:
      return <LessonsPage />;

    case PROFESSORS_PAGE:
      return <ProfessorsPage />;
  }
}

App.propTypes = {
  view: PropTypes.oneOf(PageViews),
};

const mapStateToProps = state => ({
  view: getPageView(state),
});

export default compose(
  withHMR(module),
  withDataConverter(dataConverter),
  withReduxStore(initializeStore),
  withAdaptivity({ breakpoints, setBreakpoint, getBreakpoint }),
  connect(mapStateToProps),
)(App);
