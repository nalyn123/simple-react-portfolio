import React, { forwardRef } from "react";
import "./first.scss";
import { Floater } from "simple-react-floating-hover";
import { BlueCurve1, BlueCurve2, Github } from "@assets/images";

const First = forwardRef((_, ref) => {
  return (
    <div data-id="home" ref={ref} className={"first"}>
      <Floater
        className={"first__developer"}
        wrapper={ref}
        speed={0.2}
        distance={20}
        inverted={true}
      >
        Develop
      </Floater>
      <div className={"first__portfolio-wrap"}>
        <Floater wrapper={ref} speed={0.4} distance={20}>
          <p className={"first__portfolio"}>Portfolio</p>
          <p className={"first__name"}>
            <span className={"first__name__line"}></span>Ronalyn Taguiam
          </p>
        </Floater>
      </div>

      <Floater
        wrapper={ref}
        speed={0.4}
        distance={20}
        inverted={true}
        className={"first__curve1"}
      >
        <img src={BlueCurve1} alt="curve 1" />
      </Floater>
      <Floater
        wrapper={ref}
        speed={0.4}
        distance={20}
        className={"first__curve2"}
      >
        <img src={BlueCurve2} alt="curve 2" />
      </Floater>

      <div className={"first__sm"}>
        <Floater wrapper={ref} speed={0.4} distance={20} invertedX={true}>
          <p className={"first__sm__text"}>Follow me</p>
          <span className={"first__sm__line"}></span>
          <a
            href="https://github.com/nalyn123?tab=repositories"
            target="_blank"
            className={"first__sm__link"}
          >
            <img src={Github} alt="github" />
          </a>
        </Floater>
      </div>
    </div>
  );
});

export default First;
