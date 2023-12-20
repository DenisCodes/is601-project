'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from '../components/navbar';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';

export default function About() {
  return (
    <NextUIProvider>
        <Navybar />
        <AboutUs/>
        <Footer />
    </NextUIProvider>
  )
}
