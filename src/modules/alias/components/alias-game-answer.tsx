import { useDispatch } from "@/src/hooks/redux-hooks";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { ALIAS_GAME__TOGGLE_ANSWER_IS_RIGHT } from "../services/alias-constants";

type TAliasAnswerProps = {
  word: string;
  right: boolean;
  id: string;
};
export const AliasAnswer = (props: TAliasAnswerProps) => {
  const { word, right, id } = props;

  const dispatch = useDispatch();

  function toggleHandler() {
    dispatch({
      type: ALIAS_GAME__TOGGLE_ANSWER_IS_RIGHT,
      id: id,
    });
  }
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <Checkbox onChange={toggleHandler} size="lg" isSelected={right} />
      <span className="text-xl font-medium">{word}</span>
    </div>
  );
};
