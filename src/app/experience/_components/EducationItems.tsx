import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

const EducationItems = () => (
  <div className="grid place-items-center p-8">
    <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
      <CardHeader className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
          University of Dundee
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          BSC (Hons) Computing Science
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          First class honours
        </p>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          September 2018 - June 2022
        </time>
      </CardHeader>
      <CardBody>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus incidunt ut officiis explicabo inventore.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
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
            PostgresSQL
          </Chip>
          <Chip variant="dot" color="danger">
            Tailwind CSS
          </Chip>
          <Chip variant="dot" color="danger">
            Node.js
          </Chip>
          <Chip variant="dot" color="danger">
            Express
          </Chip>
          <Chip variant="dot" color="danger">
            NestJS
          </Chip>
          <Chip variant="dot" color="danger">
            GraphQL
          </Chip>
          <Chip variant="dot" color="danger">
            Docker
          </Chip>
          <Chip variant="dot" color="danger">
            React Native
          </Chip>
          <Chip variant="dot" color="danger">
            Expo
          </Chip>
          <Chip variant="dot" color="danger">
            Electron
          </Chip>
          <Chip variant="dot" color="danger">
            C{" "}
          </Chip>
          <Chip variant="dot" color="danger">
            C++
          </Chip>
          <Chip variant="dot" color="danger">
            Java
          </Chip>
          <Chip variant="dot" color="danger">
            Python
          </Chip>
          <Chip variant="dot" color="danger">
            Scala
          </Chip>
        </div>
      </CardBody>
    </Card>
  </div>
);

export default EducationItems;
