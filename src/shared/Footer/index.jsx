import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';
import ContentIndent from '../ContentIndent';

import styles from './styles.pcss';
import myimage from './beeline_logo_footer.PNG'
const cx = classNames.bind({ ...commonStyles, ...styles });


export default function Footer() {
  return (
    <ContentIndent className={cx('component', 'padv-xs')}>
      <div className={cx('middle')}>
        <a href="https://beeline.ru"><img src={myimage}></img></a>
      </div>
    </ContentIndent>
  );
}
