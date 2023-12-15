'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navbar from './components/navbar';

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
