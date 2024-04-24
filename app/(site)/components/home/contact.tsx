import Link from "next/link";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-3 my-14 bg-opacity-80 bg-black py-16 rounded-md">
      <h2 className="text-3xl text-white text-center font-semibold">
        Set up a meeting
      </h2>
      <h4 className="text-xs text-white text-center mb-10">
        Give us a few details. We can meet in person.
      </h4>
      <form action="" className="w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="h-12 p-4 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="h-12 p-4 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            className="h-12 p-4 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
          <input
            type="text"
            name="postal-code"
            placeholder="Postal Code"
            className="h-12 p-4 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
        </div>
        <textarea
          name="message"
          placeholder="Any extra info"
          className="h-36 w-full p-4 rounded-lg border-[#9D9C9C] border-2 text-lg mt-5 resize-none"
        ></textarea>
        <div className="text-xs text-white">
          By submitting this form, you agree to the
          <Link href="/" className="text-[#9D9D9D] mx-1">
            privacy policy
          </Link>
          and
          <Link href="/" className="text-[#9D9D9D] mx-1">
            terms of use
          </Link>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-action text-white px-12 py-2 rounded-md hover:bg-action-hover duration-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
