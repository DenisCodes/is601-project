import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black py-8 border-t border-yellow-500">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3 pr-4 border-r border-yellow-500 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <p>130 Fulton St, New York</p>
          <p>NY 10038, USA</p>
        </div>

        <div className="w-1/3 px-4 border-r border-yellow-500 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Hours</h3>
          <p>Mon - Sat: 11:00 am - 9:00 pm</p>
          <p>Sun: 11:00 am - 6:00 pm</p>
          <p>Dine-in and Take-out!</p>
        </div>

        <div className="w-1/3 pl-4 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
