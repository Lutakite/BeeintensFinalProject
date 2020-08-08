import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getLessonsList } from 'account/LessonsPage/data/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);

const Lesson = (lessonNum, lessonName, lessonUrl, date, professor) => {
  return (
  <div className={cx('lessonView')} key={lessonNum}>
    <div className={cx('lessonCol')}><div className={cx('lessonNum')}>{lessonNum}</div></div>
    <div className={cx('lessonCol')}><div className={cx('lessonDate')}>{date}</div></div>
    <div className={cx('lessonCol')}><div className={cx('lessonProfessor')}>{professor}</div></div>
    <div className={cx('lessonCol')}><div className={cx('lessonName')}><a href={lessonUrl}>{lessonName}</a></div></div>
  </div>
  )
};

function LessonsList({ list, className }) {
  return (
    <div className={cx('lessonsView', className)}>
      {list.map(({ lessonNum, lessonName, lessonUrl, date, professor }) => (
        Lesson(lessonNum, lessonName, lessonUrl, date, professor)
      ))}
    </div>
  );
}

LessonsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  list: getLessonsList(state),
});

export default connect(mapStateToProps)(LessonsList);
