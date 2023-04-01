import React from 'react'
import { useRouter } from 'next/router';
//components
import GrayBox from "@/components/GrayBox";
//icon
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import InterestsIcon from '@mui/icons-material/Interests';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import styles from "./Navigation.module.scss";

const menuFormats = {
  "about": {
    icon: <PersonIcon />,
    text: "About",
    route: "/"
  },
  "resume": {
    icon: <ArticleIcon />,
    text: "Resume",
    route: "/resume"
  },
  "work": {
    icon: <InterestsIcon />,
    text: "Work",
    route: '/work'
  },
  "contact": {
    icon: <ContactPhoneIcon />,
    text: "Contact",
    route: "/contact"
  }
}

const Navigation = () => {

  const router = useRouter();
  
  const handleRouteChange = (key) => {
    router.push(`/${key}`)
  }

  // 
  return (
    <div className={styles.nav_container}>
      {Object.keys(menuFormats).map(key => (
        <GrayBox key={key} className={`${styles.nav_box} ${menuFormats[key].route === router.pathname ? styles.active : ""}`} onClick={() => handleRouteChange(menuFormats[key].route)}>
          {menuFormats[key].icon}
          <h5>{menuFormats[key].text}</h5>
        </GrayBox>
      ))}
    </div>
  )
}

export default Navigation