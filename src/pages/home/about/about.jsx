import React, { forwardRef } from "react";
import "./about.scss";
import { IceCream, PinkCurve } from "@assets/images";

const About = forwardRef((_, ref) => {
  return (
    <div data-id="intro" ref={ref} className={"about"}>
      <div className={"about__bg"}>
        <img src={PinkCurve} alt="pink curve" />
      </div>
      <div className={`container about__container`}>
        <div className={"about__header"}>
          <p className={"about__header-shadow"}>Define</p>
          <p className={"about__header-text"}>Intro.</p>
        </div>

        <div className="row">
          <div className="col col-sm-7">
            <p className={`about__paragraph about__paragraph-space`}>
              Hello there! I'm Ronalyn Taguiam and you may call me 'Rona'. I'm a
              Front-end developer currently based in Quezon City.
            </p>
            <p className={`about__paragraph about__paragraph-space`}>
              My work process normally involves coding the mock up designs given
              by the web designers.
            </p>

            <p className={"about__header-text2"}>Languages</p>
            <div className="row">
              <div className="row col col-10">
                <div className="col col-6">
                  <p className={"about__paragraph2"}>HTML</p>
                </div>
                <div className="col col-6">
                  <p className={"about__paragraph2"}>CSS</p>
                </div>
                <div className="col col-6">
                  <p className={"about__paragraph2"}>JavaScript</p>
                </div>
                <div className="col col-6">
                  <p className={"about__paragraph2"}>PHP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-3">
            <img
              className={"about__icecream"}
              src={IceCream}
              alt="ice cream"
              width="100%"
            />
          </div>
        </div>
      </div>

      <div className={`container about__works-wrap`}>
        <div className={"about__works-bg"}></div>
      </div>
    </div>
  );
});

export default About;
