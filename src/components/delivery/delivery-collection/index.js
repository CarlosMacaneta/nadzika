import React from "react";
import "./delivery-collections.css";
import DeliveryItem from "./deliveryItem";
import Carousel from "react-grid-carousel";
import Slider from "react-slick";
import PrevArrow from "../../common/carousel/PrevArrow";
import NextArrow from "../../common/carousel/NextArrow";

const deliveryItems = [
  {
    id: 1,
    title: "Bolo de chocolate com uvas",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
  },
  {
    id: 2,
    title: "Salgados",
    cover:
      "http://localhost:3000/assets/img/salgados.jpg",
  },
  {
    id: 3,
    title: "Biscoitos Personalizados",
    cover:
      "http://localhost:3000/assets/img/biscoitos-personalizados.jpg",
  },
  {
    id: 4,
    title: "Cupcakes",
    cover:
      "http://localhost:3000/assets/img/cupcakes.jpg",
  },
  {
    id: 5,
    title: "Biscoitos de Côco",
    cover:
      "http://localhost:3000/assets/img/biscoitos-coco.jpg",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Coma o que te faz sentir feliz</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;