// 'use client';
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import {Divider} from "@nextui-org/react";
import Image from 'next/image';
import Pasta from '../images/Frame23_Part1.png';
import Pizza from '../images/Frame23_Part2.png';
import Dessert from '../images/Frame23_Part3.png';
import styles from './Menus.module.css';

export default function Menus() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Card className={`border-none ${styles.customCard}`}>
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image alt="Album cover" className="object-cover" height={200} src={Pasta} width={250} />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col items-center justify-between">
                <h3 className="font-semibold text-foreground/90 mb-2">Spaghetti Carbonara</h3>
                <div className="max-w-[450px]">
                  <p className="text-small text-foreground/80 mb-2">
                    Ingredients: spaghetti, eggs, pancetta, Parmesan cheese, black pepper, salt, garlic, olive oil.
                  </p>
                </div>
                <h1 className="text-large font-medium mt-2">Price: $9.99</h1>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className={`border-none ${styles.customCard}`}>
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image alt="Album cover" className="object-cover" height={200} src={Pizza} width={250} />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col items-center justify-between">
                <h3 className="font-semibold text-foreground/90 mb-2">Pizza Margherita</h3>
                <div className="max-w-[450px]">
                  <p className="text-small text-foreground/80 mb-2">
                    Ingredients: pizza dough, tomato sauce, fresh mozzarella cheese, basil leaves, olive oil, salt.
                  </p>
                </div>
                <h1 className="text-large font-medium mt-2">Price: $14.99</h1>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className={`border-none ${styles.customCard}`}>
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image alt="Album cover" className="object-cover" height={200} src={Dessert} width={250} />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col items-center justify-between">
                <h3 className="font-semibold text-foreground/90 mb-2">Tiramisu</h3>
                <div className="max-w-[450px]">
                  <p className="text-small text-foreground/80 mb-2">
                    Ingredients: ladyfinger biscuits, espresso coffee, mascarpone cheese, eggs, sugar, cocoa powder.
                  </p>
                </div>
                <h1 className="text-large font-medium mt-2">Price: $12.99</h1>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="bg-FCAC45 h-2 w-full"></div>
    </div>
  );
}
