'use client'
import {NextUIProvider} from "@nextui-org/react";
import AboutUs from '../components/aboutUs';

export default function About() {
  return (
    <NextUIProvider>
        <AboutUs/>
    </NextUIProvider>
  )
}
