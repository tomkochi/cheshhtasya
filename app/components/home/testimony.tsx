"use client";

const Testimony = () => {
  const data = [
    {
      name: "Tinjo Thomas",
      address: "Mather Green Hills, Kakkanad",
      comment:
        "Jimy and his team completed our renovation project on time. What sets Jimy apart from others is that he has all workers readily available, which ensures the project is completed in a timely manner.Thanks for the great service. Great years ahead.",
    },
    {
      name: "Alphonsa George",
      address: "Mather, Kakkanad",
      comment:
        "It was a pleasure working with Jomy and Jimy Vithayathil.They did remodeling work in our absence on our parents home to make it elderly friendly.  They were very professional and timely with communication and troubleshooting.Always were willing to take on added work as the project progressed.Would highly recommend them and wishing them all success.",
    },
    {
      name: "Minu Joshy",
      address: "Mather, Kakkanad",
      comment:
        "Our experience with Jimmy chettan and his  design team was amazing . They took our vision and turned it into a breathtaking reality. What sets them apart is their heartfelt commitment to understanding our needs,budget and for that, we are immensely grateful. Thankyou team 👏👏",
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto px-3 my-14">
      <h2 className="text-3xl text-primary text-center font-semibold mb-14">
        What our clients say
      </h2>
      <div className="grid grid-cols-3 gap-16">
        {data.map((d) => {
          return <Says name={d.name} address={d.address} comment={d.comment} />;
        })}
      </div>
    </div>
  );
};

const Says = ({ name, address, comment }) => {
  return (
    <div
      className="
        relative py-3 after:w-[2px]
        after:h-full first-of-type:after:w-0 after:bg-bg-gray after:absolute after:-left-8 after:-top-2 "
    >
      <div className="flex  justify-end">
        <img src="/stars.svg" alt="" />
      </div>
      <h3 className="font-bold text-lg text-primary">{name}</h3>
      <div className="h-[2px] w-10 bg-[#FBBE00]"></div>
      <h4 className="text-xs text-secondary italic mb-3">{address}</h4>
      <p className="text-secondary">{comment}</p>
    </div>
  );
};

export default Testimony;
