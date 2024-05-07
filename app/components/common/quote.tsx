import Link from "next/link";
import { FC, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

interface QuoteProps {
  showQuote: (showQuote: boolean) => void;
}

const Quote: FC<QuoteProps> = ({ showQuote }) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [contactMessage, setContactMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<boolean>(true);
  const [pin, setPin] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [coperation, setCoporation] = useState<string>("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (coperation) {
      return;
    }
    setDisabled(true);
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
                <td>${name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>${mobile}</td>
              </tr>
              <tr>
                ${
                  whatsapp
                    ? '<td style="color: white;  background: green">WhatsApp</td>'
                    : '<td style="color: white;  background: red">Allowed</td>'
                }
                ${
                  whatsapp
                    ? '<td style="color: white;  background: green">ALLOWED</td>'
                    : '<td style="color: white;  background: red">NOT ALLOWED</td>'
                }
              </tr>
              <tr>
                <td>PIN</td>
                <td>${pin}</td>
              </tr>
              <tr>
                <td>Message</td>
                <td>${message}</td>
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
          setContactMessage(
            "Thank you!<br/>Our represeentative will talk to you soon."
          );
        } else {
          setContactMessage(
            "Something went wrong.<br/>Please try again later."
          );
        }
      })
      .catch((e) => {
        setContactMessage("Something went wrong.<br/>Please try again later.");
      });
  };

  const inputStyle =
    "text-primary h-9 px-2 py-4 outline-none border-b border-1 mb-4";
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-60 p-3 md:p-12 z-50">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full max-w-md bg-white rounded-md" data-aos="fade">
          <div className="w-full flex justify-end p-2 pt-2 pb-0 opacity-70">
            <button
              type="button"
              className="flex items-center gap-2 p-2 group"
              onClick={() => showQuote(false)}
            >
              <span className=" text-xs font-thin opacity-0 group-hover:opacity-100 duration-150">
                Close
              </span>{" "}
              <img src="/close.svg" alt="" />
            </button>
          </div>
          <div className="p-8 pt-4">
            <h2 className="text-2xl font-semibold mb-10">
              Get free consultation
            </h2>
            <form method="POST" onSubmit={submit} className="flex flex-col">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputStyle}
                required
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyle}
                required
              />
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={inputStyle}
                required
              />
              <div className="flex justify-between pl-2 mb-2">
                <div className="">
                  <div className="text-primary font-thin text-sm md:text-[16px]">
                    You can contact me on WhatsApp
                  </div>
                  <div className="text-secondary text-xs md:text-[10px]">
                    Uncheck to opt-out of upcoming meetings and offer alerts
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="whatsapp"
                    id="whatsapp"
                    checked={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div
                    className="relative w-11 h-6 peer-focus:ring-4 
                                rounded-full peer bg-gray-400 peer-checked:after:translate-x-full
                                after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                after:bg-white after:rounded-full
                                after:h-5 after:w-5 after:transition-all
                                peer-checked:bg-[#D03535]"
                  ></div>
                </label>
              </div>
              <input
                type="text"
                name="pin"
                id="pin"
                placeholder="Postal Code"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className={inputStyle}
              />
              <input
                type="text"
                name="caorporation"
                id="caorporation"
                placeholder="caorporation"
                value={coperation}
                onChange={(e) => setCoporation(e.target.value)}
                className="text-primary h-0 outline-none"
                tabIndex={-1}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Any extra info"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-primary h-24 px-2 py-4 outline-none border-b border-1 mb-1 resize-none"
              ></textarea>
              <div className="text-[9px] text-secondary mb-3">
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
              <button
                type="submit"
                className="wfull bg-action text-white text-sm font-semibold px-6 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {disabled && (
        <div className="fixed bg-white bg-opacity-50 -left-2 top-0 w-screen h-screen flex items-center justify-center">
          {contactMessage ? (
            <div className="bg-gray-100 bg-opacity-100 shadow-md p-4 rounded-lg border-[1px] border-gray-300">
              <p
                dangerouslySetInnerHTML={{ __html: contactMessage }}
                className="text-sm px-20 py-12 pb-10"
              />
              <div className="flex w-full justify-end">
                <button
                  onClick={() => {
                    setContactMessage("");
                    setDisabled(false);
                    showQuote(false);
                  }}
                  className="px-10 py-2 border-[1px] border-gray-500 rounded-md"
                >
                  Ok
                </button>
              </div>
            </div>
          ) : (
            <img src="/images/loading.gif" alt="" />
          )}
        </div>
      )}
    </div>
  );
};

export default Quote;
