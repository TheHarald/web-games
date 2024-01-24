"use-client";
import { useDispatch, useSelector } from "@/src/hooks/hooks";
import {
  currentTimeSelector,
  roundTimeSelector,
} from "../services/alias-selectors";
import { useEffect } from "react";
import { ALIAS_GAME__SET_TIMER_VALUE } from "../services/alias-constants";

export function AliasGameTimer() {
  const dispatch = useDispatch();
  const currentTime = useSelector(currentTimeSelector);
  const roundTime = useSelector(roundTimeSelector);

  useEffect(() => {
    const id = setInterval(() => {
      if (currentTime < roundTime) {
        dispatch({
          type: ALIAS_GAME__SET_TIMER_VALUE,
          value: currentTime + 1,
        });
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch, currentTime, roundTime]);

  return (
    <h2 className="text-4xl font-bold">
      {currentTime < roundTime ? currentTime : "Последнее слово"}
    </h2>
  );
}
