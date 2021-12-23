import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from 'react'
import { HexBoard } from '../components/hexboard'

const Home: NextPage = () => {

  // let message = 'hello';
  // const {data, error} = useSWR('./api/hello', fetcher)
  // const {data, error} = useSWR('./api/hello')

  // if(error) message = 'error'
  // if(!data) message = 'loading'

  return (
    <div className={styles.container}>
      <Head>
        <title>etherhex</title>
        <meta name="description" content="hex util for ethereum development" />
        <link rel="icon" href="/ETH.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Ether Hex Tool</a>
        </h1>

        <p className={styles.description}>
          Get started by typing {' '}
          <code className={styles.code}>hex</code>{' '}or{' '} 
          <code className={styles.code}>number</code>.
        </p>
        <HexBoard />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/0xys/etherhex"
          target="_blank"
          rel="noopener noreferrer"
        >@0xys</a>
      </footer>
    </div>
  )
}

export default Home
