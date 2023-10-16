import TimelineItemCard from "../TimelineItemCard";

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
    <div className="group relative ml-1 flex items-center justify-between md:ml-0 md:justify-normal md:odd:flex-row-reverse">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-danger text-slate-50 shadow md:order-1 md:h-10 md:w-10 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
      <TimelineItemCard
        title={employer}
        subtitle={position}
        startDate={startDate}
        endDate={endDate}
        body={body}
        languagesAndFrameworks={languagesAndFrameworks}
      />
    </div>
  );
};

export default JobItem;
