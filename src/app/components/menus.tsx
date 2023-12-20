'use client';
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import './menus.css';

export default function Menus() {
  return (
    <div className="flex justify-center items-center flex-col mr-10 p-10">
      <h2 className="flex justify-center items-center">Menu</h2>
      <br></br>
      <Card className='border-none customCard mr-10 p-10'>
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-2 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image alt="Album cover" className="object-cover" height={350} src='/images/Frame23_Part1.png' width={350} />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col items-center justify-between">
                <h4 className="font-semibold text-foreground/90 mb-2">Spaghetti Carbonara</h4>
                <div className="max-w-[450px]">
                  <p className="text-small text-foreground/80 mb-2">
                    Ingredients: spaghetti, eggs, pancetta, Parmesan cheese, black pepper, salt, garlic, olive oil.
                  </p>
                </div>
                <h5 className="text-large font-medium mt-2">Price: $9.99</h5>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className='border-none customCard mr-10 p-10'>
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-2 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image alt="Album cover" className="object-cover" height={350} src='/images/Frame23_Part2.png' width={350} />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col items-center justify-between">
                <h4 className="font-semibold text-foreground/90 mb-2">Pizza Margherita</h4>
                <div className="max-w-[450px]">
                  <p className="text-small text-foreground/80 mb-2">
                    Ingredients: pizza dough, tomato sauce, fresh mozzarella cheese, basil leaves, olive oil, salt.
                  </p>
                </div>
                <h5 className="text-large font-medium mt-2">Price: $14.99</h5>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className='border-none customCard mr-10 p-10'>
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-2 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image alt="Album cover" className="object-cover" height={350} src='/images/Frame23_Part3.png' width={350} />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col items-center justify-between">
                <h4 className="font-semibold text-foreground/90 mb-2">Tiramisu</h4>
                <div className="max-w-[450px]">
                  <p className="text-small text-foreground/80 mb-2">
                    Ingredients: ladyfinger biscuits, espresso coffee, mascarpone cheese, eggs, sugar, cocoa powder.
                  </p>
                </div>
                <h5 className="text-large font-medium mt-2">Price: $12.99</h5>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
