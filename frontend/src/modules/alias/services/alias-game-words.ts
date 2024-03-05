import { TAliasWord } from "./alias-reducer";

export function getRandomWord(words: TAliasWord[]): TAliasWord {
  if (!words.length) {
    return {
      id: "default",
      word: "Нет слов",
      rating: 0,
    };
  }
  return words[Math.floor(Math.random() * words.length)];
}
