import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getProfessorsList } from 'account/ProfessorsPage/data/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);

const Lesson = (lessonNum, lessonName, lessonUrl, date) => {
  return (
  <div className={cx('lessonView')} key={lessonNum}>
    <div className={cx('lessonCol')}><div className={cx('lessonName')}><a href={lessonUrl}>{lessonName}</a></div></div>
  </div>
  )
};

const Professor = (professor, id, desc, lessons) => {
  return (
  <div className={cx('professorView')} key={id}>
    <div className={cx('professorRow')}><div className={cx('professor')}>{professor}</div></div>
    <div className={cx('professorRow')}><div className={cx('')}>{desc}</div></div>
    <div className={cx('professorRow')}><div className={cx('')}>Ведет лекции:</div></div>
    <div className={cx('lessonsView')}>
      {lessons.map(({ lessonNum, lessonName, lessonUrl, date }) => (
        Lesson(lessonNum, lessonName, lessonUrl, date)
      ))}
    </div>
  </div>
  )
};

function ProfessorsList({ list, className }) {
  return (
    <div className={cx('lessonsView', className)}>
      {list.map(({ professor, id, desc, lessons }) => (
        Professor(professor, id, desc, lessons)
      ))}
    </div>
  );
}

ProfessorsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  list: getProfessorsList(state),
});

export default connect(mapStateToProps)(ProfessorsList);
