import { useSelector } from "@/src/hooks/hooks";
import { answersSelector } from "../services/alias-selectors";
import { AliasAnswer } from "./alias-game-answer";

export function AliasGameAnswersList() {
  const answers = useSelector(answersSelector);
  return (
    <div className="flex flex-col gap-2 w-full items-start">
      {answers.map((answer) => {
        return (
          <AliasAnswer
            right={answer.isRight}
            key={answer.id}
            word={answer.word}
            id={answer.id}
          />
        );
      })}
    </div>
  );
}
