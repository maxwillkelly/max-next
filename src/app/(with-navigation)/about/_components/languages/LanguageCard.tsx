import { Card, CardBody, CardFooter } from "@heroui/card";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const LanguageCard = ({ title, icon }: React.PropsWithChildren<Props>) => {
  return (
    <Card className="h-[8.75rem] w-28">
      <CardBody className="items-center justify-center">{icon}</CardBody>
      <CardFooter className="justify-center px-2 pt-0">
        <p className="text-center font-medium">{title}</p>
      </CardFooter>
    </Card>
  );
};

export default LanguageCard;
