import React, { useCallback, useEffect, useState } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import { Icon } from '~atoms';

import styles from './styles.scss';

export const Textarea = ({ className, name, label, type, helperText, required, validator, err, ...props }) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(undefined);
  const [invalid, setInvalid] = useState(err);
  const [errors, setErrors] = useState({ default: required ? '*Champs requis' : '', errors: err || [] });

  useEffect(() => {
    setErrors({ default: required ? '*Champs requis' : '', errors: err || [] });
  }, [err]);

  useEffect(() => {
    if (err && err.length > 0) {
      setInvalid(true);
    }
  }, [err]);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, [value]);

  const onBlur = useCallback((e) => {
    const val = e.target.value;
    const err = validator && validator(val);

    if (err || (required && val === '')) {
      setValid(false);
      setInvalid(true);
      err && setErrors((r) => ({ ...r, errors: [err]} ));
    } else {
      setInvalid(false);
      setValid(true);
      setErrors((r) => ({ ...r, errors: [] }));
    }
  }, [value]);

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.subContainer, { [styles.valid] : valid, [styles.invalid] : invalid })}>
        <textarea name={name} value={value} onChange={onChange} onBlur={onBlur} type={type} {...props} />
        <label htmlFor={name}>{label}</label>
        {valid && !invalid && (<Icon icon={faCheck} />)}
        {invalid && !valid && (<Icon icon={faTimes} />)}
      </div>
      {errors.errors.length > 0 ? (<div className={cn(styles.helper, { [styles.red]: invalid })}>{errors.errors.join(', ')}</div>) : helperText ? (<div className={styles.helper}>{helperText}</div>) : errors.default ? (<div className={cn(styles.helper, { [styles.red]: invalid })}>{errors.default}</div>) : null}
    </div>
  );
};

export default Textarea;
