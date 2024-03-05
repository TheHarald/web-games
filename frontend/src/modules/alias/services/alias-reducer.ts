import { uuidv4 } from "@/src/utils/uuid";
import {
  ALIAS_GAME__ADD_SCORE_TO_TEAM,
  ALIAS_GAME__ADD_TEAM,
  ALIAS_GAME__CHANGE_END_SCORE,
  ALIAS_GAME__CHANGE_PUNISHMENT_MODE,
  ALIAS_GAME__CHANGE_ROUND_TIME,
  ALIAS_GAME__CHANGE_TEAM,
  ALIAS_GAME__CLEAR_ANSWERS,
  ALIAS_GAME__INIT_TEAMS,
  ALIAS_GAME__REMOVE_TEAM,
  ALIAS_GAME__RESTART,
  ALIAS_GAME__SET_GAME_SESSION_WORDS,
  ALIAS_GAME__SET_STATUS,
  ALIAS_GAME__SET_TEAMS_COUNT,
  ALIAS_GAME__SET_TIMER_VALUE,
  ALIAS_GAME__START_GAME,
  ALIAS_GAME__TOGGLE_ANSWER_IS_RIGHT,
  ALIAS_GAME__WORD_ANSWER,
} from "./alias-constants";
import { getRandomWord } from "./alias-game-words";
import { getRandomEmoji } from "@/src/utils/emoji";

type TAliasAnswer = {
  id: string;
  word: string;
  isRight: boolean;
  round: number;
  teamId: string;
};

type TAliasTeam = {
  id: string;
  name: string;
  score: number;
};

export type TAliasWord = {
  id: string;
  word: string;
  rating: number;
};

type TAliasGameStatus =
  | "creation"
  | "prepare"
  | "gaming"
  | "correcting"
  | "results";

type TAliasGameState = {
  teamsCount: number;
  teams: Array<TAliasTeam>;
  curentTeamNumber: number;
  currentWord: string;
  answers: Array<TAliasAnswer>;
  punishmentForSkip: boolean;
  gameStatus: TAliasGameStatus;
  gameEndScore: number;
  round: number;
  roundTime: number;
  currentTime: number;
  gameSessionWords: TAliasWord[];
};

const defaultAliasGameState: TAliasGameState = {
  teamsCount: 2,
  teams: [],
  punishmentForSkip: false,
  curentTeamNumber: 0,
  currentWord: "",
  answers: [],
  gameStatus: "creation",
  gameEndScore: 20,
  round: 1,
  roundTime: 30,
  currentTime: 0,
  gameSessionWords: [],
};

type TAliasGameSetTeamsCount = {
  type: typeof ALIAS_GAME__SET_TEAMS_COUNT;
  count: number;
};
type TAliasGameChangePunishmentMode = {
  type: typeof ALIAS_GAME__CHANGE_PUNISHMENT_MODE;
};

type TAliasGameInitTeams = {
  type: typeof ALIAS_GAME__INIT_TEAMS;
};

type TAliasGameAddTeam = {
  type: typeof ALIAS_GAME__ADD_TEAM;
};
type TAliasGameRemoveTeam = {
  type: typeof ALIAS_GAME__REMOVE_TEAM;
};

type TAliasGameStartGame = {
  type: typeof ALIAS_GAME__START_GAME;
};
type TAliasGameWordAnswer = {
  type: typeof ALIAS_GAME__WORD_ANSWER;
  isRight: boolean;
};
type TAliasGameSetTimerValue = {
  type: typeof ALIAS_GAME__SET_TIMER_VALUE;
  value: number;
};
type TAliasGameSetStatus = {
  type: typeof ALIAS_GAME__SET_STATUS;
  status: TAliasGameStatus;
};
type TAliasGameToggleAnswerIsRight = {
  type: typeof ALIAS_GAME__TOGGLE_ANSWER_IS_RIGHT;
  id: string;
};
type TAliasGameClearAnswers = {
  type: typeof ALIAS_GAME__CLEAR_ANSWERS;
};
type TAliasGameChamgeTeam = {
  type: typeof ALIAS_GAME__CHANGE_TEAM;
};
type TAliasGameRestart = {
  type: typeof ALIAS_GAME__RESTART;
};
type TAliasGameChamgeRoundTime = {
  type: typeof ALIAS_GAME__CHANGE_ROUND_TIME;
  roundTime: number;
};
type TAliasGameChamgeEndScore = {
  type: typeof ALIAS_GAME__CHANGE_END_SCORE;
  endScore: number;
};

type TAliasGameSetGameSessionWords = {
  type: typeof ALIAS_GAME__SET_GAME_SESSION_WORDS;
  words: TAliasWord[];
};

type TAliasGameAddScoreToTeam = {
  type: typeof ALIAS_GAME__ADD_SCORE_TO_TEAM;
  teamId: string;
  score: number;
};

