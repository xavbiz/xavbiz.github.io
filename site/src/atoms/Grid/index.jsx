import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const Grid = ({className, children, col}) => (
  <div className={styles.grid}>
    <div className={cn(className, styles.content, { [styles[`grid${col}`]]: true })}>
      {children}
    </div>
  </div>
);

Grid.Item = ({ children, col, className }) => {
  const cols = col.split('');
  const colStart = cols.findIndex(f => f === '1') + 1;
  const colSpan = cols.filter(f => f === '1').length;

  return (
    <div className={cn(styles.item, className, { [styles[`item${colStart}${colSpan}`]]: true })}>
      {children}
    </div>
  );
};

export default Grid;
