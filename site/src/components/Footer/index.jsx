import React from 'react';

import { footer } from './styles.scss';

export const Footer = () => (
  <footer className={footer}>
    <ul>
      <li>© Carbon Free Planet - {new Date().getFullYear()}</li>
    </ul>
  </footer>
);

export default Footer;
