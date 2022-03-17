import React, { useCallback } from 'react';
import cn from 'classnames';

import { Card, Dropdown, Grid, PageContainer, Paragraph, Button, Section, Title, SubTitle, List, Hero, Modal, Slider, Link, Animate, Quote } from '~atoms';
import { contactPage } from '~routes';

import styles from './styles.scss';

export const Home = () => {
  return (
    <>
      <Section className={styles.bg}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleText}>
            <h1 className={styles.title}>
              <span>Are you a farmer?</span>
              <span>Willing to go into farming?</span>
            </h1>
          </div>
        </div>
      </Section>
      <Grid col="1">
        <Grid.Item col="1">
          <p className={cn(styles.wrapper, styles.hero)}>We may help you to finance your project</p>
        </Grid.Item>
      </Grid>
      <Section noTopMargin>
        <Grid col="1">
          <Grid.Item col="1">
              <Title noMargin>Who we are</Title>
              <Paragraph>Xavier Richard and Pierre Saint-Arroman set up <strong>Amazon Caribbean Guyana Ltd</strong> in 1986, <strong>built 3 canning factories</strong> for the processing of manicole palms and pineapple in Region 1,2 and 5.. Since then, the company has been taken over by <strong>local entrepreneurs who have further expanded</strong>, providing revenue to thousands of households.</Paragraph>
              <Paragraph>Today, we congratulate young Guyanese entrepreneurs developing cutting edge farming projects such as the <strong>Plymton farm, the Caribbean Coconuts & Spices estate</strong>, and others.</Paragraph>
              <Paragraph><Quote>Hundreds of such projects can blossom in Guyana through innovative co-financing mechanism.</Quote></Paragraph>
              <Paragraph><strong>We deal with international institutions</strong> looking for agriculture development opportunities, particularly in agro-forestry (coffee, cocoa, coconut, cherry trees, papaya, golden apple, breadfruit, jackfruit trees, brazil nut trees, manicole palm, etc. ) in any Region of Guyana.</Paragraph>
          </Grid.Item>
        </Grid>
      </Section>
      <Section margin>
        <Hero grey>
          <Hero.Title>Let us know about your project: we could find financing solutions for its feasibility study, emergence and expansion.</Hero.Title>
          <Hero.Content>
            <Button to={contactPage.path}>Get in touch</Button>
          </Hero.Content>
        </Hero>
      </Section>
    </>
  );
};

export default Home;
