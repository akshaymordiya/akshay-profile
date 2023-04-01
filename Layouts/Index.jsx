import React, { Fragment } from 'react';
import Head from 'next/head'
//partials
import Navigation from "@/component/Navigation";
import Sidebar from "@/section/Sidebar";
import styles from "./layout.module.scss";

const DefaultLayout = ({
  children
}) => {
  return (
    <Fragment>
      <Head>
        <title>Akshay Moradiya</title>
        <meta name="description" content="Akshay Moradiya javascript developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_section}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <Sidebar />
          </div>
          <div className={styles.right}>
            <div className={styles.navigation}>
              <Navigation />
            </div>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default DefaultLayout