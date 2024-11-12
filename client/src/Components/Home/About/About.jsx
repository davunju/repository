import React from "react";

function About() {
  const contents = [
    {
      id: 1,
      heading: "Vision",
      icon: "/assets/light-bulb.png",
      description: `" To carry out the administration of Justice to the general public
              in dealing with disposal of cases effectively and efficiently ".`,
    },
    {
      id: 2,
      heading: "Mission",
      icon: "/assets/mission.png",
      description: `" Timely and Accessible Justice for All ".`,
    },
    {
      id: 3,
      heading: "Major Function",
      icon: "/assets/gears.png",
      description: `" Interpreting diverse Laws and execution administrative
              decisions. Hearing and deciding cases filed before the courts of
              law ".`,
    },
  ];
  return (
    <div className="max-w-7xl w-full mx-auto mb-16 md:mb-24 px-5 md:px-10">
      <div className="about-right">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Judiciary of Tanzania
        </h2>
        <div className="flex md:flex-row flex-col gap-7 w-full">
          {contents.map((content) => (
            <div
              key={content.id}
              className="w-full text-center p-5 border border-slate-300 bg-paper bg-slate-100 bg-blend-multiply flex flex-col justify-center items-center rounded-md shadow-md"
            >
              <img
                src={content.icon}
                alt="{content.heading} logo"
                className="size-10 mb-3"
              />
              <h3 className="font-semibold text-xl mb-3">{content.heading}</h3>
              <p className="text-md">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
