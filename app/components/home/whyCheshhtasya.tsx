"use client";

const Why = () => {
  const data = [
    {
      icon: "calendar-clock.svg",
      label: "Decades of Design Mastery",
    },
    {
      icon: "group-star.svg",
      label: "Over 1000+ happy customers",
    },
    {
      icon: "clipboard.svg",
      label: "A-Z Interior and Exterior Excellence",
    },
    {
      icon: "handshake.svg",
      label: "Client-Centric Approach",
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto px-3 my-14">
      <h3 className="text-3xl text-primary text-center font-semibold mb-14">
        Why Cheshhtasya?
      </h3>
      <div className="flex gap-x-12 justify-center">
        {data.map((d) => (
          <div className="flex flex-col items-center max-w-40">
            <div className="flex flex-1 mb-3">
              <img src={`/${d.icon}`} alt="" className="h-14" />
            </div>
            <h5 className="text-secondary text-md text-center leading-tight">
              {d.label}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
