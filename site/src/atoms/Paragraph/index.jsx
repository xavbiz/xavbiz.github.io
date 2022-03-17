import React from 'react';
import cn from 'classnames'

import styles from './styles.scss';

export const Paragraph = ({ className, children, strong, emphasis, noTopMargin }) => (
  <p className={cn(styles.p, className, { [styles.strong]: strong, [styles.emphasis]: emphasis, [styles.noTopMargin]: noTopMargin })}>{children}</p>
);

export default Paragraph;
