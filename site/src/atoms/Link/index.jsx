import React from 'react';
import { Link } from '@reach/router';
import cn from 'classnames';

import { composeCb } from '~utils';

import styles from './styles.scss';

export const CustomLink = ({ children, to, className, noStyle, cb, external, onClick }) => external ? (
  <a href={to} className={cn(!noStyle && styles.link, className)} onClick={composeCb([cb, onClick])} target="_blank">
    {children}
  </a>
) : (
  <Link to={to} className={cn(!noStyle && styles.link, className)} onClick={composeCb([cb, onClick])}>
    {children}
  </Link>
);

export default CustomLink;

