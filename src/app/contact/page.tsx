'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navbar from '../components/navbar';
import NewsLetter from "../components/newsletter";

function ContactNav(){
  return (
    <div>
        contact
    </div>
  )
}

export default function Contact() {
  return (
    <NextUIProvider>
      <Navbar />
      <ContactNav/>
      <NewsLetter/>
    </NextUIProvider>
  )
}
