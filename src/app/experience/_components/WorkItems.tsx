import JobItem from "./work-items/JobItem";
import { Chip } from "@nextui-org/chip";

const WorkItems = () => (
  <div className="p-8">
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-danger before:to-transparent md:before:mx-auto md:before:translate-x-0">
      <JobItem
        headerContent={
          <>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
              The Key Support Services
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2022 - Present
            </time>
          </>
        }
      >
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus incidunt ut officiis explicabo inventore.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Chip variant="dot" color="danger">
            JavaScript
          </Chip>
          <Chip variant="dot" color="danger">
            TypeScript
          </Chip>
          <Chip variant="dot" color="danger">
            React
          </Chip>
          <Chip variant="dot" color="danger">
            Next.js
          </Chip>
          <Chip variant="dot" color="danger">
            Node.js
          </Chip>
          <Chip variant="dot" color="danger">
            GraphQL
          </Chip>
          <Chip variant="dot" color="danger">
            gRPC
          </Chip>
          <Chip variant="dot" color="danger">
            MongoDB
          </Chip>
        </div>
      </JobItem>
      <JobItem
        headerContent={
          <>
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
              Udrafter
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Student Software Developer
            </p>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2020 - September 2021
            </time>
          </>
        }
      >
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
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
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Chip variant="dot" color="danger">
            JavaScript
          </Chip>
          <Chip variant="dot" color="danger">
            Vue.js
          </Chip>
          <Chip variant="dot" color="danger">
            C#
          </Chip>
          <Chip variant="dot" color="danger">
            .NET
          </Chip>
          <Chip variant="dot" color="danger">
            MySQL
          </Chip>
          <Chip variant="dot" color="danger">
            Docker
          </Chip>
          <Chip variant="dot" color="danger">
            React
          </Chip>
        </div>
      </JobItem>
    </div>
  </div>
);

export default WorkItems;
