import React from 'react';

import { Grid } from '~atoms';

import { container } from './styles.scss';

export const PageContainer = ({ children, col}) => (
  <Grid className={container} col={col}>
    {children}
  </Grid>
)

export default PageContainer;
