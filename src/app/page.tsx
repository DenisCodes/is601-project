'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from './components/navbar';

function HomeNav(){
  return (
    <div>
        home
    </div>
  )
}

export default function Home() {
  return (
    <NextUIProvider>
      <Navybar />
      <HomeNav />
    </NextUIProvider>
  )
}
