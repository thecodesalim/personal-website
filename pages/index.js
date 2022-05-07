export default function Home() {
  return (
    <div className="flex pt-5 flex-col h-screen w-full bg-primary text-secondary">
      <div className="flex grow pl-10 pr-10 flex-col">
        <div className="pt-24 self-center">
          <p className="font-bold text-secondary mb-8">Salim Abubakar</p>
          <p className="text-secondary mb-10">Frontend engineer and designer</p>
          <div>
            <p className="text-tertiary text-sm mb-6">Projects</p>
            <ul>
              <li>
                <p className="text-secondary mb-3">Food Place</p>
                <p className="text-tertiary text-sm w-60">a community of food explorers, sharing our food adventures and helping each other find the next food spot.</p>
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
