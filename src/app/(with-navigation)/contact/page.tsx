import ContactForm from "./_components/ContactForm";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

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
            <ContactForm />
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default ContactPage;
