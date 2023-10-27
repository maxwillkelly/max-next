import JobItem from "./work-items/JobItem";

const WorkItems = () => (
  <div className="p-8">
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-danger before:to-transparent md:before:mx-auto md:before:translate-x-0">
      <JobItem
        employer="The Key Support Services"
        position="GovernorHub Software Engineer"
        startDate={new Date("2022-06-28")}
        endDate={null}
        body={
          <>
            I work as a Software Engineer on GovernorHub, the leading online
            service for school governors and trustees.
            <br />
            <br />
            I am responsible for reimplementing a number of features from a
            monolithic AngularJS codebase into React and gRPC microservices.
            <br />
            <br />
            I&apos;ve also had the opportunity to onboard new developers into an
            expanding team and write developer specifications for new features.
          </>
        }
        languagesAndFrameworks={[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Material UI",
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
            developer on Udrafter&apos;s platform.
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
          "MySQL",
          "Docker",
          "React",
        ]}
      />
    </div>
  </div>
);

export default WorkItems;
