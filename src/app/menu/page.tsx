'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from '../components/navbar';
import Footer from '../components/footer';

function MenuNav(){
  return (
    <div>
        menu
    </div>
  )
}

export default function Menu() {
  return (
    <NextUIProvider>
        <Navybar />
        <MenuNav/>
        <Footer />
    </NextUIProvider>
  )
}
