import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const List = ({ className, children }) => (
  <ul className={cn(styles.list, className)}>
    {children}
  </ul>
);

List.Item = ({ children }) => (
  <li><span>{children}</span></li>
);

export default List;
