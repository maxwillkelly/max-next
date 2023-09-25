import { Message } from "@/app/contact/page";
import { env } from "@/env.mjs";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";
import React from "react";

interface Props {
  message: Message;
}

const ContactEmailTemplate = ({ message }: Props) => {
  const {
    firstName,
    lastName,
    email,
    subtitle,
    message: messageBody,
  } = message;
  const isDevelopment = env.NODE_ENV === "development";

  return (
    <Html>
      <Head />
      <Preview>
        {isDevelopment ? "DEVELOPMENT: " : ""}You have received a contact
        request
      </Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading as="h1">You have received a contact request</Heading>
            </Section>
            <Section>
              <Heading as="h2">Details</Heading>
              <Text>
                From: {firstName} {lastName}
              </Text>
              <Text>Email: {email}</Text>
              <Text>Subtitle: {subtitle}</Text>
              <Text>Message: {messageBody}</Text>
              <Text>Environment: {env.NODE_ENV}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmailTemplate;
