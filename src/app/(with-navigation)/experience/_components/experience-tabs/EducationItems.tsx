import TimelineItemCard from "./TimelineItemCard";

const EducationItems = () => (
  <div className="grid place-items-center p-8">
    <TimelineItemCard
      title="University of Dundee"
      subtitle="BSC (Hons) Computing Science - 1st Class Honours"
      startDate={new Date("2018-09-01")}
      endDate={new Date("2022-06-01")}
      body={
        <>
          I attended the University of Dundee from 2018 to 2022 and graduated
          with a First Class Honours degree in Computing Science.
          <br />
          <br />
          Unlike other computing degrees which place a great deal of emphasis on
          the theoretical mathematics underpinning computing, my course was
          centered around learning practical skills for the workplace.
          <br />
          <br />
          Most of our course was spend doing projects which were completed in
          teams, and we were encouraged to collabrate and learn a variety of
          different programming languages and skills.
          <br />
          <br />I was also active in the Dundee University Computing Society
          (DUCS) and served as Treasurer for 2021-22. I helped hold the first
          in-person society events, shortly after the UK had just emerged from
          the final Coronavirus lockdown. During my time on the committee, we
          held many successful events such as a Hackathon (sponsored by
          BlackRock and Unity) and a Ceildh.
        </>
      }
      languagesAndFrameworks={[
        "JavaScript",
        "TypeScript",
        "React",
        "C#",
        ".NET",
        "MySQL",
        "PostgresSQL",
        "Material UI",
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
