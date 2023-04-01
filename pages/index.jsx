import React, { useMemo } from 'react';
import styles from '@/styles/Home.module.scss';
//components
import Head from 'next/head';
import Fade from "@/component/Fade/index.jsx";
import PageTitle from "@/component/PageTitle/index.jsx";
//icons
import GridViewIcon from '@mui/icons-material/GridView';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
//
import data from "@/data";

export default function Home() {

  const preparePragraph = useMemo(() => {
    const { aboutMe : { paragraphs = {}}} = data
    return Object.values(paragraphs);
  }, []);

  const MaterialIcon = useMemo(() => {
    return {
      "web-app": DashboardIcon,
      "website": WebIcon,
      "ui-ux": GridViewIcon,
      "rest-api": CodeIcon
    }
  }, []);


  return (
    <Fade>
      <Head>
        <title>About Me | Akshay Moradiya - Work Portfolio</title>
        <meta name="description" content="Learn more about akshay moradiya and their background, skills, and experience. View their portfolio and see their work in action."/>
        <meta name="keywords" content="About Me, Work Portfolio, Akshay Moradiya, Background, Skills, Experience, Work, Projects"/>
        <meta property="og:title" content="About Me | Akshay Moradiya - Work Portfolio"/>
        <meta property="og:description" content="Learn more about akshay moradiya and their background, skills, and experience. View their portfolio and see their work in action."/>
        <meta property="og:image" content="/about.jpg"/>
        <meta property="og:image:alt" content="Akshay Moradiya - Personal Portfolio - About Me"/>
      </Head>
      <PageTitle
        title='About Me'
      >
        <div className={styles.intro}>
          {preparePragraph.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <div className={styles.service_container}>
          <h2>What I do!</h2>
          <div className={styles.service_boxes_container}>
            {data.aboutMe.service_boxes.map((box, i) => {
              const Icon = MaterialIcon[box.key]
              return (
                <div key={i} className={styles.box}>
                  <Icon
                    fontSize='large'
                    className={styles[`i_${box.color}`]}
                  />
                  <div className={styles.info_wrapper}>
                    <h2>{box.title}</h2>
                    <span>{box.excert}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.counter_container}>
          {(data.aboutMe.counts || []).map((count, i) => (
            <div key={i} className={styles.counter_box}>
              <h1>{count.count}</h1>
              <p>{count.words}</p>
            </div>
          ))}
        </div>
      </PageTitle>
    </Fade>
  )
}
