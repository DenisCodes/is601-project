'use client'
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import './navbar.css'

const Navybar: React.FC = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" style={{ backgroundColor: "#CD9060" }}>
			<div className="basis-1/5 sm:basis-full flex">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit text-custom-style">
              Rustic Italian Trattoria
            </p>
					</NextLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarItem key={"home"}>
            <NextLink
              className="nav-item text-md"
              href={"/"}
            >
              Home
            </NextLink>
          </NavbarItem>
          <NavbarItem key={"about"}>
            <NextLink
              className="nav-item text-md"
              href={"/about"}
            >
              About Us
            </NextLink>
          </NavbarItem>
          <NavbarItem key={"menu"}>
            <NextLink
              className="nav-item text-md"
              href={"/menu"}
            >
              Menu
            </NextLink>
          </NavbarItem>
          <NavbarItem key={"contact"}>
            <NextLink
              className="nav-item text-md"
              href={"/contact"}
            >
              Contact Us
            </NextLink>
          </NavbarItem>
				</div>
			</div>
		</NextUINavbar>
  );
};

export default Navybar;
