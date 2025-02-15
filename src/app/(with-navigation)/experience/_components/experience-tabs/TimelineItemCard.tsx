import { Card, CardHeader, CardBody, Chip } from "@heroui/react";
import { format } from "date-fns";

interface Props {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  startDate: Date;
  endDate: Date | null;
  body: React.ReactNode;
  languagesAndFrameworks?: string[];
}

const TimelineItemCard = ({
  title,
  subtitle,
  startDate,
  endDate,
  body,
  languagesAndFrameworks,
}: Props) => {
  return (
    <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
      <CardHeader className="flex flex-col space-y-2">
        <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {format(startDate, "MMMM yyyy")} -{" "}
          {endDate ? format(endDate, "MMMM yyyy") : "Present"}
        </time>
      </CardHeader>
      <CardBody className="pt-0">
        <p className="mt-2 text-left text-sm text-gray-500 dark:text-gray-400">
          {body}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {languagesAndFrameworks?.map((languageOrFramework) => (
            <Chip key={languageOrFramework} variant="dot" color="danger">
              {languageOrFramework}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default TimelineItemCard;
