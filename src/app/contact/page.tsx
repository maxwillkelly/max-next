"use client";

import { sendMessage } from "./actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Check, SendHorizontal } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export const messageSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  subtitle: z.string().min(1, "Subtitle is required"),
  message: z.string().min(1, "Message is required"),
});

export type Message = z.infer<typeof messageSchema>;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors, isSubmitSuccessful },
  } = useForm<Message>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit: SubmitHandler<Message> = (data) => {
    sendMessage(data);
  };

  return (
    <Card className="w-11/12 max-w-lg sm:w-9/12 md:w-8/12">
      <CardHeader>
        <h2 className="font-semibold sm:text-lg sm:leading-8">Contact me</h2>
      </CardHeader>
      <CardBody>
        <form
          className="flex flex-col flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6 md:flex">
            <Input
              type="text"
              label="First Name"
              placeholder="John"
              className="mb-6 px-3 md:mb-0 md:w-1/2"
              isInvalid={Boolean(errors.firstName)}
              errorMessage={
                errors.firstName?.message || <div className="h-4"></div>
              }
              {...register("firstName")}
            />
            <Input
              type="text"
              label="Last Name"
              placeholder="Smith"
              className="px-3 md:w-1/2"
              isInvalid={Boolean(errors.lastName)}
              errorMessage={
                errors.lastName?.message || <div className="h-4"></div>
              }
              {...register("lastName")}
            />
          </div>
          <div className="mb-6 md:flex">
            <Input
              type="email"
              label="Email"
              placeholder="john.smith@email.com"
              className="mb-6 px-3 md:mb-0 md:w-1/2"
              isInvalid={Boolean(errors.email)}
              errorMessage={
                errors.email?.message || <div className="h-4"></div>
              }
              {...register("email")}
            />
            <Input
              type="subtitle"
              label="Subtitle"
              placeholder="Hello"
              className="px-3 md:w-1/2"
              isInvalid={Boolean(errors.subtitle)}
              errorMessage={
                errors.subtitle?.message || <div className="h-4"></div>
              }
              {...register("subtitle")}
            />
          </div>
          <Textarea
            label="Message"
            placeholder="Let's rock 'n' roll"
            className="mb-6 px-3"
            isInvalid={Boolean(errors.message)}
            errorMessage={
              errors.message?.message || <div className="h-4"></div>
            }
            {...register("message")}
          />
          <Button
            type="submit"
            color="danger"
            endContent={isSubmitSuccessful ? <Check /> : <SendHorizontal />}
            isLoading={isLoading}
            disabled={isLoading || isSubmitSuccessful}
          >
            {isSubmitSuccessful ? 'Sent' : 'Send message'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default ContactPage;
