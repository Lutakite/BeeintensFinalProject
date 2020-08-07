import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function Youtube({ children, className }) {
  const Tag = 'iframe';
  const link = `${children}`;

  return (
    <Tag width="949" height="534" src={link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </Tag>
  );
}

Youtube.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
