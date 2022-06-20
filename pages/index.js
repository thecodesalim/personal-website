import Head from "next/head";
import Item from "../components/Item";

export default function Home() {
  return (
    <div className="flex pt-5 flex-col h-screen w-full bg-primary text-secondary font-inter">
      <Head>
        <title>SALIM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex grow pl-10 pr-10 flex-col">
        <div className="pt-24 self-center">
          <h1 className="text-secondary mb-8">Salim Abubakar</h1>
          <p className="text-secondary mb-3 font-light">
            Frontend engineer and designer. Focused on crafting functional
            interfaces.
          </p>
          <p className="text-secondary mb-10 font-light">
            Interested in Javascript and Python. Curious about Swift, Rust and
            Data Science.
          </p>
          <div>
            <p className="text-tertiary text-sm mb-6">Projects</p>
            <ul>
              <Item
                link="https://food-place.vercel.app/"
                name="Food Place"
                detail="a community of food explorers, sharing our food adventures and helping
        each other find the next food spot."
              />
              <Item
                link="https://thecodesalim.itch.io/4th-wall"
                name="4th Wall"
                detail="an interactive narrative experience that explores the difficult subject of social media overuse."
              />
            </ul>
          </div>
        </div>
      </div>
      <footer className="flex h-10 w-full bg-primary items-center pl-10 text-xs text-tertiary">
        <p>Made in Abuja, 2022.</p>
        <p className="pl-2">WIP.</p>
      </footer>
    </div>
  );
}
