import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const Title = ({ className, noMargin, centered, children }) => (
  <h2 className={cn(styles.title, className, { [styles.noMargin]: noMargin, [styles.centered]: centered })}>
    {children}
  </h2>
);

export default Title;
