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
  const [hidden, setHidden] = useState(true);

  const handleClick = (lessonNum, done) => {
    return () => {
      if (hidden === true) {
        clicked = lessonNum;
        hideHistory = (done === 0 || done === 4) ? true : false;
        hideForm = (done === 1 || done === 2 || done === 4) ? true : false;
      }
      else{
        clicked = 0;
        hideHistory = true;
        hideForm = true;
      }
      setHidden(!hidden);
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
        <label className={cx('label', className)}>Отправить на проверку домашнее задание по лекции №{clicked}</label>
        <textarea className={cx('inputField', className)} type="text" id="hwLink" name="hwLink" rows="10"></textarea>
      </section>
      <button className={cx('btn', 'submit', className)} type="submit">
        Отправить
      </button>
    </form>
    )
  }
};

const HistoryLine = (id, date, desc) => {
  return (
    <div className={cx('lessonHistoryLine')} key={id}>
      <div className={cx('lessonHistoryDate')}>{date}</div>
      <div className={cx('')}>{desc}</div>
    </div>
    )
};

const History = (list, className) => { 
  if (clicked != 0 && hideHistory === false) {
    return (
    <div className={cx('lessonHistoryBlock', className)}>
      <div className={cx('lessonHistoryName', className)}>История сдачи домашнего задания по лекции №{clicked}</div>
      <div className={cx('lessonHistory', className)}>
        {list[clicked-1].history.map(({ id, date, desc }) => (
            HistoryLine(id, date, desc)
        ))}
      </div>
    </div>
    )
  }
};

function LessonsList({ list, className }) {

  return (
    <div className={cx('studentView', className)}>
      <div className={cx('lessons', className)}>
        {list.map(({ lessonNum, lessonName, lessonUrl, done, history }) => (
          Lesson(lessonNum, lessonName, lessonUrl, done)
        ))}
      </div>
      {History(list)}
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
