'use client'
import NewsLetter from "../components/newsletter";
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="mr-10 p-10">
      <h2 className="flex justify-center items-center">Contact Us</h2>
      <div className="flex justify-center items-center mr-10 p-10">
        <div className="mr-10 p-10">
          <NewsLetter />
        </div>

        <div className="mr-10 p-10">
          <Image src='/images/Frame27.png' alt="Chef" width={375} height={375} priority/>
          <br></br>
          <div>If you have any questions about your order please call:</div>
          <br></br>
          <div>(123) 456-7891</div>
        </div>
      </div>
      <br></br>
    </div>
    
  );
}
