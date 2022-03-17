import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const Section = ({ children, margin, className, noTopMargin, home }) => (
  <section className={cn(styles.section, className)}>
    <div className={cn(styles.content, {[styles.margin]: margin, [styles.noTopMargin]: noTopMargin })}>
      {children}
    </div>
  </section>
);

export default Section;
