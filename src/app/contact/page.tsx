'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from '../components/navbar';
import NewsLetter from "../components/newsletter";
import Footer from '../components/footer';

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
      <Navybar />
      <ContactNav/>
      <NewsLetter/>
      <Footer />
    </NextUIProvider>
  )
}
