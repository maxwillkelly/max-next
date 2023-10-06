import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

const ProjectPage = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-3">
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default ProjectPage;
