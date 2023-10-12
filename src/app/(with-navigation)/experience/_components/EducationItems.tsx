import TimelineItemCard from "./TimelineItemCard";

const EducationItems = () => (
  <div className="grid place-items-center p-8">
    <TimelineItemCard
      title="University of Dundee"
      subtitle="BSC (Hons) Computing Science"
      startDate={new Date("2018-09-01")}
      endDate={new Date("2022-06-01")}
      body="1st Class Honours"
      languagesAndFrameworks={[
        "JavaScript",
        "TypeScript",
        "React",
        "C#",
        ".NET",
        "MySQL",
        "PostgresSQL",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "NestJS",
        "GraphQL",
        "Docker",
        "React Native",
        "Expo",
        "Electron",
        "C ",
        "C++",
        "Java",
        "Python",
        "Scala",
      ]}
    />
  </div>
);

export default EducationItems;
