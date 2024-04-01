import React, { useState } from "react";
import { experiences } from "../config";
import { GoTriangleRight } from "react-icons/go";
import FadeIn from "../components/FadeIn/FadeIn";

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <FadeIn>
      <section
        className="my-96 flex flex-col md:mt-20 2xl:px-32"
        id="experience"
      >
        <h1 className="numbered-title mb-14">
          <span>02.</span>
          <span>Onde trabalhei</span>
        </h1>
        <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
          <div className="flex font-mono md:flex-col">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`cursor-pointer border-b-2 border-x-lightest-navy border-y-lightest-navy p-2 text-sm md:border-b-0 md:border-l-2 ${selectedTab === index ? "  border-b-green text-green md:border-l-green" : ""} w-48 transition-colors duration-500 hover:bg-light-navy hover:text-green`}
                onClick={() => setSelectedTab(index)}
              >
                {experience.company}
              </div>
            ))}
          </div>
          <div>
            <h1 className="flex flex-col gap-x-2 text-lg font-semibold md:flex-row">
              {experiences[selectedTab].position}
              <span className=" text-green">
                @
                <a
                  className="text-underline"
                  href={experiences[selectedTab].link}
                  target="_blank"
                >
                  {experiences[selectedTab].company}
                </a>
              </span>
            </h1>
            <p className="font-mono text-sm">{experiences[selectedTab].date}</p>

            <ul className="text-md mt-5 flex flex-col font-mono">
              {experiences[selectedTab].description.map((sentence) => (
                <li key={sentence.sentence} className="my-1 flex gap-x-1">
                  <div>
                    <GoTriangleRight color={"#64ffda"} size={20} />
                  </div>

                  {sentence.sentence}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Experience;
