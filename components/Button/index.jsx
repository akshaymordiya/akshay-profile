import React from 'react'
import styles from "./Button.module.scss"

const Button = ({
  text = "",
  className = "",
  leftIcon = <></>,
  rightIcon = <></>,
  onClick = () => {},
  children,
  download = null,
  href = ""
}) => {
  return (
    <a 
      className={`${styles.button} 
      ${className}`} 
      onClick={onClick} 
      {...(download) ? {
        download: "cv",
        href
      } : {
        onClick
      }}
      >
      {leftIcon && (
        <span>
          {leftIcon}
        </span>
      )}
      {text || children}
      {rightIcon && (
        <span>
          {rightIcon}
        </span>
      )}
    </a>
  )
}

export default Button