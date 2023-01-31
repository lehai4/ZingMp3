import React from "react";
import { Carousel } from "react-responsive-carousel";
const SliderCarousel = () => {
  let imageSrc = [
    {
      src: "https://photo-zmp3.zmdcdn.me/banner/2/3/e/c/23ec7d8f7f30f5971febc3d474f24747.jpg",
      content: "Legend 1",
    },
    {
      src: "https://photo-zmp3.zmdcdn.me/banner/2/a/8/d/2a8d0186475844d3576ee4bd27d30c13.jpg",
      content: "Legend 2",
    },
    {
      src: "https://photo-zmp3.zmdcdn.me/banner/1/2/c/9/12c98072d52ce4ff035019f3ff080e7c.jpg",
      content: "Legend 3",
    },
  ];
  return (
    <Carousel
      autoPlay
      infiniteLoop
      centerMode
      showStatus={false}
      showThumbs={false}
      centerSlidePercentage="50"
    >
      {imageSrc.map((img, i) => (
        <div key={i}>
          <img alt="" src={img.src} />
        </div>
      ))}
    </Carousel>
  );
};

export default SliderCarousel;
