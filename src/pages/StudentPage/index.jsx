import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';

import { PageLayout } from 'shared';

import { StudentName, LessonsList } from './components';

const cx = classNames.bind(commonStyles);

export default function StudentPage() {
  return (
    <PageLayout>
      <StudentName className={cx('container')}/>
      <LessonsList className={cx('container')}/>
    </PageLayout>
  );
}
