import React from 'react';
//components
import Head from 'next/head';
import Fade from "@/component/Fade";
import PageTitle from "@/component/PageTitle";
import Progress from "@/component/Progress";
import GrayBox from '@/component/GrayBox';

//icons
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import styles from "@/styles/Resume.module.scss";
//data
import data from "@/data";

const Resume = () => {
  return (
    <Fade>
       <Head>
        <title>Resume | Akshay Moradiya - Work Portfolio</title>
        <meta name="description" content="View akshay moradiya's professional resume and work experience. Learn about their education, skills, and accomplishments." />
        <meta name="keywords" content="Resume, Work Portfolio, Akshay Moradiya, Work Experience, Education, Skills, Accomplishments" />
        <meta property="og:title" content="Resume | Akshay Moradiya - Work Portfolio" />
        <meta property="og:description" content="View akshay moradiya's professional resume and work experience. Learn about their education, skills, and accomplishments." />
        <meta property="og:image" content="/about.jpg" />
        <meta property="og:image:alt" content="Akshay Moradiya - Work Portfolio - Resume" />
      </Head>
      <PageTitle
        title='Resume'
      >
        <div className={styles.grid_container}>
          <div className={styles.left_portion}>
            <div className={styles.title}>
              <SchoolIcon
                fontSize='large'
                className={styles.icon}
              />
              <h2>Education</h2>
            </div>
            {(data.resume.educations || []).map(edu => (
              <div key={edu.key} className={styles.box}>
                <span>{edu.timeline}</span>
                <h3>{edu.title}</h3>
                <p>{edu.excert}</p>
              </div>
            ))}
          </div>
          <div className={styles.right_portion}>
            <div className={styles.title}>
              <BusinessCenterIcon 
                fontSize='large'
                className={styles.icon}
              />
              <h2>Experience</h2>
            </div>
            {(data.resume.experinence || []).map(exp => (
              <div key={exp.key} className={styles.box}>
                <span>{exp.timeline}</span>
                <h3>{exp.title}</h3>
                <p>{exp.excert}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.grid_container}>
          <div className={styles.left_portion}>
            <div className={styles.title}>
              <h2>Working Skills</h2>
            </div>
            {(data.resume.progress || []).map(p => (
              <Progress 
                key={p.title}
                title={p.title} 
                percentage={p.percentage}
                color={p.color}
              />
            ))}
            <div className={`${styles.title} ${styles.marginTop}`}>
              <h2>Languages</h2>
            </div>
            <div className={styles.box}>
              {(data.resume.languages || []).map(lang => (
                <p key={lang}>{lang}</p>
              ))}
            </div>
          </div>
          <div className={styles.right_portion}>
            <div className={styles.title}>
              <h2>Competencies</h2>
            </div>
            <div className={styles.tags_container}>
              {(data.resume.competencies || []).map(tag => (
                <GrayBox key={tag}  className={styles.tag}>
                  <p>{tag}</p>
                </GrayBox>
              ))}
            </div>
            <div className={`${styles.title} ${styles.marginTop}`}>
              <h2>Technical Profile</h2>
            </div>
            <div className={styles.tags_container}>
              {(data.resume.technical_profile || []).map(tag => (
                <GrayBox key={tag}  className={styles.tag}>
                  <p>{tag}</p>
                </GrayBox>
              ))}
            </div>
          </div>
        </div>
      </PageTitle>
    </Fade>
  )
}

export default Resume