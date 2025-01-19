import React from "react";

const Loader = () => {
  return (
    <section className="h-screen bg-[#020c1c] flex flex-col justify-center items-center bg-[url('./bg.png')] relative">
      <div className="">
        <img src="./ureckon.svg" className="flex absolute top-10 left-10" />
      </div>
      <div className="flex flex-col gap-10">
        <img src="./Frame 25.svg" className="mx-auto h-[225px]" />
        <h1 className="font-pixel text-[#C0C0C0] text-[20.82px] drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] mx-auto text-center">
          CLICK ANYWHERE TO START
        </h1>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;
