'use client'
import { NextUIProvider } from "@nextui-org/react";
import Image from 'next/image'
import Menus from './components/menus';
import AboutUs from './components/aboutUs';
import Part1 from './images/Frame22_part1.png';
import Part2 from './images/Frame22_part2.png';

export default function Home() {
  return (
    <NextUIProvider>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white">
          <h1 className="text-4xl font-bold mb-8">Rustic Italian Trattoria</h1>
          <p>Get a taste of Italy at home!</p>
        </div>
        <div className="flex justify-center items-center mb-8">
          <div>
            <Image src={Part2} alt="Chef" width={1030} height={1030} />
          </div>
          <div>
            <Image src={Part1} alt="Chef" width={1000} height={1000} />
          </div>
        </div>
      </div>
      <AboutUs />
      <Menus />
    </NextUIProvider>
  )
}
