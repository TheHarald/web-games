import { RootState } from "@/src/redux";

export function teamsCountSelector(state: RootState) {
  return state.aliasGame.teamsCount;
}

export function isPunishmentForSkipSelector(state: RootState) {
  return state.aliasGame.punishmentForSkip;
}

export function teamsSelector(state: RootState) {
  return state.aliasGame.teams;
}

export function currentWordSelector(state: RootState) {
  return state.aliasGame.currentWord;
}

export function answersSelector(state: RootState) {
  return state.aliasGame.answers;
}
export function gameStatusSelector(state: RootState) {
  return state.aliasGame.gameStatus;
}
export function currentTimeSelector(state: RootState) {
  return state.aliasGame.currentTime;
}
export function roundTimeSelector(state: RootState) {
  return state.aliasGame.roundTime;
}
export function gameEndScoreSelector(state: RootState) {
  return state.aliasGame.gameEndScore;
}

export function curentTeamSelector(state: RootState) {
  const index = state.aliasGame.curentTeamNumber;
  return state.aliasGame.teams[index];
}

export function roundScoreSelector(state: RootState) {
  const punishmentForSkip = state.aliasGame.punishmentForSkip;
  return state.aliasGame.answers.reduce((acc, answer) => {
    if (answer.isRight) {
      acc++;
    }
    if (punishmentForSkip && !answer.isRight) {
      acc--;
    }
    return acc;
  }, 0);
}
