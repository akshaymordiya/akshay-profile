import React, { useMemo, useState } from 'react'
import Image from 'next/image';
//components
import Head from 'next/head';
import Fade from "@/component/Fade";
import PageTitle from "@/component/PageTitle";
//image
import styles from "@/styles/Work.module.scss";
//data
import data from "@/data";
import Popup from '@/component/Popup';
import Button from '@/component/Button';

const defaultModalState ={
  isOpen: false,
  data : {}
}

const defaultNote = `If you can't find the project gallary, You can contact me for more details on project. In some of the projects, I've signed NDA and contract, so I can only demonstrate the system under surveillance of our representative. In exceptional cases clients may no longer be using system or project may be abandoned, I will provide offline demonstration of software system.`;

const Work = () => {

  const [modal, setModal] = useState(defaultModalState);
  const [activeImage, setActiveImage] = useState(null);

  const updateModal = (updatedObj) => {
    setModal(prevState => ({
      ...prevState,
      ...updatedObj
    }));
  }

  const handleModalOpen = (projectData = {}) => {
    updateModal({
      isOpen: true,
      data: projectData
    });
    let activeImageIndex = null;
    if(projectData.gallary.length){
      activeImageIndex = Math.floor(projectData.gallary.length / 2);
    }

    setActiveImage(activeImageIndex);
  }

  const previewImage = useMemo(() => {

    if(!Object.keys(modal.data).length){
      return ''
    }

    if(activeImage !== null){
      return modal.data?.gallary[activeImage];
    }

    return modal.data?.thumbnail
  }, [modal.data, activeImage]);

  const onClose = () => setModal(defaultModalState)

  return (
    <Fade>
      <Head>
        <title>Projects | Akshay Moradiya - Work Portfolio</title>
        <meta name="description" content="View akshay moradiya's projects and portfolio. Check out their latest work and learn about their skills and experience." />
        <meta name="keywords" content="Projects, Portfolio, Akshay Moradiya, Work, Skills, Experience" />
        <meta property="og:title" content="Projects | Akshay Moradiya - Work Portfolio" />
        <meta property="og:description" content="View akshay moradiya's projects and portfolio. Check out their latest work and learn about their skills and experience." />
        <meta property="og:image" content="/about.jpg" />
        <meta property="og:image:alt" content="Akshay Moradiya - Work Portfolio - Projects" />
      </Head>
      <PageTitle
        title='Portfolio'
      >
        <div className={styles.work_collection}>
          {(data.portfolios || []).map(work =>(
            <div key={work.key} className={styles.work_collection_box} onClick={() => handleModalOpen(work)}>
              <Image src={`/${work.image}`} className={styles.work_collection_box_image} width="400" height="300"></Image>
              <h3 className={styles.work_collection_box_title} >{work.title}</h3>
              <span className={styles.work_collection_box_excert}>{work.excert}</span>
            </div>
          ))}
        </div>
        <Popup isOpen={modal.isOpen} onClose={onClose}>
            <Popup.Header title={modal.data?.title} onClose={onClose}></Popup.Header>
            <Popup.Content>
              {modal.data?.thumbnail && (
                <div className={styles.popup_image_container}>
                  <Image src={`/${previewImage}`} className={styles.image} width="900" height="700" />
                </div>
              )}
              {(modal.data?.gallary && modal.data?.gallary?.length !== 0) && (
                <div className={styles.popup_image_gallary}>
                  {modal.data?.gallary.map((img, i) => (
                    <Image 
                      key={i + 5}
                      src={`/${img}`}
                      className={`${styles.gallary_img} ${i === activeImage && styles.activeImg}`}
                      width="400"
                      height="300"
                      onClick={() => setActiveImage(i)}
                    />
                  ))}
                </div>
              )}
              <div className={styles.popup_content}>
                <h1>About the contract</h1>
                <p className={styles.content}>{modal.data?.content !== "" ? modal.data?.content : defaultNote}</p>
              </div>
            </Popup.Content>
            <Popup.Footer>
              <div className={styles.popup_footer_btn_container}>
                <Button className={styles.btn} text="Close" onClick={onClose}></Button>
              </div>
            </Popup.Footer>
        </Popup>
      </PageTitle>
    </Fade>
  )
}

export default Work