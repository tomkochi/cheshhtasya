"use client";
import { FC, useEffect, useState } from "react";

import Image from "next/image";

interface Address {
  contactPhone: string;
  secondaryPhone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
}

interface Data {
  address: Address;
  youtubeChannel: string;
  location: string;
  facebookLink: string;
  enquiryEmail: string;
  whatsAppNumber: string;
}

interface FooterProps {
  data: Data;
}

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-bg-gray flex items-center shadow-md text-secondary pb-12 md:pb-0">
      <div className="w-full max-w-7xl mx-auto pt-10 pb-4 px-3">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="py-2">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/cheshhtasya-logo-full.svg"
                width={164}
                height={106}
                className="w-[120px] md:w-[164px]"
                alt="cheshhtasya logo"
              />
            </div>
            {data ? (
              <div className="border-t-gray-400 border-t-[1px] mt-2 py-3 text-sm md:pr-12 text-center md:text-left">
                {data.address.addressLine1}
                <br />
                {data.address.addressLine2}
                <br />
                {data.address.addressLine3}
                <br />
                <div className="pt-3 flex gap-x-2">
                  <a href={`tel:${data.address.contactPhone}`}>
                    Tel: {data.address.contactPhone}
                  </a>
                  ,{" "}
                  <a href={`tel:${data.address.secondaryPhone}`}>
                    {data.address.secondaryPhone}
                  </a>
                </div>
                <a href={`mailto:${data.address.email}`} target="_blank">
                  Email: {data.address.email}
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
          {data ? (
            <div className="flex gap-4 self-center md:self-end py-3 mb-4">
              <a
                href={data.facebookLink}
                className="hover:opacity-65 duration-150"
              >
                <Image
                  src="/fb.svg"
                  width={35}
                  height={35}
                  alt="facebook logo"
                />
              </a>
              <a
                href={data.youtubeChannel}
                className="hover:opacity-65 duration-150"
              >
                <Image
                  src="/yt.svg"
                  width={35}
                  height={35}
                  alt="youtube logo"
                />
              </a>
              <a
                href={data.whatsAppNumber}
                className="hover:opacity-65 duration-150"
              >
                <Image
                  src="/wa.svg"
                  width={35}
                  height={35}
                  alt="whatsapp logo"
                />
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="text-center text-xs text-[12px] text-gray-500">
          &copy; {new Date().getFullYear()} Cheshhtasya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
