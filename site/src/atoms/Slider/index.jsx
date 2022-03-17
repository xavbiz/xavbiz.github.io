import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Icon, Button } from '~atoms';

import styles from './styles.scss';

const useSliderControl = (slideNumber) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const speed = 10000;
  
  const previous = () => setActiveSlide(activeSlide <= 0 ? slideNumber - 1 : activeSlide - 1);
  const next = () => setActiveSlide((activeSlide + 1) % slideNumber);
  const goTo = (i) => () => setActiveSlide(i);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(active => (active + 1) % slideNumber);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  const controls = {
    previous,
    next,
    goTo
  };

  return [controls, activeSlide];
};

export const Slider = ({ children }) => {
  const [controls, activeSlide] = useSliderControl(children.length - 1);

  return (
    <div className={styles.slider}>
      <div className={styles.upper}>
        <div className={styles.prev} onClick={controls.previous}><Icon icon={faChevronLeft} /></div>
        <div className={cn(styles.wrapper, styles[`slide${activeSlide + 1}`])}>
          {children}
        </div>
        <div className={styles.next} onClick={controls.next}><Icon icon={faChevronRight} /></div>
      </div>
      <div className={styles.lower}>
        {new Array(children.length - 1).fill(1).map((_, i) => (
          <div key={`slider-${i}`} onClick={controls.goTo(i)} className={cn(styles.quickAccess, {[styles.quickAccessActive]: i === activeSlide})} />
        ))}
      </div>
    </div>
  );
};

Slider.Item = ({children, className}) => (
  <div className={cn(styles.item, className)}>
    {children}
  </div>
);

export default Slider
