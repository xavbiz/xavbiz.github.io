import React from 'react';
import cn from 'classnames';

import { Title } from '~atoms';

import styles from './styles.scss';

export const Hero = ({ grey, children }) => (
  <div className={cn(styles.hero, {[styles.grey]: grey})}>
    {children}
  </div>
);

Hero.Title = ({ children }) => (
  <Title className={styles.title}>{children}</Title>
);
Hero.Content = ({ children, className, horizontal }) => (
  <div className={cn(styles.content, className, {[styles.horizontal]: horizontal})}>
    {children}
  </div>
);

export default Hero;
