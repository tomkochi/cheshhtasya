"use client";

import axios from "axios";
import Link from "next/link";
import { FC, FormEvent, useState } from "react";

interface Address {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  contactPhone: string;
  email: string;
}

interface Other {
  enquiryEmail: string;
  youtubeChannel: string;
  location: string;
  address: Address;
  title: string;
  facebookLink: string;
}

interface ContactProps {
  data: Other[];
}

const Contact: FC<ContactProps> = ({ data }) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (document.getElementById("caorporation").value) {
      return;
    }
    setDisabled(true);
    const pName = document.getElementById("name").value;
    const pEmail = document.getElementById("email").value;
    const pMobile = document.getElementById("mobile").value;
    const pPin = document.getElementById("pin").value;
    const pMessage = document.getElementById("message").value;
    const content = `
      <html>
        <head>
          <title>New contact via website</title>
          <style>
            table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <h2>New contact via website</h2>
          <table style="max-width: 600px;">
            <tbody>
              <tr>
                <td>Name</td>
                <td>${pName}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>${pName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${pEmail}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>${pMobile}</td>
              </tr>
              <tr>
                <td>PIN</td>
                <td>${pPin}</td>
              </tr>
              <tr>
                <td>Message</td>
                <td>${pMessage}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    axios({
      url: "/api/send",
      method: "post",
      data: {
        content: content,
      },
    })
      .then((r) => {
        if (r.data.success) {
          setSuccessMessage(
            "Thank you for contacting Chesshtasya!! Our represeentative will talk to you soon."
          );
        } else {
          setErrorMessage("Something went wrong.<br/>Please try again later.");
        }
      })
      .catch((e) => {
        setErrorMessage("Something went wrong.<br/>Please try again later.");
      });
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto my-32 text-secondary">
        <h3 className="text-4xl text-primary text-center font-semibold mb-14 px-4">
          Contact us
        </h3>
        <form
          method="POST"
          onSubmit={submit}
          className={`w-full px-4 ${disabled ? "opacity-30" : ""}`}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            disabled={disabled}
            className="w-full h-12 p-4 mb-3 rounded-lg border-[#9D9C9C] border-2 text-lg"
            required
          />
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Mobile"
            disabled={disabled}
            className="w-full h-12 p-4 mb-3 rounded-lg border-[#9D9C9C] border-2 text-lg"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            disabled={disabled}
            className="w-full h-12 p-4 mb-3 rounded-lg border-[#9D9C9C] border-2 text-lg"
            required
          />
          <input
            type="text"
            name="pin"
            id="pin"
            placeholder="Postal code"
            disabled={disabled}
            className="w-full h-12 p-4 mb-3 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
          <input
            type="text"
            name="caorporation"
            id="caorporation"
            placeholder="caorporation"
            className="text-primary h-0 outline-none"
            tabIndex={-1}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Any extra info"
            disabled={disabled}
            className="h-36 w-full p-4 rounded-lg border-[#9D9C9C] border-2 text-lg resize-none -mt-5"
          ></textarea>
          <div className="text-xs text-secondary">
            By submitting this form, you agree to the
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-[#9D9D9D] mx-1"
            >
              privacy policy
            </Link>
            and
            <Link
              href="/terms-of-use"
              target="_blank"
              className="text-[#9D9D9D] mx-1"
            >
              terms of use
            </Link>
          </div>
          <div className="text-right mt-4">
            <button
              type="submit"
              disabled={disabled}
              className="bg-action text-white px-12 py-2 rounded-md duration-100"
            >
              Submit
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="">
            <p className="mx-4 mt-4 p-2 text-sm text-center bg-green-300">
              {successMessage}
            </p>
          </div>
        )}
        {errorMessage && (
          <div className="">
            <p className="mx-4 mt-4 p-2 text-sm text-center bg-orange-400">
              {errorMessage}
            </p>
          </div>
        )}
        <div className="mt-16 scroll-px-14 px-4">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row text-center md:text-left items-center md:items-start">
            <div className="w-full">
              <div className="">
                {data[0].address.addressLine1}
                <br />
                {data[0].address.addressLine2}
                <br />
                {data[0].address.addressLine3}
                <br />
                <div className="flex flex-col mt-2">
                  <a href={`tel:${data[0].address.contactPhone}`}>
                    Tel: {data[0].address.contactPhone}
                  </a>
                  <a href={`mailto:${data[0].address.email}`}>
                    Email: {data[0].address.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[222px] rounded-lg overflow-hidden relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-white after:bg-opacity-50">
              <img
                src="/map.png"
                className="w-full h-32 md:h-auto object-cover"
                alt=""
              />
              <a
                href={data[0].location}
                target="_blank"
                className="absolute left-0 top-0 w-full h-full z-50 flex flex-col justify-center items-center"
              >
                <img src="/location.svg" className="w-5 mb-2" alt="" />
                <h6>View on map</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
