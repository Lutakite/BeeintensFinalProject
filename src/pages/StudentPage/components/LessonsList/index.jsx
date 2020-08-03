import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getLessonsList } from 'account/StudentPage/data/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);
let clicked = 0;
let localStorage = window.localStorage;
localStorage.setItem('lessonClicked', '0');


const Lesson = (lessonNum, lessonName, lessonUrl, done) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = (lessonNum) => {
    return () => {
      if (hidden === true) {
        clicked = lessonNum;
        localStorage.setItem('lessonClicked', lessonNum);
      }
      else{
        clicked = 0;
        localStorage.setItem('lessonClicked', '0');
      }
      setHidden(!hidden);
    }
  };


  return (
  <div className={cx('lesson')} key={lessonNum}>
    <div className={cx('lessonNum')}><a href={lessonUrl} title={lessonName}>{lessonNum}</a></div>
    <div className={cx('done'+done, 'done')} onClick={handleClick(lessonNum)}></div>
  </div>
  )
};

const Form = (className) => {

  if (clicked != 0) {
    return (
    <form className={cx('hwForm', className)} method="POST" name="form">
      <section className={cx('inputContainer', className)}>
        <label className={cx('label', className)} for="hwLink">Отправить на проверку домашнее задание по лекции №{clicked}</label>
        <textarea className={cx('inputField', className)} type="text" id="hwLink" name="hwLink" rows="10"></textarea>
      </section>
      <button className={cx('btn', 'submit', className)} type="submit">
        Отправить
      </button>
    </form>
    )
  }
};

function LessonsList({ list, className }) {
  const [hidden, setHidden] = useState(true);

  const handleClick = (lessonNum) => {
    return () => {
      console.log("clicked: ", lessonNum);
      setHidden(!hidden);
    }
  };


  return (
    <div className={cx('studentView', className)}>
      <div className={cx('lessons', className)}>
        {list.map(({ lessonNum, lessonName, lessonUrl, done }) => (
          Lesson(lessonNum, lessonName, lessonUrl, done)
        ))}
      </div>
      {Form()}
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
