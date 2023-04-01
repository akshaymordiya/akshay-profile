import React from 'react'
import styles from "./GrayBox.module.scss";

const GrayBox = ({
  children,
  className = '',
  onClick = () => {}
}) => {
  return (
    <div 
      className={`${styles.gray_box} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default GrayBox