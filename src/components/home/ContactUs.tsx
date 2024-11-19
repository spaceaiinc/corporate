"use client";
import TextAreaFormInput from "@/components/form/TextAreaFormInput";
import TextFormInput from "@/components/form/TextFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
import * as yup from "yup";

const ContactUs = () => {
  const contactFormSchema = yup.object({
    // name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    subject: yup.string().required("Please enter your subject"),
    message: yup.string().required("Please enter your message"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/mail", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Message sent successfully! We will get back to you soon.");
    } catch {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-md border border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Contact Us
          </span>
          {/* <p className="mt-5 text-lg"></p> */}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div>
            <div className="rounded-md border border-default-200 p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <div className="sm:cols-span-2">
                  {/* <TextFormInput
                    name="name"
                    label="Name"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    placeholder="Your first name..."
                    fullWidth
                    control={control}
                  /> */}
                  <TextFormInput
                    name="email"
                    label="Email *"
                    type="email"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    placeholder="Your email..."
                    containerClassName="mb-3"
                    fullWidth
                    control={control}
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextFormInput
                    name="subject"
                    label="Subject *"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    placeholder="Type subject..."
                    containerClassName="mb-3"
                    fullWidth
                    control={control}
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextAreaFormInput
                    name="message"
                    label="Message *"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    rows={6}
                    placeholder="Type messages..."
                    containerClassName="mb-4"
                    control={control}
                    fullWidth
                  />
                </div>
                <div className="flex justify-center">
                  <div className="relative inline-flex mt-10 group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>

                    <button
                      type="submit"
                      className={`
                      relative flex items-center rounded-md
                      px-6 py-2
                      text-primary-700
                      bg-white
                      border border-primary 
                      transition-all hover:bg-primary-700 hover:text-white
                    `}
                    >
                      Send Messages
                      <LuSend className="ms-2 h-5 w-5 rotate-45" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
