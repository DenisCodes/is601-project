import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {NextUIProvider} from "@nextui-org/react";
import Navbar from '../components/navbar';


const inter = Inter({ subsets: ['latin'] })

function HomeNav(){
  return (
    <div>
        home
    </div>
  )
}

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar />
      <HomeNav />
    </NextUIProvider>
  )
}
