'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from '../components/navbar';

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
    </NextUIProvider>
  )
}
