import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col p-2 h-screen w-full bg-primary text-secondary font-inter">
      <Head>
        <title>SALIM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div className=" m-10 ">
        <div className=" w-9/12 bg-tertiary rounded-md p-2 md:w-4/12">
          <p className=" text-secondary text-sm font-medium">
            I’m Salim, <span className=" text-link">a front end engineer</span>{" "}
            and
            <span className=" text-link"> product designer</span> focused on
            crafting functional interfaces.
          </p>
          <ul className=" pt-6 text-link">
            <li className=" text-sm ">
              <a href="https://github.com/thecodesalim">projects</a>
            </li>
            <li className=" text-sm ">
              <a href="https://www.figma.com/@thecodesalim">design</a>
            </li>
          </ul>
        </div>
        <footer className="fixed left-10 bottom-0 text-xs text-link flex flex-row space-x-4">
          <p>Made in Abuja, 2022. WIP 🚧</p>
          <p>Reach me at hi[at]salim(dot)dev</p>
        </footer>
      </motion.div>
    </div>
  );
}
