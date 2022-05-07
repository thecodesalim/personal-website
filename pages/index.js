export default function Home() {
  return (
    <div className="flex pt-5 flex-col h-screen w-full bg-primary">
      <div className="flex grow pl-10 pr-10 flex-col">
        <div className="pt-24 self-center">
          <p className="font-bold text-secondary">Salim Abubakar</p>
          <p>Frontend engineer and designer</p>
          <div>
            <p className="text-sm">Projects</p>
            <ul>
              <li>
                <p className="text-secondary">Food Place</p>
                <p className="text-tertiary">a community of food explorers, sharing our food adventures and helping each other find the next food spot.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="flex h-10 w-full bg-primary pl-10">
        <ul className="flex items-center text-xs text-tertiary">
          <li>© 2021 Salim Abubakar. All rights reserved.</li>
        </ul>
      </footer>
    </div>
  );
}
