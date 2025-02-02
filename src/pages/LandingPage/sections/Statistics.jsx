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
    { title: "DISRUPT AND INNOVATE" } 
  ];
  
  const rowThree = [
    { title: "NO OF EVENTS", value: "10" },
    { title: "PRIZE POOL", value: "20" },
    { title: "NO OF EVENTS", value: "10" },
  ];

  // use this in classname in section for test
  // bg-[url(https://s3-alpha-sig.figma.com/img/a022/2427/cb72bd1a23d589f87ac7dbc5b75ad743?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WvAKjsBBM1AQgxv2lZ5GlPEQ1RdABiiZ0DRJuhkniStXYWe5zfCQWd6oPRnyj~ts6iiIml~DUyqWsmnJUxIs~J~CLaGirCZbpw3MFj5nKxAJWYcdZb7ywOLr0rENN1zMX8HVN6eBtzETxszN0fzfl2SaF2EGkEz9~rr1CJ-qzpmcZxJP9tBE47cxT5-M47II0bGLJ2sI7ur6lFoGUOEHzOKgeC~lTqDX7OzAIKIouUeJfEGAgAFH82YRMWqelqjGH-3F5VyKFIs0R0oHejK73PL4yTWCcPO9p3ggwOO9HNVj12BhmQhJO-Lm0GkJDYouW-OxOp9JXWRjh3YUknrfMw__)] bg-cover p-8
  return (
    <section className="">
      <h1 className="font-press text-2xl md:text-5xl lg:text-7xl font-semibold leading-[102px] text-center gradient-text drop-shadow-[0_0_10px_rgba(235,169,42,0.8)]">
        Statistics
      </h1>

      {/* row one */}

      <div className="row-one flex flex-wrap justify-center items-center gap-8 m-4 p-4">
        {rowOne.map((stat, index) => (
          <CardContainer key={index} className="inter-var min-w-[270px] sm:w-[320px] md:w-[400px] lg:w-[350px] xl:w-[400px]">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center min-w-[270px] sm:min-w-[320px] md:w-[400px] lg:w-[350px] xl:w-[400px] min-h-[200px] sm:h-[226px] p-4 m-4">
                  <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    {stat.title}
                  </p>
                  <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">
                  <CountUp start={0} end={stat.value} duration={2} delay={2.5}/>
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* row two */}

      <div className="row-two flex flex-wrap justify-center items-center gap-4 m-4 p-4 w-full">
        {rowTwo.map((stat, index) => (
          <div
            key={index}
            className="w-[270px] sm:w-[320px] md:w-[400px] lg:w-full lg:max-w-[90%] min-w-[270px] relative right-4"
          >
            <CardContainer className="inter-var" perspective="2000px">
              <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white w-full">
                  <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center w-full min-h-[200px] sm:h-[226px] p-4">
                    <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">
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

      <div className="row-three flex flex-wrap justify-center items-center gap-8 m-4 p-4">
        {rowThree.map((stat, index) => (
          <CardContainer key={index} className="inter-var min-w-[270px] sm:w-[320px] md:w-[400px] lg:w-[350px] xl:w-[400px]">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                <div className="bg-[rgba(320,0,10,0.15)] rounded-xl flex flex-col justify-evenly items-center min-w-[270px] sm:min-w-[320px] md:w-[400px] lg:w-[350px] xl:w-[400px] min-h-[200px] sm:h-[226px] p-4 m-4">
                  <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">
                    {stat.title}
                  </p>
                  <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">
                  <CountUp start={0} end={stat.value} duration={2} delay={2.5}/>
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