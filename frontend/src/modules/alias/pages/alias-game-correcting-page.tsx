import { Button } from "@nextui-org/button";
import Team from "../components/alias-game-team";
import { useDispatch, useSelector } from "@/src/hooks/redux-hooks";
import {
  curentTeamSelector,
  roundScoreSelector,
} from "../services/alias-selectors";
import { AliasGameAnswersList } from "../components/alias-game-answers-list";
import {
  ALIAS_GAME__ADD_SCORE_TO_TEAM,
  ALIAS_GAME__CHANGE_TEAM,
  ALIAS_GAME__CLEAR_ANSWERS,
  ALIAS_GAME__SET_STATUS,
  ALIAS_GAME__SET_TIMER_VALUE,
} from "../services/alias-constants";

export function AliasGameCorrectingPage() {
  const dispatch = useDispatch();
  const currenTeam = useSelector(curentTeamSelector);
  const roundScore = useSelector(roundScoreSelector);
  const { name, score } = currenTeam;

  function nextHandler() {
    dispatch({
      type: ALIAS_GAME__ADD_SCORE_TO_TEAM,
      teamId: currenTeam.id,
      score: roundScore,
    });
    dispatch({
      type: ALIAS_GAME__CHANGE_TEAM,
    });
    dispatch({
      type: ALIAS_GAME__CLEAR_ANSWERS,
    });
    dispatch({
      type: ALIAS_GAME__SET_TIMER_VALUE,
      value: 0,
    });
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-6">
        <Team socre={score} name={name} />
        <h2 className="text-xl font-bold text-center">
          {roundScore >= 0 ? `+${roundScore}` : roundScore}
        </h2>
        <AliasGameAnswersList />
      </div>
      <Button onClick={nextHandler} color="primary">
        Подтвердить
      </Button>
    </div>
  );
}
