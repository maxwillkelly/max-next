import { Card, CardBody, CardHeader } from "@heroui/card";

interface Props {
  headerText: string;
  bodyText: string;
}

const AboutHeroCard = ({ headerText, bodyText }: Props) => {
  return (
    <Card className="w-40">
      <CardHeader className="items-center justify-center px-3 pb-0 pt-2">
        <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
          {headerText}
        </h2>
      </CardHeader>
      <CardBody className="items-center justify-center px-3 pb-5 pt-0">
        <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
          {bodyText}
        </p>
      </CardBody>
    </Card>
  );
};

export default AboutHeroCard;
