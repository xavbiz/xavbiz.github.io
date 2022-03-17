import React from 'react';
import { Link } from '@reach/router';
import cn from 'classnames';

import styles from './styles.scss';

export const Button = ({ children, to, className, onClick, inverse }) => (
  <>
    {to ? (
      <Link to={to} className={cn(styles.button, className, {[styles.inverse]: inverse})} onClick={onClick}>
        {children}
      </Link>
    ) : (
      <button className={cn(styles.button, className, { [styles.inverse]: inverse})} onClick={onClick}>
        {children}
      </button>
    )}
  </>
);

export default Button;
