import { ContactMessage } from "@/shared/contactMessage";
import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";
import * as React from "react";

interface Props {
  contactMessage?: ContactMessage;
  nodeEnv?: "development" | "production";
}

const ContactEmailTemplate = ({
  contactMessage = {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@gmail.com",
    subtitle: "Hello",
    message: "Let's rock 'n' roll",
  },
  nodeEnv = "development",
}: Props) => {
  const {
    firstName,
    lastName,
    email,
    subtitle,
    message: messageBody,
  } = contactMessage;
  const isDevelopment = nodeEnv === "development";
  const mailtoLink = `mailto:${email}?subject=Re: ${subtitle}`;

  return (
    <Html>
      <Head />
      <Preview>
        {isDevelopment ? "DEVELOPMENT: " : ""}You have received a message from{" "}
        {firstName} {lastName}
      </Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                white: "#FFFFFF",
                black: "#000000",
                blue: {
                  50: "#e6f1fe",
                  100: "#cce3fd",
                  200: "#99c7fb",
                  300: "#66aaf9",
                  400: "#338ef7",
                  500: "#006FEE",
                  600: "#005bc4",
                  700: "#004493",
                  800: "#002e62",
                  900: "#001731",
                },
              },
            },
          },
        }}
      >
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-96 rounded border border-solid border-[#eaeaea] p-4">
            <Section>
              <Heading as="h1">You have received a message</Heading>
            </Section>
            <Section>
              <Text>Hello Max,</Text>
              <Text>
                You have received a message from{" "}
                <strong>
                  {firstName} {lastName}
                </strong>{" "}
                (<Link href={mailtoLink}>{email}</Link>).
              </Text>
              {isDevelopment ? (
                <Text>
                  This was sent in a <strong>Development</strong> environment.
                </Text>
              ) : null}
              <Heading as="h3">{subtitle}</Heading>
              <Text>{messageBody}</Text>
            </Section>
            <Section className="text-center">
              <Button
                pX={16}
                pY={10}
                className="rounded-xl bg-[#f31260] text-sm font-normal text-white subpixel-antialiased shadow-lg shadow-danger/40 outline-none"
                href={mailtoLink}
              >
                Reply
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmailTemplate;
