import React from 'react'
import GrayBox from '@/components/GrayBox'
import styles from "./ContactInfo.module.scss"

const ContactInfo = ({
  icon = <></>,
  label = '',
  text = "",
  isLink = false,
  className = "",
  hrefPrefix = "",
  iconClass = ""
}) => {
  return (
    <div className={`${styles.box} ${className}`}>
      <GrayBox className={`${styles.icon} ${iconClass}`} >
        {icon}
      </GrayBox>
      <div className={styles.container}>
        <span>{label}</span>
        {isLink ? (
          <a 
            href={`${hrefPrefix}:${text}`}
            className={styles.text}
          >
            {text}
          </a>
        ) : (
          <p className={styles.text}>{text}</p>
        )}
      </div>
    </div>
  )
}

export default ContactInfo