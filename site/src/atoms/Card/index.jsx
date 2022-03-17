import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const Card = ({ children, className }) => (
  <div className={cn(styles.card, className)}>
    {children}
  </div>
);

export default Card;
