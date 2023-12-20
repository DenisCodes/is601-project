'use client'
import { NextUIProvider } from "@nextui-org/react";
import Navybar from '../components/navbar';
import NewsLetter from "../components/newsletter";
import Footer from '../components/footer';
import Image from 'next/image'
import Chef from '../images/Frame27.png';

export default function Contact() {
  return (
    <NextUIProvider>
      <Navybar />

      <div className="flex justify-center items-center">
        <div className="mr-4">
          <NewsLetter />
        </div>

        <div>
          <Image src={Chef} alt="Chef" width={375} height={375} />
          <br></br>
          <div>If you have any questions about your order please call:</div>
          <br></br>
          <div>(123) 456-7891</div>
        </div>
      </div>

      <Footer />
    </NextUIProvider>
  );
}
