import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';

import { PageLayout } from 'shared';

import { LessonName, LessonYoutube } from './components';

const cx = classNames.bind(commonStyles);

export default function LessonPage() {  
  return (
    <PageLayout>
      <LessonName/>
      <LessonYoutube/>
    </PageLayout>
  );
}
/*xport default function LessonPage() {  
  return (
    <PageLayout><LessonName></LessonName></PageLayout>
  );
}*/
