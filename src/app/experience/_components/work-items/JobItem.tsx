import { Card, CardHeader, CardBody } from "@nextui-org/card";

interface Props {
  headerContent: React.ReactNode;
  children: React.ReactNode;
}

const JobItem = ({ headerContent, children }: Props) => {
  return (
    <div className="ml-1 group relative flex items-center justify-between md:ml-0 md:justify-normal md:odd:flex-row-reverse">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-danger text-slate-50 shadow md:order-1 md:h-10 md:w-10 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
      <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
        <CardHeader className="flex flex-col space-y-2">
          {headerContent}
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  );
};

export default JobItem;
