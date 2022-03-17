import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({ icon, className, onClick, ...props }) => (
  <FontAwesomeIcon icon={icon} className={className} onClick={onClick} {...props} />
);

export default Icon;
