import JobItem from "./work-items/JobItem";

const WorkItems = () => (
  <div className="p-8">
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-danger before:to-transparent md:before:mx-auto md:before:translate-x-0">
      <JobItem
        employer="The Key Support Services"
        position="Software Engineer"
        startDate={new Date("2021-06-28")}
        endDate={null}
        body={
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            eaque! Voluptatum neque blanditiis voluptas voluptatem quidem nihil!
            Voluptate hic molestiae modi repellendus. Beatae corporis facere
            dignissimos fuga vero aut ducimus!
          </>
        }
        languagesAndFrameworks={[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "GraphQL",
          "gRPC",
          "MongoDB",
        ]}
      />
      <JobItem
        employer="Udrafter"
        position="Student Software Developer"
        startDate={new Date("2020-09-01")}
        endDate={new Date("2021-09-01")}
        body={
          <>
            Initially, I worked as a React developer in tandem with a .NET
            developer on Udrafter's platform.
            <br />
            <br />
            I later transitioned into the role of a Fullstack engineer
            independently rewriting the messaging features in their platform.
            <br />
            <br />
            This involved creating a Vue.js front-end and a .NET Core messaging
            microservice. I then led the team that integrated this service into
            the main platform.
          </>
        }
        languagesAndFrameworks={[
          "JavaScript",
          "TypeScript",
          "Vue.js",
          "C#",
          ".NET",
          "MongoDB",
          "Docker",
          "React",
        ]}
      />
    </div>
  </div>
);

export default WorkItems;
