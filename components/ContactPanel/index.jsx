import React from 'react';
//components
import ContactInfo from "@/components/Card/ContactInfo";
//icons
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from "./ContactPanel.module.scss";

const icon = {
  "phone": PhoneAndroidIcon,
  "email": MailOutlineIcon,
  "location": LocationOnIcon 
}

const ContactPanel = ({
  contactInfo = {}
}) => {

  return (
    <div className={styles.contact_info}>
      {Object.entries(contactInfo).map(contact => {
        const Icon = icon[contact[0]];
        const info = contact[1];
        return (
          <ContactInfo
            key={contact[0]}
            isLink={info.isLink}
            label={info.title}
            text={info.value}
            hrefPrefix={info.hrefPrefix}
            icon={(
              <Icon 
                fontSize='small'
              />
            )}
            iconClass={styles[contact[0]]}
            className={styles.card}
          />
        )
      })}
    </div>
  )
}

export default ContactPanel