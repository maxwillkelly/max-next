"use client";

import { trpc } from "@/app/_trpc/client";
import {
  type ContactMessage,
  contactMessageSchema,
} from "@/shared/contactMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@heroui/react";
import { Check, SendHorizontal } from "lucide-react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

const ContactForm = () => {
  const contactFormMutation = trpc.sendContactMessage.useMutation();

  const { control, handleSubmit, reset } = useForm<ContactMessage>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subtitle: "",
      message: "",
    },
    resolver: zodResolver(contactMessageSchema),
  });

  const onSubmit: SubmitHandler<ContactMessage> = async (data) => {
    await contactFormMutation.mutateAsync({ contactMessage: data });
    reset();
  };

  return (
    <form className="flex flex-col flex-wrap" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 md:flex">
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="text"
              label="First Name"
              placeholder="John"
              className="mb-6 px-3 md:mb-0 md:w-1/2"
              validationBehavior="native"
              isInvalid={Boolean(fieldState.error)}
              errorMessage={
                fieldState.error?.message ?? <div className="h-4"></div>
              }
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="text"
              label="Last Name"
              placeholder="Smith"
              className="px-3 md:w-1/2"
              validationBehavior="native"
              isInvalid={Boolean(fieldState.error)}
              errorMessage={
                fieldState.error?.message ?? <div className="h-4"></div>
              }
            />
          )}
        />
      </div>
      <div className="mb-6 md:flex">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="email"
              label="Email"
              placeholder="john.smith@email.com"
              className="mb-6 px-3 md:mb-0 md:w-1/2"
              validationBehavior="native"
              isInvalid={Boolean(fieldState.error)}
              errorMessage={
                fieldState.error?.message ?? <div className="h-4"></div>
              }
            />
          )}
        />
        <Controller
          name="subtitle"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="text"
              label="Subtitle"
              placeholder="Hello"
              className="px-3 md:w-1/2"
              validationBehavior="native"
              isInvalid={Boolean(fieldState.error)}
              errorMessage={
                fieldState.error?.message ?? <div className="h-4"></div>
              }
            />
          )}
        />
      </div>
      <Controller
        name="message"
        control={control}
        render={({ field, fieldState }) => (
          <Textarea
            {...field}
            label="Message"
            placeholder="Let's rock 'n' roll"
            className="mb-6 px-3"
            validationBehavior="native"
            isInvalid={Boolean(fieldState.error)}
            errorMessage={
              fieldState.error?.message ?? <div className="h-4"></div>
            }
          />
        )}
      />
      <Button
        type="submit"
        color="danger"
        endContent={
          contactFormMutation.isSuccess ? <Check /> : <SendHorizontal />
        }
        isLoading={contactFormMutation.isLoading}
        disabled={
          contactFormMutation.isLoading || contactFormMutation.isSuccess
        }
      >
        {contactFormMutation.isIdle && "Send message"}
        {contactFormMutation.isLoading && "Sending..."}
        {contactFormMutation.isError &&
          "Failed to send message, click to retry"}
        {contactFormMutation.isSuccess && "Sent"}
      </Button>
    </form>
  );
};

export default ContactForm;
