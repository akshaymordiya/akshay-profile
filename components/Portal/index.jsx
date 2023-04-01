import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from "./Portal.module.scss"

const Portal = ({
  children,
  isOpen = false,
  onClose
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#portal")
    setMounted(true)
  }, []);

  if((!mounted || !ref.current ||!isOpen)) {
    return null
  }

  const handleOnClick = (e) => {
    if(!containerRef.current.contains(e.target)){
      onClose();
    }
  }

  return createPortal(
    <div  className={`${styles.overlay} ${isOpen && styles.opened}`} onClick={handleOnClick}>
      <div id='wrapper-container' ref={containerRef}>
        {children}
      </div>
    </div>
  , ref.current);
}

export default Portal