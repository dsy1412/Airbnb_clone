// import the font package
import {Nunito} from "next/font/google";


// import the navbar from the components/navbar/Navbar.tsx
import Navbar from "./components/navbar/Navbar";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnly from "@/app/components/ClientOnly";


import Modal from "./components/modals/Modal";


const inter = Inter({ subsets: ["latin"] });


// reserved constant in next13 layout to control the title and description
export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

// create a constant called font and write nunito and open an object inside the parenthesis and just add a subset
// so the subset is going to be an array which is going to hold latin like this
//and what the font does now expose the class name which we can give to our body element
const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      {/* so go ahead and add the font to the head */}
      <body className={font.className}>
      {/*lets collape the children inside of the body element and above them,lets write nav bar like this*/}
      <ClientOnly>
        <Modal  isOpen />
      <Navbar />
      </ClientOnly>
      {children}
      </body>
    </html>
  );
}
