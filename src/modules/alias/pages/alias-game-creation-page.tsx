import { useDispatch, useSelector } from "@/src/hooks/hooks";
import {
  gameEndScoreSelector,
  isPunishmentForSkipSelector,
  roundTimeSelector,
  teamsCountSelector,
  teamsSelector,
} from "../services/alias-selectors";
import {
  ALIAS_GAME__ADD_TEAM,
  ALIAS_GAME__CHANGE_END_SCORE,
  ALIAS_GAME__CHANGE_PUNISHMENT_MODE,
  ALIAS_GAME__CHANGE_ROUND_TIME,
  ALIAS_GAME__INIT_TEAMS,
  ALIAS_GAME__REMOVE_TEAM,
  ALIAS_GAME__SET_STATUS,
  ALIAS_GAME__SET_TEAMS_COUNT,
  ALIAS_GAME__START_GAME,
  aliasGameEndGameScores,
  aliasGameRoundTimes,
} from "../services/alias-constants";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import Team from "../components/alias-game-team";
import { Select, SelectItem } from "@nextui-org/select";
import { Counter } from "@/src/components/counter";

export function AliasGameCreationPage() {
  const dispatch = useDispatch();
  const teamsCount = useSelector(teamsCountSelector);
  const isPunishmentForSkip = useSelector(isPunishmentForSkipSelector);
  const roundTime = useSelector(roundTimeSelector);
  const gameEndScore = useSelector(gameEndScoreSelector);
  const teams = useSelector(teamsSelector);

  function onAddTeam() {
    dispatch({
      type: ALIAS_GAME__ADD_TEAM,
    });
  }

  function onRemoveTeam() {
    dispatch({
      type: ALIAS_GAME__REMOVE_TEAM,
    });
  }

  function onChangePunishmentMode() {
    dispatch({
      type: ALIAS_GAME__CHANGE_PUNISHMENT_MODE,
    });
  }

  function startGame() {
    dispatch({
      type: ALIAS_GAME__SET_STATUS,
      status: "prepare",
    });
  }

  function roundTimeChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: ALIAS_GAME__CHANGE_ROUND_TIME,
      roundTime: e.target.value,
    });
  }

  function gameEndScoreChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: ALIAS_GAME__CHANGE_END_SCORE,
      endScore: e.target.value,
    });
  }

  useEffect(() => {
    dispatch({
      type: ALIAS_GAME__INIT_TEAMS,
    });
  }, [dispatch]);
  return (
    <section className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Настройки</h1>
        <div className="flex flex-row sm:flex-col gap-4 items-center">
          <p className="text-xl font-medium">Количество команд</p>
          <Counter
            onIncrement={onAddTeam}
            onDecrement={onRemoveTeam}
            value={teamsCount}
          />
        </div>
        <Checkbox
          size="md"
          onChange={onChangePunishmentMode}
          isSelected={isPunishmentForSkip}
        >
          Отнимать очки за пропуск
        </Checkbox>
        <Select
          selectionMode="single"
          selectedKeys={[`${roundTime}`]}
          onChange={roundTimeChangeHandler}
          labelPlacement="outside"
          items={aliasGameRoundTimes}
          label="Длительность раунда"
        >
          {aliasGameRoundTimes.map((roundTime) => {
            return (
              <SelectItem
                textValue={roundTime.toString()}
                key={roundTime}
                value={roundTime}
              >
                {roundTime}
              </SelectItem>
            );
          })}
        </Select>
        <Select
          selectionMode="single"
          selectedKeys={[`${gameEndScore}`]}
          onChange={gameEndScoreChangeHandler}
          labelPlacement="outside"
          items={aliasGameEndGameScores}
          label="Количество очков для победы"
        >
          {aliasGameEndGameScores.map((endScore) => {
            return (
              <SelectItem
                textValue={endScore.toString()}
                key={endScore}
                value={endScore}
              >
                {endScore}
              </SelectItem>
            );
          })}
        </Select>
        <h3 className="text-lg font-medium">Команды</h3>
        {teams.map((team) => {
          return <Team key={team.id} name={team.name} />;
        })}
      </div>

      <Button onClick={startGame} color="primary">
        Продолжить
      </Button>
    </section>
  );
}
