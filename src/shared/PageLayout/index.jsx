import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';

import Header from '../Header';
import Footer from '../Footer';

import styles from './styles.pcss';
const cx = classNames.bind({ ...commonStyles, ...styles });

export default function PageLayout({ children }) {
  return (
    <div className={cx('container')}>
      <Header />
      <div className={cx('containerIn')}>
        <div className={cx('content')}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
};
