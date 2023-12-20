'use client'
import { NextUIProvider } from "@nextui-org/react";
import Image from 'next/image'
import Menus from './components/menus';
import AboutUs from './components/aboutUs';

export default function Home() {
  return (
    <NextUIProvider>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white">
          <h1 className="font-bold mb-8">Rustic Italian Trattoria</h1>
          <h3>Get a taste of Italy at home!</h3>
        </div>
        <div className="flex justify-center items-center mb-8">
          <div>
            <Image src="/images/Frame22_part2.png" alt="Chef" width={1030} height={1030} priority/>
          </div>
          <div>
            <Image src="/images/Frame22_part1.png" alt="Chef" width={1000} height={1000} priority/>
          </div>
        </div>
      </div>
      <div className="m-10 p-10">
        <AboutUs />
      </div>
      <div className="m-10 p-10">
        <Menus />
      </div>
    </NextUIProvider>
  )
}
