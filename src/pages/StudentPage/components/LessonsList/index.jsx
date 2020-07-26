import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getLessonsList } from 'account/StudentPage/data/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);

function LessonsList({ list, className }) {
  return (
    <div className={cx('lessons', className)}>
      {list.map(({ lessonNum, lessonName, lessonUrl, done }) => (
        <div className={cx('lesson')} key={lessonNum}>
          <div className={cx('lessonNum')}><a href={lessonUrl} title={lessonName}>{lessonNum}</a></div>
          <div className={cx('done'+done, 'done')}></div>
        </div>
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
