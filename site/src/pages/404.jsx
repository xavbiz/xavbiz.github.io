import React from 'react'
import { Title, Button } from '~atoms';
import { homePage } from '~routes';

import styles from './styles.scss';

export default () => (
  <div className={styles.wrapper}>
    <Title>Oups, this page doesn't exist</Title>
    <Button to={homePage.path}>Back to Home</Button>
  </div>
)
