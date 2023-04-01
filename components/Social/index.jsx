import React, { useMemo } from 'react'
//components
import GrayBox from "@/components/GrayBox";
//icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./Social.module.scss";

const Social = ({
  links = []
}) => {

  const icon = useMemo(() => {
    return {
      "linkedin": LinkedInIcon,
      "github": GitHubIcon,
      "instagram": InstagramIcon,
      "facebook": FacebookRoundedIcon
    }
  }, []);

  return (
    <div className={styles.social_icons}>
      {links.map((link) => {
        const Icon = icon[link.key];
        return (
          <a key={link.key} href={link.href} target='blank'>
            <GrayBox className={`${styles.icon} ${styles[link.key]}`}>
              <Icon fontSize='small'/>
            </GrayBox>
          </a>
        )
      })}
    </div>
  )
}

export default Social