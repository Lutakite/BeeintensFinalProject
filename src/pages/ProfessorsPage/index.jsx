import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';

import { PageLayout } from 'shared';

import { ProfessorsList } from './components';

const cx = classNames.bind(commonStyles);

export default function ProfessorsPage() {  
  return (
    <PageLayout>
      <ProfessorsList className={cx('container')}/>
    </PageLayout>
  );
}
