import React from 'react'
import styles from "./Input.module.scss";

const Input = ({
  id,
  name,
  placeholder,
  value,
  containerClass,
  inputClass,
  type,
  onChange = () => {},
  onBlur = () => {},
  label,
  errorTexts = [],
  ...rest
}) => {
  return (
    <div className={`${styles.floating} ${containerClass}`}>
      <input 
        id={id} 
        className={`${styles.floating__input} ${inputClass}`} 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...rest} 
      />
      <label htmlFor={id} className={styles.floating__label} data-content={label}></label>
      {errorTexts.length > 0 && errorTexts.map((error ,index) => (
        <p key={index} className={styles.error_text}>{error}</p>
      ))}
    </div>
  )
}

export default Input