import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import img01 from "./img/-1.jpg";
import img0 from "./img/0.jpg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpeg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpeg";
import img11 from "./img/11.jpeg";

const Carousel = () => {
  const images = [
    img01,
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <strong className="declaracao">
        <h2>Leo e Iara</h2>
        <h2>Iara e Leo</h2>
      </strong>
      <h3 className="declaracao">
        <i>
          "o amor é fogo que queima sem arder, e por você eu queimo e me derreto
          inteiro"
        </i>
        <p>
          Você é a luz que ilumina meus dias, a paz que acalma meu coração, a
          força que me faz seguir em frente, a razão do meu viver. Eu te amo,
          Meu Pesseguinho!
        </p>
      </h3>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
