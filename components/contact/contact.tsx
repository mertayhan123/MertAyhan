"use client";

import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Linkedin, LinkedinIcon } from "lucide-react";
import React, { useState } from "react";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [emailSubmited, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JsonData = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JsonData,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message Success");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24">
        <div className="col-span-1">
          <h5 className="text-mycolor-100 font-semibold mb-4 text-2xl">
            Lets Connect
          </h5>
          <p className="text-base text-white">
            If you’d like to discuss my projects, collaborate, or just have a
            chat about technology, feel free to reach out to me via the channels
            below. I’m always open to learning new things and enjoy connecting
            with people from different fields.{" "}
          </p>

          <div className="flex flex-row gap-4 mt-5">
            <a
              href="https://github.com/mertayhan123" // GitHub profil URL'ni ekle
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/mert-ayhan-0bb469233/" // LinkedIn profil URL'ni ekle
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="mailto:mertayhandev@gmail.com" // Mail adresini ekle
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition-colors duration-300"
            >
              <HiOutlineMail size={40} />
            </a>{" "}
          </div>
        </div>

        <div className="col-span-1">
          {emailSubmited ? (
            <Alert className="bg-green-600 text-white">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 text-white">
                <Label>Your Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>

              <div className="mb-6 text-white">
                <Label>Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-mycolor-600 mt-2"
                />
              </div>

              <div className="mb-6 text-white">
                <Label>Subject</Label>
                <Textarea
                  name="message"
                  className="bg-mycolor-600 mt-2"
                  placeholder="Type your message here."
                  required
                />
              </div>

              <div className="bg-mycolor-200 flex justify-center">
                <Button type="submit" variant="destructive">
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
