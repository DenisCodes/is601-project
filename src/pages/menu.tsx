import {NextUIProvider} from "@nextui-org/react";
import Navbar from '../components/navbar';

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
        <Navbar />
        <MenuNav/>
    </NextUIProvider>
  )
}
