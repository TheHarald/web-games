import Link from "next/link";
import { GameCard } from "../components/game-card";

export default function Home() {
  return (
    <section className="h-full flex flex-col">
      <header className="font-bold text-3xl text-center">WebGames</header>
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
        <GameCard name="Alias" playersCount={4} device="phone" path="/alias" />
      </section>
      <footer className="w-full flex items-center justify-center py-3 mt-auto">
        <Link
          className="flex items-center gap-1 text-current"
          href="https://github.com/TheHarald"
          title="TheHarald"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">TheHarald</p>
        </Link>
      </footer>
    </section>
  );
}
