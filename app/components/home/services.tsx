"use client";

const Services = () => {
  const data = [
    {
      icon: "interior.svg",
      title: "Interior",
      text: "Interior Design | 3D Modelling | 2D Drafting | Structural Design Project Management | Renovation",
    },
    {
      icon: "renovation.svg",
      title: "Renovation",
      text: "Interior/exterior renovation works of every sort",
    },
    {
      icon: "branding.svg",
      title: "Branding",
      text: "Sign Boards | LED Boards In-shop Branding | Creatives",
    },
    {
      icon: "maintenance.svg",
      title: "Maintenance",
      text: "Maintenance Contracts & Services Signboard exterior cleaning",
    },
  ];
  return (
    <div className="w-full max-w-4xl mx-auto px-3 my-14">
      <h2 className="text-3xl text-primary text-center font-semibold mb-14">
        Our Services
      </h2>
      <div className="grid grid-cols-2 gap-11">
        {data.map((d) => {
          return <Item icon={d.icon} title={d.title} text={d.text} />;
        })}
      </div>
    </div>
  );
};

const Item = ({ icon, title, text }) => {
  return (
    <div className="flex gap-5">
      <div>
        <div className="w-[80px]">
          <img src={`/${icon}`} alt="" />
        </div>
      </div>
      <div className="max-w-[252px] flex-grow-1">
        <h4 className="text-xl text-primary font-bold mb-3">{title}</h4>
        <h5 className="text-sm text-secondary">{text}</h5>
      </div>
    </div>
  );
};

export default Services;
