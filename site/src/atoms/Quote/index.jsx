import React from 'react';
import cn from 'classnames'

import styles from './styles.scss';

export const Quote = ({ className, children }) => (
  <span className={cn(styles.p, className)}><span className={styles.quote}>“</span>{children}</span>
);

export default Quote;

