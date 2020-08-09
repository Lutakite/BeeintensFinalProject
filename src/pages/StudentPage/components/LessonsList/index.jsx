import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getLessonsList } from 'account/StudentPage/data/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);
let clicked = 0;
let hideForm = true;
let hideHistory = true;


const Lesson = (lessonNum, lessonName, lessonUrl, done) => {
  const [hiddenForm, setHiddenForm] = useState(true);
  const [hiddenHistory, setHiddenHistory] = useState(true);

  const handleClick = (lessonNum, done) => {
    return () => {
      if (hiddenHistory === true) {
        clicked = lessonNum;
        if (done === 0 || done === 4) {
          hideHistory = true;
        } else {
          hideHistory = false;
        }
        if (done === 2 || done === 4) {
            hideForm = true;
        } else {
          hideForm = false;
        }
      }
      else{
        clicked = 0;
        hideHistory = true;
        hideForm = true;
      }
      setHiddenHistory(!hiddenHistory);
      if (done === 2 || done === 4) {
        setHiddenForm(true);
      }
      //hideHistory = hiddenHistory;
      //hideForm = hiddenForm;
      console.log(`clicked:${clicked}`);
      console.log(`hideHistory:${hideHistory}`);
      console.log(`hideForm:${hideForm}`);
    }
  };


  return (
  <div className={cx('lesson')} key={lessonNum}>
    <div className={cx('lessonNum')}><a href={lessonUrl} title={lessonName}>{lessonNum}</a></div>
    <div className={cx('done'+done, 'done')} onClick={handleClick(lessonNum, done)}></div>
  </div>
  )
};

const Form = (className) => {
  if (clicked != 0 && hideForm === false) {
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

const History = (className) => {
  if (clicked != 0 && hideHistory === false) {
    return (
    <div>
      История{clicked}
    </div>
    )
  }
};

function LessonsList({ list, className }) {

  return (
    <div className={cx('studentView', className)}>
      <div className={cx('lessons', className)}>
        {list.map(({ lessonNum, lessonName, lessonUrl, done }) => (
          Lesson(lessonNum, lessonName, lessonUrl, done)
        ))}
      </div>
      {History()}
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
