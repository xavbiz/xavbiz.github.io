import React from 'react';

import { footer } from './styles.scss';

export const Footer = () => (
  <footer className={footer}>
    <ul>
      <li>© Carbon Free Planet - {new Date().getFullYear()}</li>
      <li>Credits:	Coconut trees  / Pomeroon Trading | Caribbean Coconuts & Spices</li>
    </ul>
  </footer>
);

export default Footer;
