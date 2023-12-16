'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navbar from '../components/navbar';

function AboutNav(){
  return (
    <div>
        about
    </div>
  )
}

export default function About() {
  return (
    <NextUIProvider>
        <Navbar />
        <AboutNav/>
    </NextUIProvider>
  )
}
