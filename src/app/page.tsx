'use client'
import {NextUIProvider} from "@nextui-org/react";
import Navybar from './components/navbar';
import Footer from './components/footer';

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
      <Footer />
    </NextUIProvider>
  )
}
