import First from "./first/first";
import About from "./about/about";
import Works from "./works/works";
import React from "react";
import { useHome } from "./home-model";

const Home = () => {
  const { firstRef, aboutRef, worksRef } = useHome();

  return (
    <>
      <First ref={firstRef} />
      <About ref={aboutRef} />
      <Works ref={worksRef} />
    </>
  );
};

export default Home;
