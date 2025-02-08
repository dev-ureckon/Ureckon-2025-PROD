import React from "react";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
import CountUp from "react-countup";

function Statistics() {
  const rowOne = [
    { title: "NO OF EVENTS", value: 10 },
    { title: "PRIZE POOL", value: 20 }, 
    { title: "NO OF EVENTS", value: 10 },
  ];

  const rowTwo = [
    { title: "DISRUPT AND INNOVATE" },
  ];

  const rowThree = [
    { title: "NO OF EVENTS", value: "10" },
    { title: "PRIZE POOL", value: "20" },
    { title: "NO OF EVENTS", value: "10" },
  ];

  return (
    <section className="">
      <div className="w-full">
  <h1 className="font-press text-2xl w-full lg:text-6xl uppercase lg:pb-8 leading-[102px] text-center gradient-text drop-shadow-[0_0_10px_rgba(235,169,42,0.8)]">
    Statistics
  </h1>
</div>


      {/* row one */}
      <div className="row-one flex flex-col  justify-center items-center gap-4 m-4 p-4 lg:flex-row">
        {rowOne.map((stat, index) => (
          <CardContainer
            key={index}
            className="inter-var w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
          >
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
              <CardItem translateZ="50" className="text-xl lg:text-xl font-bold text-neutral-600 dark:text-white">
                <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center w-full min-h-[150px] sm:h-[180px] lg:h-[150px] lg:min-w-[325px] md:min-w-[300px] p-4">
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    {stat.title}
                  </p>
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    <CountUp start={0} end={stat.value} duration={2} delay={2.5} />
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* row two */}
      <div className="row-two flex  justify-center items-center gap-4 m-4 p-4 w-full md:m-0 md:p-0 sm:m-0 sm:p-0">
        {rowTwo.map((stat, index) => (
          <div
            key={index}
            className="w-[350px] sm:w-[250px] md:w-[300px]  lg:w-full lg:max-w-[70%] min-w-[200px] relative right-4 md:right-0"
          >
            <CardContainer className="inter-var" perspective="2000px">
              <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
                <CardItem translateZ="50" className="text-xl lg:text-xl font-bold text-neutral-600 dark:text-white w-full">
                  <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center w-full min-h-[150px] sm:h-[180px] lg:h-[150px] p-4">
                    <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                      {stat.title}
                    </p>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>

      {/* row three */}
      <div className="row-three flex flex-col  justify-center items-center gap-4 m-4 p-4 lg:flex-row">
        {rowThree.map((stat, index) => (
          <CardContainer
            key={index}
            className="inter-var w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
          >
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
              <CardItem translateZ="50" className="text-xl lg:text-xl font-bold text-neutral-600 dark:text-white">
                <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center w-full min-h-[150px] sm:h-[180px] lg:h-[150px] lg:min-w-[325px] md:min-w-[300px] p-4">
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    {stat.title}
                  </p>
                  <p className="text-center font-press text-lg lg:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    <CountUp start={0} end={stat.value} duration={2} delay={2.5} />
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
