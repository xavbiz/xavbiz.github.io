import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const SubTitle = ({ className, children, small }) => (
  <h3 className={cn(styles.title, className, {[styles.small]: small})}>
    {children}
  </h3>
);

SubTitle.Sub = ({ className, children }) => (
  <span className={cn(styles.sub, className)}>
    {children}
  </span>
);

export default SubTitle;
