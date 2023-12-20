'use client'
import {NextUIProvider} from "@nextui-org/react";
import Menus from '../components/menus';

export default function Menu() {
  return (
    <NextUIProvider>
        <Menus/>
    </NextUIProvider>
  )
}
