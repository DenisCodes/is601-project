'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from '../components/navbar';

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
        <Navybar />
        <AboutNav/>
    </NextUIProvider>
  )
}
