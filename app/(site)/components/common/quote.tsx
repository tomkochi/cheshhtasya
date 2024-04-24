import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface QuoteProps {
  showQuote: (showQuote: boolean) => void;
}

const Quote: FC<QuoteProps> = ({ showQuote }) => {
  useEffect(() => {
    const checkbox = document.getElementById(
      "contact-on-whatsapp"
    ) as HTMLInputElement | null;
    if (checkbox) {
      checkbox.checked = true;
    }
  }, []);

  const inputStyle =
    "text-primary h-9 px-2 py-4 outline-none border-b border-1 mb-4";
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-30 p-3 md:p-12 z-50">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full max-w-md bg-white rounded-md">
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
            <form action="" className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={inputStyle}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={inputStyle}
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                className={inputStyle}
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
                    id="contact-on-whatsapp"
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
                placeholder="Postal Code"
                className={inputStyle}
              />
              <textarea
                name="message"
                placeholder="Any extra info"
                className="text-primary h-24 px-2 py-4 outline-none border-b border-1 mb-1 resize-none"
              ></textarea>
              <div className="text-[9px] text-secondary mb-3">
                By submitting this form, you agree to the
                <Link href="/" className="text-[#9D9D9D] mx-1">
                  privacy policy
                </Link>
                and
                <Link href="/" className="text-[#9D9D9D] mx-1">
                  terms of use
                </Link>
              </div>
              <button
                type="button"
                className="wfull bg-action text-white text-sm font-semibold px-6 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
