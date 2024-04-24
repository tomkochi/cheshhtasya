import { getOther } from "@/sanity/utils/fetchOther";
import Link from "next/link";
import { FC } from "react";

const ContactUs: FC = async () => {
  const data = await getOther();

  return (
    <>
      <div className="w-full max-w-xl mx-auto my-32 text-secondary">
        <h3 className="text-4xl text-primary text-center font-semibold mb-14 px-4">
          Contact us
        </h3>
        <form action="" className="w-full px-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-12 p-4 mb-3 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Mobile"
            className="w-full h-12 p-4 mb-3 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-12 p-4 mb-3 rounded-lg border-[#9D9C9C] border-2 text-lg"
          />
          <textarea
            name="message"
            placeholder="Any extra info"
            className="h-36 w-full p-4 rounded-lg border-[#9D9C9C] border-2 text-lg mt-5 resize-none"
          ></textarea>
          <div className="text-xs text-secondary">
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

export default ContactUs;
