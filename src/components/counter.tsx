"use client";
import { Button } from "@nextui-org/button";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

type TCounterProps = {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  min?: number;
  max?: number;
};

export const Counter = (props: TCounterProps) => {
  const { value, onDecrement, onIncrement, min = 2, max = 4 } = props;

  function onIncrementHandler() {
    if (value >= max) {
      return;
    }
    onIncrement();
  }
  function onDecrementHandler() {
    if (value <= min) {
      return;
    }
    onDecrement();
  }
  return (
    <div className="flex flex-row gap-1 items-center mt-2">
      <Button onClick={onDecrementHandler} isIconOnly color="primary">
        <RiSubtractLine />
      </Button>
      <div className="min-w-[32px] flex justify-center">
        <span className="text-xl font-bold">{value}</span>
      </div>
      <Button onClick={onIncrementHandler} isIconOnly color="primary">
        <RiAddLine />
      </Button>
    </div>
  );
};
