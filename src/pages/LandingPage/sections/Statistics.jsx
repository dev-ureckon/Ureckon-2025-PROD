import React from "react";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
import Counter from "../../../components/Counter"

function Statistics() {
  return (
    <section className='bg-[url(https://s3-alpha-sig.figma.com/img/a022/2427/cb72bd1a23d589f87ac7dbc5b75ad743?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WvAKjsBBM1AQgxv2lZ5GlPEQ1RdABiiZ0DRJuhkniStXYWe5zfCQWd6oPRnyj~ts6iiIml~DUyqWsmnJUxIs~J~CLaGirCZbpw3MFj5nKxAJWYcdZb7ywOLr0rENN1zMX8HVN6eBtzETxszN0fzfl2SaF2EGkEz9~rr1CJ-qzpmcZxJP9tBE47cxT5-M47II0bGLJ2sI7ur6lFoGUOEHzOKgeC~lTqDX7OzAIKIouUeJfEGAgAFH82YRMWqelqjGH-3F5VyKFIs0R0oHejK73PL4yTWCcPO9p3ggwOO9HNVj12BhmQhJO-Lm0GkJDYouW-OxOp9JXWRjh3YUknrfMw__)] bg-cover p-8'>
      <h1 className='font-press text-2xl md:text-5xl lg:text-7xl font-semibold leading-[102px] text-center gradient-text drop-shadow-[0_0_10px_rgba(235,169,42,0.8)]'>
        Statistics
      </h1>

      {/* Row one */}
      <div className="row-one flex flex-wrap justify-center items-center gap-8 sm:gap-4 m-4 p-4">
        <CardContainer className="inter-var min-h-200 min-w-300">
          <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white">
              <div className="bg-[rgba(255,0,10,0.15)] rounded-xl flex flex-col justify-center items-center min-w-[200px] sm:min-w-[255px] min-h-[200px] sm:min-h-[255px] p-4 m-4">
                <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">NO OF EVENTS</p>
                <Counter start={0} end={10}/>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var min-h-200 min-w-300">
          <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white">
              <div className="bg-[rgba(255,0,10,0.15)] rounded-xl flex flex-col justify-center items-center min-w-[200px] sm:min-w-[255px] min-h-[200px] sm:min-h-[255px] p-4 m-4">
                <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">PRIZE POOL</p>
                <p className="text-center font-press text-2xl md:text-3xl font-semibold text-red-700 statistics-text-shadow">3.0L</p>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var min-h-200 min-w-300">
          <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white">
              <div className="bg-[rgba(255,0,10,0.15)] rounded-xl flex flex-col justify-center items-center min-w-[200px] sm:min-w-[255px] min-h-[200px] sm:min-h-[255px] p-4 m-4">
                <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">NO OF EVENTS</p>
                <p className="text-center font-press text-2xl md:text-3xl font-semibold text-red-700 statistics-text-shadow">00</p>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      {/* Row two */}
     
      <div className="row-two flex flex-wrap justify-center items-center gap-4 m-4 p-4">
        <CardContainer className="inter-var min-h-200 min-w-300 w-auto">
          <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white">
              <div className='bg-[rgba(255,0,10,0.15)] rounded-xl flex justify-center items-center min-w-[255px] min-h-[255px] p-4 m-4'>
                <p className='block text-center font-press text-xl md:text-2xl font-semibold m-4 p-4 text-red-700 statistics-text-shadow'>DISRUPT AND INNOVATE</p>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Row three */}
        <div className="row-three flex flex-wrap justify-center items-center gap-2 sm:gap-4 m-4 p-4">
          <CardContainer className="inter-var min-h-200 min-w-300">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                <div className="bg-[rgba(255,0,10,0.15)] rounded-xl flex flex-col justify-center items-center min-w-[200px] sm:min-w-[255px] min-h-[200px] sm:min-h-[255px] p-4 m-4">
                  <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">NO OF EVENTS</p>
                  <p className="text-center font-press text-2xl md:text-3xl font-semibold text-red-700 statistics-text-shadow">00</p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var min-h-200 min-w-300">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                <div className="bg-[rgba(255,0,10,0.15)] rounded-xl flex flex-col justify-center items-center min-w-[200px] sm:min-w-[255px] min-h-[200px] sm:min-h-[255px] p-4 m-4">
                  <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">PRIZE POOL</p>
                  <p className="text-center font-press text-2xl md:text-3xl font-semibold text-red-700 statistics-text-shadow">3.0L</p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var min-h-200 min-w-300">
            <CardBody className="bg-transparent relative group/card w-full rounded-xl flex justify-center items-center m-0 p-0">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                <div className="bg-[rgba(255,0,10,0.15)] rounded-xl flex flex-col justify-center items-center min-w-[200px] sm:min-w-[255px] min-h-[200px] sm:min-h-[255px] p-4 m-4">
                  <p className="text-center font-press text-xl md:text-2xl font-semibold text-red-700 statistics-text-shadow">NO OF EVENTS</p>
                  <p className="text-center font-press text-2xl md:text-3xl font-semibold text-red-700 statistics-text-shadow">00</p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    )
  }
export default Statistics;

