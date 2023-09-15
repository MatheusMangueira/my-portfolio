import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { B } from "../../assets/image/B";
import { ButtonSubmitForm } from "../ButtonSubmitForm/ButtonSubmitForm";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

interface IForm {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("name is required").min(2),
  email: yup.string().email("Email invalid").required("email is required"),
  message: yup.string().required("message is required").min(10),
});

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmitContact = async (data: any) => {
    setLoading(true);

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    await emailjs
      .send(
        "service_ud5yblr",
        "template_mxyu4gv",
        templateParams,
        "kfHkAUeV-Tbmm2-9C"
      )

      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
          }, 3000);

          setLoading(false);
          reset({
            name: "",
            email: "",
            message: "",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessageError("Error sending message, try again later");
        console.log(err.message);
      });
  };

  return (
    <div
      className="py-10 lg:py-26 h-full w-full
    bg-[url('https://cdn.discordapp.com/attachments/949389628413206589/1071221793249046598/image_5.png')]
    bg-black
    bg-cover
    bg-bottom
    "
    >
      <div className="px-5 xl:px-20 xl:mb-0 h-full ">
        <div className="mb-[40px] w-full h-full relative">
          <div className=" hidden lg:flex justify-center mb-[-20px] ml-[300px]">
            <B hight="124px" width="124px" />
          </div>

          <h1
            id="Contact"
            className=" text-center w-full text-[48px] font-inter text-accent"
          >
            <FormattedMessage id="contactTitle" />
          </h1>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-start gap-10">
          <div className="w-full ">
            <p className="text-white text-[18px]">
              <FormattedMessage id="contactText" />
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSubmitContact)}
            className="text-white lg:mt-0 mt-5 flex justify-center items-center w-full flex-col "
          >
            <div className="flex flex-col w-full  ">
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    name="name"
                    onChange={onChange}
                    value={value}
                    type="text"
                    placeholder="Name"
                  />
                )}
              />
              {errors.name && (
                <span className="mb-5 mt-[-20px] text-red-500 ">
                  {errors.name?.message}
                </span>
              )}
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    name="email"
                    onChange={onChange}
                    value={value}
                    type="email"
                    placeholder="Email"
                  />
                )}
              />
              {errors.email && (
                <span className="mb-5 mt-[-20px] text-red-500 ">
                  {errors.email?.message}
                </span>
              )}

              <Controller
                name="message"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextArea
                    name="form"
                    onChange={onChange}
                    value={value}
                    placeholder="Message"
                  />
                )}
              />
              {errors.message && (
                <span className="mb-5 mt-[-20px] text-red-500 ">
                  {errors.message?.message}
                </span>
              )}
            </div>
            <div className="mt-2 w-full">
              <ButtonSubmitForm
                style={{
                  backgroundColor: success ? "#39e839" : "",
                }}
                type="submit"
                childrem={
                  loading ? "Sending..." : <FormattedMessage id="contactButton" />
                }
              />
              {messageError && (
                <span className="mb-5 mt-[-20px] text-red-500 ">
                  {messageError}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
