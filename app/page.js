"use client";
import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex flex-col p-2 h-screen w-full bg-primary text-secondary font-inter">
      <Head>
        <title>SALIM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className=" ml-1 space-y-3 sm:ml-10">
        <div className=" w-3/4 p-2 space-y-3 sm:w-2/4">
          <p className=" font-semibold text-sm text-secondary">
            Salim Abubakar
          </p>
          <p className=" text-sm text-link">
            I’m Salim, a front end engineer and product designer focused on
            crafting functional and polished interfaces.
          </p>
        </div>
        <div className=" space-y-8">
          <p className="p-2">UI</p>
          <Card
            link="https://emilkowal.ski/"
            title="Figma"
            description="throughtfully designed interfaces"
          />
          <Card
            link="https://emilkowal.ski/"
            title="Layers"
            description="throughtfully designed interfaces"
          />
          <p className="p-2">Projects</p>
          <Card
            link="https://emilkowal.ski/"
            title="Figma"
            description="throughtfully designed interfaces"
          />
          <Card
            link="https://emilkowal.ski/"
            title="Layers"
            description="throughtfully designed interfaces"
          />
          <div className="w-2/3 p-2 sm:w-2/4">
            <p className="p-2">More</p>
            <p className=" text-link p-2 text-sm">
              You can see more of my work on Twitter or more of my code on
              GitHub.
            </p>
          </div>
        </div>
        <footer className="fixed left-10 bottom-0 text-xs text-link flex flex-row space-x-4">
          <p>Made in Abuja, 2023. WIP 🚧</p>
          <p>Reach me at hi[at]salim(dot)work</p>
        </footer>
      </div>
    </div>
  );
}
