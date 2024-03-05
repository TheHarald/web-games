"use-client";
import { useDispatch, useSelector } from "@/src/hooks/redux-hooks";
import Team from "../components/alias-game-team";
import { AliasTeamsList } from "../components/alias-game-teams-list";
import { curentTeamSelector } from "../services/alias-selectors";
import { Button } from "@nextui-org/button";
import { ALIAS_GAME__START_GAME } from "../services/alias-constants";

export function AliasGamePreaparePage() {
  const dispatch = useDispatch();
  const currenTeam = useSelector(curentTeamSelector);
  const { name } = currenTeam;

  const startHandler = () => {
    dispatch({
      type: ALIAS_GAME__START_GAME,
    });
  };
  return (
    <div className="flex flex-col gap-16">
      <AliasTeamsList />
      <div className="flex flex-col gap-6">
        <Team name={name} />
        <Button onClick={startHandler} color="primary">
          Начать
        </Button>
      </div>
    </div>
  );
}