export type TAliasGameActions =
  | TAliasGameSetTeamsCount
  | TAliasGameSetGameSessionWords
  | TAliasGameRestart
  | TAliasGameInitTeams
  | TAliasGameChamgeTeam
  | TAliasGameChamgeRoundTime
  | TAliasGameSetTimerValue
  | TAliasGameRemoveTeam
  | TAliasGameChamgeEndScore
  | TAliasGameToggleAnswerIsRight
  | TAliasGameClearAnswers
  | TAliasGameAddTeam
  | TAliasGameWordAnswer
  | TAliasGameStartGame
  | TAliasGameSetStatus
  | TAliasGameAddScoreToTeam
  | TAliasGameChangePunishmentMode;

export function aliasGameReducer(
  state = defaultAliasGameState,
  action: TAliasGameActions
): TAliasGameState {
  const words = state.gameSessionWords;
  switch (action.type) {
    case ALIAS_GAME__SET_TEAMS_COUNT: {
      return {
        ...state,
        teamsCount: action.count,
      };
    }

    case ALIAS_GAME__CHANGE_PUNISHMENT_MODE: {
      return {
        ...state,
        punishmentForSkip: !state.punishmentForSkip,
      };
    }

    case ALIAS_GAME__INIT_TEAMS: {
      const newTeams: Array<TAliasTeam> = [];
      for (let i = 0; i < state.teamsCount; i++) {
        const teamName = `${getRandomWord(words).word}-${
          getRandomWord(words).word
        } ${getRandomEmoji()}`;
        newTeams.push({
          id: uuidv4(),
          name: teamName,
          score: 0,
        });
      }
      return {
        ...state,
        teams: newTeams,
      };
    }

    case ALIAS_GAME__ADD_TEAM: {
      const teamName = `${getRandomWord(words).word}-${
        getRandomWord(words).word
      } ${getRandomEmoji()}`;
      return {
        ...state,
        teamsCount: state.teamsCount + 1,
        teams: [
          ...state.teams,
          {
            id: uuidv4(),
            name: teamName,
            score: 0,
          },
        ],
      };
    }
    case ALIAS_GAME__REMOVE_TEAM: {
      return {
        ...state,
        teamsCount: state.teamsCount - 1,
        teams: state.teams.slice(0, -1),
      };
    }

    case ALIAS_GAME__START_GAME: {
      return {
        ...state,
        gameStatus: "gaming",
        currentWord: getRandomWord(words).word,
      };
    }

    case ALIAS_GAME__WORD_ANSWER: {
      const newWord = getRandomWord(words);

      return {
        ...state,
        answers: [
          ...state.answers,
          {
            id: uuidv4(),
            isRight: action.isRight,
            round: state.round,
            word: state.currentWord,
            teamId: state.teams[state.curentTeamNumber].id,
          },
        ],
        currentWord: newWord.word,
      };
    }

    case ALIAS_GAME__SET_TIMER_VALUE: {
      return {
        ...state,
        currentTime: action.value,
      };
    }

    case ALIAS_GAME__SET_STATUS: {
      return {
        ...state,
        gameStatus: action.status,
      };
    }
    case ALIAS_GAME__TOGGLE_ANSWER_IS_RIGHT: {
      return {
        ...state,
        answers: state.answers.map((answer) => {
          if (answer.id === action.id) {
            return {
              ...answer,
              isRight: !answer.isRight,
            };
          }
          return answer;
        }),
      };
    }
    case ALIAS_GAME__CLEAR_ANSWERS: {
      return {
        ...state,
        answers: [],
      };
    }
    case ALIAS_GAME__ADD_SCORE_TO_TEAM: {
      return {
        ...state,
        teams: state.teams.map((team) => {
          if (team.id === action.teamId) {
            return {
              ...team,
              score: team.score + action.score,
            };
          }

          return team;
        }),
      };
    }
    case ALIAS_GAME__CHANGE_TEAM: {
      let index = state.curentTeamNumber + 1;
      let status: TAliasGameStatus = "prepare";
      if (index >= state.teams.length) {
        index = 0;
        if (state.teams.some((team) => team.score >= state.gameEndScore)) {
          status = "results";
        }
      }
      return {
        ...state,
        curentTeamNumber: index,
        gameStatus: status,
      };
    }

    case ALIAS_GAME__CHANGE_ROUND_TIME: {
      return {
        ...state,
        roundTime: action.roundTime,
      };
    }
    case ALIAS_GAME__CHANGE_END_SCORE: {
      return {
        ...state,
        gameEndScore: action.endScore,
      };
    }

    case ALIAS_GAME__RESTART: {
      return defaultAliasGameState;
    }

    case ALIAS_GAME__SET_GAME_SESSION_WORDS: {
      return {
        ...state,
        gameSessionWords: action.words,
      };
    }

    default:
      return state;
  }
}
