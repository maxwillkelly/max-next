import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import format from "date-fns/format";

interface Props {
  employer: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  body: React.ReactNode;
  languagesAndFrameworks?: string[];
}

const JobItem = ({
  employer,
  position,
  startDate,
  endDate,
  body,
  languagesAndFrameworks,
}: Props) => {
  return (
    <div className="ml-1 group relative flex items-center justify-between md:ml-0 md:justify-normal md:odd:flex-row-reverse">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-danger text-slate-50 shadow md:order-1 md:h-10 md:w-10 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
      <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
        <CardHeader className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
            {employer}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {position}
          </p>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {format(startDate, "MMMM yyyy")} -{" "}
            {endDate ? format(endDate, "MMMM yyyy") : "Present"}
          </time>
        </CardHeader>
        <CardBody className="pt-0">
          <p className="mt-2 text-sm text-left text-gray-500 dark:text-gray-400">
            {body}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {languagesAndFrameworks?.map((languageOrFramework) => (
              <Chip variant="dot" color="danger">
                {languageOrFramework}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobItem;
