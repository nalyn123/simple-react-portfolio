import React, { forwardRef } from "react";
import "./works.scss";
import { Carousel, CarouselItem } from "simple-react-carousel";
import {
  WebsiteImg,
  FloatingButtonImg,
  FloatingHoverImg,
  ScrollAnimationImg,
} from "@assets/images";

const Works = forwardRef((_, ref) => {
  const carouselProps = {
    slides: 1,
    hasArrow: false,
    gap: 0,
    loop: false,
  };
  const data = [
    {
      img: WebsiteImg,
      title: "Simple React Website",
      url: "https://nalyn123.github.io/simple-react-website/",
      codeUrl: "https://github.com/nalyn123/simple-react-website",
    },
    {
      img: WebsiteImg,
      title: "Simple Carousel (Library)",
      url: "https://nalyn123.github.io/simple-react-website/",
      codeUrl: "https://github.com/nalyn123/simple-react-carousel",
    },
    {
      img: FloatingButtonImg,
      title: "Simple Floating Button (Library)",
      url: "http://localhost:8080/simple-floating-button/",
      codeUrl: "https://github.com/nalyn123/simple-react-floating-button",
    },
    {
      img: FloatingHoverImg,
      title: "Simple Floating Hover (Library)",
      url: "http://localhost:8080/simple-floating-hover/",
      codeUrl: "https://github.com/nalyn123/simple-react-floating-hover",
    },
    {
      img: ScrollAnimationImg,
      title: "Simple Scroll Animation (Library)",
      url: "http://localhost:8080/simple-scroll-animation/",
      codeUrl: "https://github.com/nalyn123/simple-react-scroll-animation",
    },
  ];

  return (
    <div data-id="works" ref={ref} className={"works"}>
      <div className="container">
        <div className={"works__box"}>
          <p className={"works__header"}>
            My
            <br />
            Works
          </p>

          <Carousel {...carouselProps} className={"works__slider"}>
            {data?.map((item, i) => (
              <CarouselItem key={i}>
                <img src={item.img} alt={item.title} />

                <div className="buttons">
                  <p>{item.title}</p>
                  <a href={item.url} target="_blank" className="button button1">
                    Visit Website
                  </a>
                  <a
                    href={item.codeUrl}
                    target="_blank"
                    className="button button2"
                  >
                    View Code
                  </a>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
});

export default Works;
