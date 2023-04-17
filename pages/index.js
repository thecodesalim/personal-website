import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "../components/Link";
import Card from "../components/Card";

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
            crafting functional and polished interfaces.
          </p>
          <div>
            <ul className=" pt-6 text-link">
              <Link title="Github" link="https://github.com/thecodesalim" />
              <Link title="Figma" link="https://www.figma.com/@thecodesalim" />
              <Link title="Layers" link="https://layers.to/salim" />
            </ul>
          </div>
        </div>
        <div className=" mt-8">
          <p className=" text-sm font-medium">Projects</p>
          <div>
            <Card
              link="https://food-place.vercel.app/"
              title="Food Place"
              description="
            a place to share, explore and collect food"
            />
            <Card
              link="https://thecodesalim.itch.io/4th-wall"
              title="4th Wall"
              description="an interactive game that discusses 
social media overuse"
            />
          </div>
        </div>
        <footer className="fixed left-10 bottom-0 text-xs text-link flex flex-row space-x-4">
          <p>Made in Abuja, 2023. WIP 🚧</p>
          <p>Reach me at hi[at]salim(dot)work</p>
        </footer>
      </motion.div>
    </div>
  );
}
