import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { SendHorizontal } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Contact
        </h1>
        <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">
          If you have any questions or would like to get in touch, please feel
          free to send me an email at{" "}
          <Link href="mailto:maxwill.kelly@gmail.com">
            maxwill.kelly@gmail.com
          </Link>{" "}
          or use this form below to send me a message.
        </p>
        <Card className="w-11/12 max-w-lg sm:w-9/12 md:w-8/12">
          <CardHeader>
            <h2 className="font-semibold sm:text-lg sm:leading-8">
              Contact me
            </h2>
          </CardHeader>
          <CardBody>
            <form className="flex flex-col flex-wrap">
              <div className="mb-6 md:flex">
                <Input
                  type="text"
                  label="First Name"
                  placeholder="John"
                  className="mb-6 px-3 md:mb-0 md:w-1/2"
                />
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Smith"
                  className="px-3 md:w-1/2"
                />
              </div>
              <div className="mb-6 md:flex">
                <Input
                  type="email"
                  label="Email"
                  placeholder="john.smith@email.com"
                  className="mb-6 px-3 md:mb-0 md:w-1/2"
                />
                <Input
                  type="subtitle"
                  label="Subtitle"
                  placeholder="Hello"
                  className="px-3 md:w-1/2"
                />
              </div>
              <Textarea
                label="Message"
                placeholder="Let's rock 'n' roll"
                className="mb-6 px-3"
              />
              <Button color="danger" endContent={<SendHorizontal />}>
                Send message
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default ContactPage;
