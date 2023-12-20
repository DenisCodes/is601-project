'use client'
import {NextUIProvider} from "@nextui-org/react";
import Menus from '../components/menus';

export default function Menu() {
  return (
    <NextUIProvider>
        <h1 className="flex justify-center items-center">Menu</h1>
        <Menus/>
    </NextUIProvider>
  )
}
