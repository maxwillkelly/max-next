import { trpc } from "@/app/_trpc/client";
import { ContactMessage, contactMessageSchema } from "@/shared/contactMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Check, SendHorizontal } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

const ContactForm = () => {
  const contactFormMutation = trpc.sendContactMessage.useMutation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
  });

  useFormPersist("contact-me-form", {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<ContactMessage> = (data) => {
    contactFormMutation.mutate({ contactMessage: data });
  };

  return (
    <form className="flex flex-col flex-wrap" onSubmit={handleSubmit(onSubmit)}>
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
          errorMessage={errors.lastName?.message || <div className="h-4"></div>}
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
          errorMessage={errors.email?.message || <div className="h-4"></div>}
          {...register("email")}
        />
        <Input
          type="subtitle"
          label="Subtitle"
          placeholder="Hello"
          className="px-3 md:w-1/2"
          isInvalid={Boolean(errors.subtitle)}
          errorMessage={errors.subtitle?.message || <div className="h-4"></div>}
          {...register("subtitle")}
        />
      </div>
      <Textarea
        label="Message"
        placeholder="Let's rock 'n' roll"
        className="mb-6 px-3"
        isInvalid={Boolean(errors.message)}
        errorMessage={errors.message?.message || <div className="h-4"></div>}
        {...register("message")}
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
