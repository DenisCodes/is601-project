import {NextUIProvider} from "@nextui-org/react";
import Navbar from '../components/navbar';

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
    </NextUIProvider>
  )
}
