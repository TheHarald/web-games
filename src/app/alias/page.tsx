"use client";
import { useSelector } from "@/src/hooks/hooks";
import { AliasGameCreationPage } from "@/src/modules/alias/pages/alias-game-creation-page";
import { AliasGamePage } from "@/src/modules/alias/pages/alias-game-page";
import { AliasGamePreaparePage } from "@/src/modules/alias/pages/alias-game-prepare-page";
import { gameStatusSelector } from "@/src//modules/alias/services/alias-selectors";
import { AliasGameCorrectingPage } from "@/src/modules/alias/pages/alias-game-correcting-page";
import { AliasGameResultsPage } from "@/src/modules/alias/pages/alias-game-results-page";

function AliasGame() {
  const gameStatus = useSelector(gameStatusSelector);
  if (gameStatus === "gaming") {
    return <AliasGamePage />;
  }
  if (gameStatus === "prepare") {
    return <AliasGamePreaparePage />;
  }
  if (gameStatus === "results") {
    return <AliasGameResultsPage />;
  }
  if (gameStatus === "correcting") {
    return <AliasGameCorrectingPage />;
  }
  return <AliasGameCreationPage />;
}

export default AliasGame;
