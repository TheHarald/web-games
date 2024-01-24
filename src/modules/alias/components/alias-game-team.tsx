import { Card, CardBody } from "@nextui-org/card";

type TTeamProps = {
  name: string;
  socre?: number;
};

export default function Team(props: TTeamProps) {
  return (
    <Card className="w-full">
      <CardBody className="flex flex-row w-full justify-between">
        <p>{props.name}</p>
        {<span className="text-lg font-medium">{props.socre}</span>}
      </CardBody>
    </Card>
  );
}
