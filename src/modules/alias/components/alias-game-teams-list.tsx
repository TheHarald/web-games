import { useSelector } from "@/src/hooks/redux-hooks";
import { teamsSelector } from "../services/alias-selectors";
import Team from "./alias-game-team";
export function AliasTeamsList() {
  const teams = useSelector(teamsSelector);
  return (
    <div className="flex flex-col gap-2 w-full">
      {teams.map((team) => {
        return <Team key={team.id} name={team.name} socre={team.score} />;
      })}
    </div>
  );
}
