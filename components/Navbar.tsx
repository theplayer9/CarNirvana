import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Car Nirvana Logo"
            width={200}
            height={40}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full border-inherit border-2 bg-white min-w-[130px] "
        />
      </nav>
    </header>
  );
};

export default Navbar;
