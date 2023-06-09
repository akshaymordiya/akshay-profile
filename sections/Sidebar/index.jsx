import React, { Fragment } from 'react';
//components
import ContactPanel from "@/components/ContactPanel";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Social from "@/components/Social"
//icons
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import styles from "./Sidebar.module.scss";
//data
import data from "@/data";

const Left = () => {
  const { sidebar = {}} = data;

  return (
    <Fragment>
      <Avatar />
      <div className={styles.left_info}>
        <div>
          <h2>{sidebar.name}</h2>
          <p className={styles.role}>{sidebar.tag}</p>
          <Social links={sidebar.links}/>
        </div>
        <div className={styles.contact_panel}>
          <ContactPanel contactInfo={sidebar.contact} />
          <Button 
            text='Download CV'
            className={styles.download_btn}
            rightIcon={(
              <FileDownloadIcon />
            )}
            href={sidebar.download_url}
            download
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Left