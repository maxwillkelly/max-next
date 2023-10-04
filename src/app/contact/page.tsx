"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
  return (
    <Card className="w-11/12 max-w-lg sm:w-9/12 md:w-8/12">
      <CardHeader>
        <h2 className="font-semibold sm:text-lg sm:leading-8">Contact me</h2>
      </CardHeader>
      <CardBody>
        <ContactForm />
      </CardBody>
    </Card>
  );
};

export default ContactPage;
