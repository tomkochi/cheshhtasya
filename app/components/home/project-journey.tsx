"use client";

const ProjectJourney = () => {
  const data = [
    {
      title: "Communication",
      icon: "communication.svg",
      points: [
        "Engage in a thorough discussion to understand client needs",
        "Establish clear communication channels for seamless interaction",
      ],
    },
    {
      title: "Research",
      icon: "research.svg",
      points: [
        "Delve into comprehensive research to refine project requirements",
        "Explore creative recess for innovative ideas and solutions",
      ],
    },
    {
      title: "Design Phase",
      icon: "design-phase.svg",
      points: [
        "Infuse creativity into the design, ensuring it aligns with client expectations",
        "Craft detailed project plans and layouts for a visual representation",
      ],
    },
    {
      title: "Client Presentation",
      icon: "client-presentation.svg",
      points: [
        "Present designs and ideas to the client for feedback and collaboration",
        "Foster an open dialogue to refine and finalize the project vision",
      ],
    },
    {
      title: "Project Confirmation",
      icon: "project-confirmation.svg",
      points: [
        "Confirm project details, scope, and timelines with the client",
        "Ensure mutual agreement on the proposed design and project plan",
      ],
    },
    {
      title: "Timely Delivery",
      icon: "timely-delivery.svg",
      points: [
        "Execute the project according to the confirmed plan",
        "Prioritize on-time delivery, adhering to project milestones",
      ],
    },
  ];
  return (
    <div className="bg-bg-gray">
      <div className="w-full max-w-5xl mx-auto py-20 px-3">
        <h3 className="text-3xl text-primary text-center font-semibold mb-14">
          Project Journey
        </h3>
        <div className="grid grid-cols-2 gap-11">
          {data.map((d) => {
            return (
              <div className="flex gap-5">
                <div>
                  <div className="w-[80px]">
                    <img src={`/${d.icon}`} alt="" />
                  </div>
                </div>
                <div className="max-w-[352px] flex-grow-1">
                  <h4 className="text-xl text-primary font-bold mb-3">
                    {d.title}
                  </h4>
                  <ul className="list-disc ml-4">
                    {d.points.map((p) => {
                      return (
                        <li className="text-sm text-secondary mb-2">{p}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectJourney;
