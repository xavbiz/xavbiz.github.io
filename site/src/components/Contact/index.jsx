import React, { useCallback, useRef, useEffect, useState } from 'react';
import { faCheck, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import { Button, Card, Grid, Icon, Input, Select, Textarea, Paragraph, Picture, Title, Section } from '~atoms';
import { homePage } from '~routes';

import styles from './styles.scss';

const email = (val) => {
  if (!/\S+@\S+\.\S+/.test(val)) {
    return 'Please provide a valid email address';
  }

  return false;
};

const phone = (val) => {
  if (!/(\d{10}|(\d\d\s?){5})/g.test(val)) {
    return 'Please provide a valid phone number (xxxxxxxxxx, xx xx xx xx xx)';
  }

  return false;
};

const groups = [
  {
    title: 'Are you already farming?',
    name: 'farmer',
    inputs: [
      {
        type: 'text',
        name: '$isFarmerCropsType',
        label: 'Which type of crops?',
      },
      {
        type: 'text',
        name: '$isFarmerSurface',
        label: 'How many acres?',
      },
      {
        type: 'text',
        name: '$isFarmerRegion',
        label: 'Which Region?',
      },
      {
        type: 'checkbox',
        name: '$isFarmerPlanToExpand',
        label: 'Do you plan to expand your actual farm?',
      },
      {
        type: 'checkbox',
        name: '$isFarmerPlanToDiversify',
        label: 'Do you plan to diversify your crops?',
      },
      {
        type: 'text',
        name: '$isFarmerCropsToPlant',
        label: 'Which types of crops would you like to plant?',
      },
      {
        type: 'checkbox',
        name: '$isFarmerTypeOfOwnership',
        label: 'Do you own your land, rent from private owner, lease from the government?',
      },
      {
        type: 'checkbox',
        name: '$isFarmerInAssociation',
        label: 'Are you in cooperative, member of an association?',
      },
      {
        type: 'checkbox',
        name: '$isFarmerLookingForFinancing',
        label: 'Are you looking for financing?',
      },
      {
        type: 'checkbox',
        name: '$isFarmerLookingForAssistance',
        label: 'Are you looking for technical assistance?',
      },
    ],
  },
  {
    title: 'If you are not a farmer and if you plan to go farming',
    name: 'nofarmer',
    inputs: [
      {
        type: 'text',
        name: '$notFarmerCropsType',
        label: 'Which type of crops are you thinking of planting?',
      },
      {
        type: 'text',
        name: '$notFarmerSurface',
        label: 'How many acres?',
      },
      {
        type: 'text',
        name: '$notFarmerRegion',
        label: 'Which Region?',
      },
      {
        type: 'checkbox',
        name: '$notFarmerTypeOfOwnership',
        label: 'Will it be on your own land, rent from private owner, lease from the government?',
      },
      {
        type: 'checkbox',
        name: '$notFarmerLookingForFinancing',
        label: 'Will you look for financing?',
      },
      {
        type: 'checkbox',
        name: '$notFarmerLookingForAssistance',
        label: 'Will you look for technical assistance?',
      },
    ],
  },
  {
    title: 'Leave us your contact information',
    name: 'contact',
    inputs: [
      {
        type: 'email',
        name: 'email',
        label: 'Your email',
      },
      {
        type: 'tel',
        name: 'phone',
        label: 'Your cell phone number',
      },
    ],
  }
];

const URL = 'https://api.staticforms.xyz/submit';
const ACCESS_KEY = 'ac2af8ed-4440-408b-9685-2323cf8a69a7';

export const Contact = () => {
  const [inputList, setInputList] = useState(groups.reduce((i, j) => [...j.inputs, ...i], []));
  const [formSent, setFormSent] = useState(false);
  const [formSubmissionError, setFormSubmissionError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formValues, setFormValues] = useState(false);
  const formElement = useRef(null);

  useEffect(() => {
    if (!submitting) {
      return;
    }

    async function send() {
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formValues, accessKey: ACCESS_KEY }),
        });

        if (!response.ok) {
          throw Error('error');
        }

        setFormSent(true);
        setSubmitting(false);
      } catch (e) {
        setFormSubmissionError(true);
        setSubmitting(false);
      }
    }

    send();
  }, [submitting, formValues]);

  const submit = (e) => {
    e.preventDefault();

    const newInputList = inputList.map(i => ({
      ...i,
      errors:
        i.type === 'textarea' ? [] : i.validator ? [i.validator(formElement.current[i.name].value)] : [],
    }));

    const hasNoErrors = newInputList.every(i => (i.errors[0] === false || i.errors.length === 0));
    const hasAtLeastOneValue = newInputList.some(i => {
      if (i.type === 'checkbox') {
        return formElement.current[i.name].value === 'on';
      } else {
        return formElement.current[i.name].value !== '';
      }
    });

    const isFormValid = hasNoErrors && hasAtLeastOneValue;

    if (!isFormValid) {
      setInputList(newInputList.map(i => ({ ...i, errors: i.errors[0] === false ? [] : i.errors })));
      return;
    }

    setFormValues(inputList.reduce((a, i) => ({ ...a, [i.name]: formElement.current[i.name].value}), {}));

    setSubmitting(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.bg} />
      <Section>
        <Grid col="5">
          <Grid.Item col="01110">
            <Card>
              <Title>Let us know about your project:</Title>
              <Paragraph>We could find financing solutions for its feasibility study, emergence and expansion.</Paragraph>
              <form ref={formElement} action="" mehtod="post" className={cn(styles.form)}>
                {submitting && (
                  <div className={styles.formSubmitting}><Icon icon={faSpinner} className={styles.spinner} size="3x" spin /></div>
                )}
                {formSubmissionError && (
                  <div className={styles.formError}>
                    <Icon icon={faTimes} className={styles.formErrorIcon} size="3x" />
                    <Paragraph>Oups, we're having difficulties submitting your responses. Please try again later.</Paragraph>
                    <Button to={homePage.path}>Back to Home</Button>
                  </div>
                )}
                {formSent && !formSubmissionError && (
                  <div className={styles.formSent}>
                    <Icon icon={faCheck} className={styles.formSentIcon} size="3x" />
                    <Paragraph>Your responses have been successfuly submitted</Paragraph>
                    <Button to={homePage.path}>Back to Home</Button>
                  </div>
                )}
                {groups.map(j => (
                    <div key={j.name} className={styles.section}>
                      <div className={styles.subsection}>{j.title}</div>
                      <div className={styles.formWrapper}>
                        {j.inputs.map(i => 
                          i.type === 'textarea' ?
                            <Textarea key={i.name} className={styles.input} name={i.name} label={i.label} type={i.type} validator={i.validator} err={i.errors} /> :
                            <Input key={i.name} className={styles.input} name={i.name} label={i.label} type={i.type} validator={i.validator} err={i.errors} />
                        )}
                      </div>
                    </div>
                ))}
                <div className={styles.formActions}>
                  <Button className={styles.submit} onClick={submit}>Send</Button>
                </div>
              </form>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
    </div>
  );
};

export default Contact;
