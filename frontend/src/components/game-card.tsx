import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { RiGroupLine, RiSmartphoneLine } from "@remixicon/react";

type TDeviceType = "phone" | "pc" | "pc + phone";

type TGameCardProps = {
  name: string;
  playersCount: number;
  device: TDeviceType;
  path: string;
};

type TDeviceTypeProps = {
  device: TDeviceType;
};

function DeviceType(props: TDeviceTypeProps) {
  if (props.device === "phone") {
    return <RiSmartphoneLine />;
  }

  return <div>some</div>;
}
type TPlayersCountProps = {
  playersCount: number;
};

function PlayersCount(props: TPlayersCountProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <RiGroupLine />
      <p className="font-medium text-large">{props.playersCount}+</p>
    </div>
  );
}

export function GameCard(props: TGameCardProps) {
  const { name, path, device, playersCount } = props;
  return (
    <Card className="p-4 w-full">
      <CardBody className="flex flex-row gap-8">
        <h3 className="font-bold text-large ">{name}</h3>
      </CardBody>
      <CardFooter className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <PlayersCount playersCount={playersCount} />
          <DeviceType device={device} />
        </div>
        <Button href={path} as={Link} color="primary">
          Играть
        </Button>
      </CardFooter>
    </Card>
  );
}
