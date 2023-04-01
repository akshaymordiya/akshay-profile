import React, { useState } from 'react';
//components
import Head from 'next/head';
import Fade from "@/component/Fade";
import PageTitle from "@/component/PageTitle";
import Input from '@/component/Input';
import Button from '@/component/Button';
//icons
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

import styles from "@/styles/Contact.module.scss";
import { isValidEmail, isValidInput } from 'helpers';


const defaultNotificationState = {
  isOpen: false,
  content: "",
  icon: <></>,
  type: ""
}

const validators = {
  "email": isValidEmail,
  "name": isValidInput,
  "message": isValidInput
}

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Notification, setNotification] = useState(defaultNotificationState);
  const [mailInProgress, setMailInProgress] = useState(false);
  const [error, setError] = useState({
    name: [],
    email: [],
    message: []
  });

  const handleSendEmail = () => {

    const errorKeys = Object.keys(error);
    if(
      errorKeys.some(key => error[key].length > 0) || 
      [email, name, message].some(value => value === "")
    ){
      setNotification({
        isOpen: true,
        content: "Please fill all the required fields",
        icon: <ErrorOutlineIcon />,
        type: "error"    
      });

      setTimeout(removeNotification, 15000);
      return;
    }

    setMailInProgress(true);
    fetch(`/api/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === 200){
        console.log("Email send successfully");
        setNotification({
          isOpen: true,
          content: "Thank you for submitting the form, I will get back to you soon.",
          icon: <DoneAllRoundedIcon />,
          type: "success"
        });
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(removeNotification, 15000);
      }
    })
    .catch(err => console.error(err))
    .finally(() => {
      setMailInProgress(false);
    });
  }

  const removeNotification = () => {
    setNotification(defaultNotificationState)
  }

  const validateInput = (key, value) => {
    const validate = validators[key](value);
    if(!validate?.isValid){
      setError(prevState => ({
        ...prevState,
        [key]: [validate.message]
      })) 
    } else {
      setError(prevState => ({
        ...prevState,
        [key]: []
      }))
    }
  }

  return (
    <Fade>
      <Head>
        <title>Contact | Akshay Moradiya - Work Portfolio</title>
        <meta name="description" content="Get in touch with akshay moradiya by filling out the contact form. Ask about their work, availability, or any other questions you may have." />
        <meta name="keywords" content="Contact, akshay moradiya, Personal Portfolio, Work, Availability, Questions" />
        <meta property="og:title" content="Contact | Akshay Moradiya - Work Portfolio" />
        <meta property="og:description" content="Get in touch with akshay moradiya by filling out the contact form. Ask about their work, availability, or any other questions you may have." />
        <meta property="og:image" content="/about.jpg" />
        <meta property="og:image:alt" content="Akshay Moradiya - Work Portfolio - Contact" />
      </Head>
      <PageTitle
        title='Contact Me'
      >
        <div className={styles.contact_container}>
          <p>{`I'm always open to discussing product`}</p>
          <h3>design work or partnerships.</h3>
          {Notification.isOpen && (
            <div className={`${styles.notification_container} ${styles[Notification.type]}`}>
              <div className={`${styles.main} ${styles[Notification.type]}`}>
                {Notification.icon}
                <p className={`${styles.text} ${styles[Notification.type]}`}>{Notification.content}</p>
              </div>
              <div className={`${styles.close_icon} ${styles[Notification.type]}`}>
                <HighlightOffIcon onClick={removeNotification} />
              </div>
            </div>
          )}
          <div className={styles.form_container}>
            <Input 
              name={"Name"}
              placeholder="Name"
              value={name}
              type="text"
              label="Name *"
              containerClass={styles.margin}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) => validateInput('name', e.target.value)}
              errorTexts={error.name}
            />
            <Input 
              name={"Email"}
              placeholder="Email Address"
              value={email}
              type="email"
              label="Email Address *"
              containerClass={styles.margin}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => validateInput("email", e.target.value)}
              errorTexts={error.email}
              />
            <Input 
              name={"Message"}
              placeholder="Message"
              value={message}
              type="text"
              label="Message *"
              containerClass={styles.margin}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={(e) => validateInput('message', e.target.value)}
              errorTexts={error.message}
            />
            <Button
              className={`${styles.submit_btn} ${mailInProgress && styles.x_space}`}
              onClick={handleSendEmail}
            >
              <p className={`${styles.btn_text} ${mailInProgress ? styles.right_space : styles.x_space}`}>
                {mailInProgress ? 'Submitting...' : 'Submit'}
              </p>
              {mailInProgress && (
                <ForwardToInboxIcon fontSize='small'/>
              )}
            </Button>
          </div>
        </div>
      </PageTitle>
    </Fade>
  )
}

export default Contact