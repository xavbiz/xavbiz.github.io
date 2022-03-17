import React, { useCallback, useState, useEffect, useRef } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import { Icon } from '~atoms';

import styles from './styles.scss';

/* TODO: Mega refactor to plan */
export const Select = ({ className, name, label, options, helperText, required, validator, err, onInput, ...props }) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(undefined);
  const [invalid, setInvalid] = useState(err);
  const [errors, setErrors] = useState({ default: required ? '*Champs requis' : '', errors: err || [] });
  const [showOptions, setShowOptions] = useState(false);
  const [touched, setTouched] = useState('');
  const [active, setActive] = useState(false);

  const selectInput = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    setErrors({ default: required ? '*Champs requis' : '', errors: err || [] });
  }, [err]);

  useEffect(() => {
    setInvalid(err);
  }, [err]);

  const toggle = useCallback((e) => {
    e.preventDefault();
    setTouched('touched');
    setShowOptions(true);
    setActive(true);
  }, []);

  const onChange = useCallback((e) => {
    setShowOptions(false);

    if (!active) {
      return;
    }

    setActive(false);

    if (container.current.getAttribute('data-status') !== 'touched') {
      return;
    }

    const val = e.target.getAttribute('data-value');
    const oldVal = selectInput.current.getAttribute('data-value');

    if (val && val !== '') {
      setValue(val);
    } 

    const err = val && validator && validator(val);

    if (err || (required && !val)) {
      setValid(false);
      setInvalid(true);
      err && setErrors((r) => ({ ...r, errors: [err]} ));
    } else {
      setInvalid(false);
      setValid(true);
      setErrors((r) => ({ ...r, errors: [] }));
      onInput && onInput([name, val]);
    }
  }, [active]);

  useEffect(() => {
    document && document.body.addEventListener('click', onChange);

    return () => {
      document && document.body.removeEventListener('click', onChange);
    };
  }, []);


  return (
    <div ref={container} className={cn(styles.container, className)} data-status={touched}>
      <div className={cn(styles.subContainer, { [styles.valid] : valid, [styles.invalid] : invalid })}>
        <div ref={selectInput} className={styles.select} onClick={toggle} data-value={value}>{value}</div>
        <div className={cn(styles.options, { [styles.show]: showOptions, [styles[`show${options.length}`]]: showOptions })}>
          {options.map((o, i) => (<div key={i} className={styles.option} data-value={o} onClick={onChange}>{o}</div>))}
        </div>
        <input name={name} value={value} type="hidden" />
        <label htmlFor={name}>{label}</label>
        <Icon icon={faCaretDown} />
      </div>
      {errors.errors.length > 0 ? (<div className={cn(styles.helper, { [styles.red]: invalid })}>{errors.errors.join(', ')}</div>) : helperText ? (<div className={styles.helper}>{helperText}</div>) : errors.default ? (<div className={cn(styles.helper, { [styles.red]: invalid })}>{errors.default}</div>) : null}
    </div>
  );
};

export default Select;
