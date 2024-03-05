"use client";
import { useSocket } from "@/src/hooks/use-socket";
import { CodeNamesWordCard } from "@/src/modules/codenames/components/codenames-word-card";

function CodenamesGamePage() {
  useSocket();
  return (
    <div>
      <h1>В разработке</h1>
      {/* <CodeNamesWordCard word="Игра" type="white" />
      <CodeNamesWordCard word="Игра" type="team1" />
      <CodeNamesWordCard word="Игра" type="team2" />
      <CodeNamesWordCard word="Игра" type="black" /> */}
    </div>
  );
}

export default CodenamesGamePage;
