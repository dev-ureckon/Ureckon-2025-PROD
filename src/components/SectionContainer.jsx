import React, { useRef, useEffect, useState } from "react";
import pacman from "../assets/SectionContainer/pacman.svg";
import ghost from "../assets/SectionContainer/ghost.svg";
import cherry from "../assets/SectionContainer/cherry.svg";
import strawberry from "../assets/SectionContainer/strawberry.svg";

const vectorArray = [pacman, ghost, cherry, strawberry];

const VerticalLine = ({ height }) => {
  return <div className="w-20 rounded-full border-4 border-blue-500 bg-transparent shadow-md" style={{ height }} />;
};

const SectionContainer = ({ height = "25rem", children }) => {
  const baseHeight = 25;
  const gap = 1;
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const heightInRem = containerRef.current.clientHeight / 16;
      setContainerHeight(heightInRem);
    };
  }, []);

  const getRandomVector = (usedVectors) => {
    const availableVectors = vectorArray.filter((v) => !usedVectors.includes(v));
    if (availableVectors.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableVectors.length);
    return availableVectors[randomIndex];
  };

  const generateLines = (firstHeight, usedVectors = []) => {
    if (containerHeight === 0) return null;

    const lines = [<VerticalLine key="first" height={firstHeight} />];
    let totalHeight = parseFloat(firstHeight) + gap;
    let newUsedVectors = [...usedVectors];

    while (totalHeight + baseHeight + gap <= containerHeight) {
      const vector = getRandomVector(newUsedVectors);
      if (vector) {
        newUsedVectors.push(vector);
        lines.push(<img key={`vector-${totalHeight}`} src={vector} alt="Vector" className="w-12 h-auto mx-auto" />);
      };
      lines.push(<VerticalLine key={totalHeight} height={`${baseHeight}rem`} />);
      totalHeight += baseHeight + gap;
    };

    const remainingHeight = containerHeight - totalHeight;
    if (remainingHeight > 0) {
      const vector = getRandomVector(newUsedVectors);
      if (vector) {
        lines.push(<img key="vector-last" src={vector} alt="Vector" className="w-12 h-auto mx-auto" />);
      };
      lines.push(<VerticalLine key="last" height={`${remainingHeight}rem`} />);
    };

    return lines;
  };

  return (
    <section ref={containerRef} className={`flex justify-between w-full relative`}>
      <div className="flex flex-col gap-4">{generateLines(height, [])}</div>
      <div className="relative">{children}</div>
      <div className="flex flex-col gap-4">{generateLines(height, [])}</div>
    </section>
  );
};

export default SectionContainer;
