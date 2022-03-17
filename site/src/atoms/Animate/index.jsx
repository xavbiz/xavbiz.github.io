import React, { useRef, useEffect } from 'react';

import styles from './styles.scss';

const options = {
  root: null,
  rootMargin: '0px',
  treshold: 1,
};

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.isVisible);
    } else {
      entry.target.classList.remove(styles.isVisible);
    }
  });
};

let observer;

export const Animate = ({ children }) => {
  observer = window && observer === undefined ? new IntersectionObserver(callback, options) : undefined;
  return (<div className={styles.parent}>{children}</div>);
}

Animate.FromLeft = ({ children }) => {
  const node = useRef(null);

  useEffect(() => {
    observer.observe(node.current);

    return () => {
      observer.unobserve(node.current);
    }
  }, []);

  return (<div ref={node} className={styles.fromLeft}>{children}</div>);
}

Animate.FromRight = ({ children }) => {
  const node = useRef(null);

  useEffect(() => {
    observer.observe(node.current);

    return () => {
      observer.unobserve(node.current);
    }
  }, []);

  return (<div ref={node} className={styles.fromRight}>{children}</div>);
}

Animate.FromTop = ({ children }) => {
  const node = useRef(null);

  useEffect(() => {
    observer.observe(node.current);

    return () => {
      observer.unobserve(node.current);
    }
  }, []);

  return (<div ref={node} className={styles.fromTop}>{children}</div>);
}

export default Animate;
