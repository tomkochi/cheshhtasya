const Quote = () => {
  const inputStyle =
    "text-primary h-9 px-2 py-4 outline-none border-b border-1 mb-4";
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-10 p-12">
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full max-w-md bg-white rounded-md">
            <div className="w-full flex justify-end p-4 pt-2 pb-0 opacity-70">
              <button
                type="button"
                className="flex items-center gap-2 p-2 group"
              >
                <span className=" text-xs opacity-0 group-hover:opacity-100 duration-150">
                  Close
                </span>{" "}
                <img src="/close.svg" alt="" />
              </button>
            </div>
            <div className="p-16 pt-4">
              <h2 className="text-2xl font-semibold mb-10">Get a free Quote</h2>
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
                <div className="flex justify-between">
                  <div className="">
                    <div className="text-primary text-[16px]">
                      You can contact me on WhatsApp
                    </div>
                    <div className="text-secondary text-[10px]">
                      Uncheck to opt-out of upcoming meetings and offer alerts
                    </div>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="whatsapp"
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
                  className={`${inputStyle} h-24 resize-none`}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
