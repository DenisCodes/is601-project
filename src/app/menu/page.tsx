'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from '../components/navbar';
import Footer from '../components/footer';
import Menus from '../components/menus';

export default function Menu() {
  return (
    <NextUIProvider>
        <Navybar />
        <h1 className="flex justify-center items-center">Menu</h1>
        <Menus/>
        <Footer />
    </NextUIProvider>
  )
}
