import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { Icon } from '~atoms';

import styles from './styles.scss';

export const Checkbox = ({ onClick, name, value }) => {
  const [innerValue, setInnerValue] = useState(value === '' ? 'off' : 'on');

  const toggle = () => {
    setInnerValue(innerValue === 'off' ? 'on' : 'off');
  };

  return (
    <span className={styles.box} onClick={toggle}>
      <input type="hidden" name={name} onClick={onClick} value={innerValue} />
      {innerValue === 'on' ? (
        <FontAwesomeIcon icon={faCheckSquare} />
      ) : (
        <FontAwesomeIcon icon={faSquare} />
      )}
    </span>
  );
};

export default Checkbox;


