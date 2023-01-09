import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Box from '../components/SocialBox'
import Projects from '../components/Project'
import SocialBox from '../components/SocialBox'



export default function Home() {
  
  if (typeof window === 'object') {
    //ANCHOR - CODE TO BE MODIFIED LATTER AFTER I GET DATA🐳
    let red = "#FF5733"; 
    let yellow = "#FFFF00";
    let darkGray = "#00000";
    let defult = "#FFFFFF";
    let color = [red, yellow, darkGray, defult];

    //ANCHOR - BackGround Change function fat arrow define here🐳
    let changeBg = () => {
      let bgColor = color[3];
      document.body.style.background = bgColor;
    }
  }
  return (
    <div className='mainBody'>
      <Head>
        <title>Rudra Narayan Boitei | Portfolio</title>
        <meta name="description" content="Generated by next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-center'>
        <Header />
        <Skills />
        <SocialBox/>
        <Footer />
      </div>
    </div>
  )
};




