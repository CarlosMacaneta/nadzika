import React from "react";
import { restaurants } from "../../data/restaurants";
import ExploreSection from "../common/explore-section";

import Filters from "../common/filter";

import "./delivery.css";
import DeliveryCollections from "./delivery-collection";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filtros",
  },
  {
    id: 2,
    title: "Classificação: 4.0+",
  },
  {
    id: 3,
    title: "Doces",
  },
  {
    id: 4,
    title: "Salgados",
  },
  {
    id: 5,
    title: "Tempo de entrega",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Promoções",
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Encomendas de Doces e Salgados"
      />
    </div>
  );
};

export default Delivery;