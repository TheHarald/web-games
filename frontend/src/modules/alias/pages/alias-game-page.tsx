import { useSelector } from "@/src/hooks/redux-hooks";
import { currentWordSelector } from "../services/alias-selectors";
import { AliasWord } from "../components/alias-game-word";
import { AliasGameAnswersList } from "../components/alias-game-answers-list";
import { AliasGameTimer } from "../components/alias-game-timer";
import { AliasTeamsList } from "../components/alias-game-teams-list";
import { AliasGameButtons } from "../components/alias-game-buttons";

export function AliasGamePage() {
  const currentWord = useSelector(currentWordSelector);

  return (
    <section className="flex flex-col gap-12">
      <AliasTeamsList />
      <div className="flex flex-col gap-4 justify-center items-center">
        <AliasGameTimer />
        <AliasWord word={currentWord} />
        <AliasGameButtons />
      </div>
      {/* <AliasGameAnswersList /> */}
    </section>
  );
}
