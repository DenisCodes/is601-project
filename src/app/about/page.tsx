'use client'
import {NextUIProvider} from "@nextui-org/react";
import AboutUs from '../components/aboutUs';

export default function About() {
  return (
    <NextUIProvider>
      <div className="m-10 p-10">
        <AboutUs/>
      </div>
    </NextUIProvider>
  )
}
