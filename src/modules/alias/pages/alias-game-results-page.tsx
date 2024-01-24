import { useDispatch, useSelector } from "@/src/hooks/hooks";
import { curentTeamSelector } from "../services/alias-selectors";
import { AliasTeamsList } from "../components/alias-game-teams-list";
import Team from "../components/alias-game-team";
import { ALIAS_GAME__RESTART } from "../services/alias-constants";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export function AliasGameResultsPage() {
  const currenTeam = useSelector(curentTeamSelector);
  const disaptch = useDispatch();
  function restartHandler() {
    disaptch({
      type: ALIAS_GAME__RESTART,
    });
  }
  return (
    <div className="flex flex-col gap-16">
      <AliasTeamsList />
      <h1 className="text-4xl font-bold text-center">Победили</h1>
      <Team name={currenTeam.name} />
      <div className="flex flex-col gap-2">
        <Button color="primary" onClick={restartHandler}>
          Сыграть ещё
        </Button>
        <Button href="/" as={Link} color="primary">
          К играм
        </Button>
      </div>
    </div>
  );
}
