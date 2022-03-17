import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const Picture = ({ className, image, mobileImage, alt, display }) => (
  <picture className={cn(styles.picture, className, { [styles.cover]: display === 'cover' })}>
    {mobileImage && (<source srcSet={mobileImage} media="(max-width: 930px)" />)}
    <img src={image} alt={alt} />
  </picture>
);

export default Picture;
