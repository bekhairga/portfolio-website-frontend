import React, { useEffect, useState } from "react";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import Menu from "../components/Menu";
import portfolios from "../data/portfolios";
import Button from "../components/Button";

const Portfolio = () => {
  const [menuItem, setMenuItems] = useState([]);
  const [button, setButton] = useState("All");
  const allButtons = [
    "All",
    ...new Set(portfolios.map((item) => item.category)),
  ];
  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
    } else {
      const filteredData = portfolios.filter(
        (item) => item.category === button
      );
      setMenuItems(filteredData);
      console.log(filteredData);
    }
  };

  useEffect(() => {
    filter(button);
    console.log("Cycle");
  }, [button]);

  return (
    <MainLayout>
      <Title title={"Portfolio"} span={"Portfolio"} />
      <InnerLayout>
        <Button filter={setButton} buttons={allButtons} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
};

export default Portfolio;
