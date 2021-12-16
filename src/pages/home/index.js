import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tab-option";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/dining-out";
import Nightlife from "../../components/night-life";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Encomendas");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getTabView(activeTab)}
      {/* <Footer /> */}
    </div>
  );
};

const getTabView = (tab) => {
  switch (tab) {
    case "Encomendas":
      return <Delivery />;

    case "Sobre":
      return <DiningOut />;

    case "Contactos":
      return <Nightlife />;

    default:
      return <Delivery />;
  }
};

export default Home;