import { Card, CardBody } from "@nextui-org/card";

type TCodeNamesWordCardTypes = "black" | "white" | "team1" | "team2";

type TCodeNamesWordCardProps = {
  word: string;
  type: TCodeNamesWordCardTypes;
};

function useBackground(type: TCodeNamesWordCardTypes) {
  switch (type) {
    case "black":
      return "bg-slate-900";
    case "white":
      return "bg-slate-400";
    case "team1":
      return "bg-red-500";
    case "team2":
      return "bg-blue-500";
  }
}

export function CodeNamesWordCard(props: TCodeNamesWordCardProps) {
  const { word, type } = props;

  const bgClassName = useBackground(type);

  return (
    <Card className={bgClassName}>
      <CardBody>
        <p>{word}</p>
      </CardBody>
    </Card>
  );
}
