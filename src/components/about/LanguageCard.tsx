import { Card, CardBody, CardFooter } from "@nextui-org/card";
import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const LanguageCard = ({ title, icon }: React.PropsWithChildren<Props>) => {
  return (
    <Card className="w-28">
      <CardBody className="items-center justify-center">{icon}</CardBody>
      <CardFooter className="justify-center px-2 pt-0">
        <p>{title}</p>
      </CardFooter>
    </Card>
  );
};

export default LanguageCard;
