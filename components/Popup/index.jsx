import React from 'react'
import Portal from '@/component/Portal';
import styles from "./Popup.module.scss";
//icon
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Popup({
  isOpen,
  onClose,
  children
}) {
  
  return (
    <Portal isOpen={isOpen} onClose={onClose} >
      <div className={`${styles.popup_container} ${isOpen && styles.opened}`}>
        {children}
      </div>
    </Portal>
  )
}

Popup.Header = function PopupHeader({
  children,
  title = null,
  onClose = () => {}
}){
  return (
    <div className={styles.popup_container_header}>
      <div className={styles.box}>
        {title ? (  
          <h4 className={styles.title}>{title}</h4>
        ) : (
          <div>
            {children}
          </div>
        )}
        <CloseRoundedIcon className={styles.icon} onClick={onClose} />
      </div>
    </div>
  )
} 

Popup.Content = function PopupContent({
  children
}){
  return (
    <div className={styles.popup_container_content}>
      {children}
    </div>
  )
} 

Popup.Footer = function PopupFooter({
  children
}){
  return (
    <div className={styles.popup_container_footer}>
      {children}
    </div>
  )
} 

