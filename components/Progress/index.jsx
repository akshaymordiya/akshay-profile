import React, { useMemo } from 'react';

import styles from "./Progress.module.scss";

const Progress = ({
  title = "",
  percentage = "",
  color = "",
  className = ""
}) => {

  const styleOb = useMemo(() => {
    return {
      "--progress-width": `${percentage}%`,
      '--color-code': `${color}`
    }
  }, [percentage, color]);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        <p>{title}</p>
        <p>{percentage}%</p>
      </div>
      <div className={styles.progress_bar} style={styleOb}></div>
    </div>
  )
}

export default Progress