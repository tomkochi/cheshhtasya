"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bg-gray flex items-center shadow-md text-secondary">
      <div className="w-full max-w-7xl mx-auto pt-10 pb-4 px-3">
        <div className="flex justify-between">
          <div className="py-2">
            <Image
              src="/cheshhtasya-logo-full.svg"
              width={164}
              height={106}
              alt="cheshhtasya logo"
            />
            <div className="border-t-gray-400 border-t-[1px] mt-2 py-3 text-sm pr-12">
              9/311, "Vibha", Opp. Noel Signature Apartments, <br />
              Infopark Rd, Kakkanad-682030.
              <br />
              <div className="pt-3 flex gap-6">
                <a href="tel:9037004066">Tel: 9037004066</a>
                <a href="mailto:info@cheshhtasya.com" target="_blank">
                  Email: info@cheshhtasya.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-4 self-end py-3">
            <a href="/" className="hover:opacity-65 duration-150">
              <Image src="/fb.svg" width={35} height={35} alt="facebook logo" />
            </a>
            <a href="/" className="hover:opacity-65 duration-150">
              <Image src="/yt.svg" width={35} height={35} alt="youtube logo" />
            </a>
            <a href="/" className="hover:opacity-65 duration-150">
              <Image src="/wa.svg" width={35} height={35} alt="whatsapp logo" />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-[12px] text-gray-500">
          Copy Right {new Date().getFullYear()} Cheshhtasya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
