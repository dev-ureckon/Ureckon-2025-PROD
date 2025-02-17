import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import CountUp from "react-countup";

function Statistics() {
  const rowOne = [
    { title: "NO OF EVENTS", value: 40 },
    { title: "PRIZE POOL", value: 300000 },
    { title: "No of Workshops", value: 10 },
  ];

  const rowTwo = [{ title: "DISRUPT AND INNOVATE" }];

  const rowThree = [
    { title: "Social Media Impressions", value: 500000 },
    { title: "Guest speaker", value: 20 },
    { title: "Projected Footfall", value: 15000 },
  ];

  return (
    <section className="w-full px-4 py-8">
      <h1 className="font-press text-2xl lg:text-6xl uppercase text-center gradient-text drop-shadow-[0_0_10px_rgba(235,169,42,0.8)] pb-8">
        Statistics
      </h1>
  <section className="lg:px-[50px]">
      {/* Row One */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rowOne.map((stat, index) => (
          <CardContainer key={index} className="w-full">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white w-full">
                <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center min-h-[150px] p-4">
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    {stat.title}
                  </p>
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    <CountUp start={0} end={stat.value} duration={2} delay={2.5} />+
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Row Two (Full Width) */}
      <div className="mt-4">
        {rowTwo.map((stat, index) => (
          <CardContainer key={index} className="w-full">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white w-full">
                <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center min-h-[150px] p-4">
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    {stat.title}
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Row Three */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {rowThree.map((stat, index) => (
          <CardContainer key={index} className="w-full">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white w-full">
                <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center min-h-[150px] p-4">
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    {stat.title}
                  </p>
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    <CountUp start={0} end={stat.value} duration={2} delay={2.5} />+
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      </section>
    </section>
  );
}

export default Statistics;
