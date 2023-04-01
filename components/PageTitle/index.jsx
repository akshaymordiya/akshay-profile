import React from 'react';
import styles from "./PageTitle.module.scss";

const PageTitle = ({
  title = "",
  children
}) => {
  return (
    <div className={styles.page_title}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        {children}
      </div>
      <p className={styles.copyright}>© 2023 All Rights Reserved</p>
    </div>
  )
}

export default PageTitle;