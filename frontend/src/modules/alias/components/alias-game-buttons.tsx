import { Button } from "@nextui-org/button";
import {
  ALIAS_GAME__SET_STATUS,
  ALIAS_GAME__WORD_ANSWER,
} from "../services/alias-constants";
import { useDispatch, useSelector } from "@/src/hooks/redux-hooks";
import {
  currentTimeSelector,
  roundTimeSelector,
} from "../services/alias-selectors";
export function AliasGameButtons() {
  const dispatch = useDispatch();

  const currentTime = useSelector(currentTimeSelector);
  const roundTime = useSelector(roundTimeSelector);

  function onRight() {
    dispatch({
      type: ALIAS_GAME__WORD_ANSWER,
      isRight: true,
    });
    if (currentTime >= roundTime) {
      dispatch({
        type: ALIAS_GAME__SET_STATUS,
        status: "correcting",
      });
    }
  }
  function onSkip() {
    dispatch({
      type: ALIAS_GAME__WORD_ANSWER,
      isRight: false,
    });
    if (currentTime >= roundTime) {
      dispatch({
        type: ALIAS_GAME__SET_STATUS,
        status: "correcting",
      });
    }
  }

  return (
    <div className="flex flex-row gap-4">
      <Button onClick={onRight} size="lg" color="primary" variant="shadow">
        Правильно
      </Button>
      <Button onClick={onSkip} size="lg" color="danger" variant="shadow">
        Пропустить
      </Button>
    </div>
  );
}
