'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from '../components/navbar';
import Footer from '../components/footer';

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
        <Footer />
    </NextUIProvider>
  )
}
