import React, { useState, useEffect } from "react";
import Button from "./Button";
import CardMenu from "./CardMenu";
import Spinner from "./Spinner";
import stile from "./style/cardmenu.module.css";

function SectionMenu() {
  const [loading, setLoading] = useState();
  const [alcoholic, setAlcoholic] = useState();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    setCocktails([]);
    const resolve = () => {
      let url = "";
      if (alcoholic)
        url =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
      if (!alcoholic)
        url =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

      return url;
    };
    const fetchDrinks = async () => {
      console.log(resolve());

      const response = await fetch(resolve());
      const data = await response.json();
      setCocktails(data.drinks);

      setLoading(false);
    };

    fetchDrinks();
  }, [alcoholic]);

  const alcolToggle = () => {
    setAlcoholic(!alcoholic);
  };

  return (
    <div className={stile.box}>
      <Button
        color="#4A5B8C"
        text={alcoholic === true ? "Analcolici" : "Alcolici"}
        onClick={alcolToggle}
      />

      {loading === true ? <Spinner /> : null}

      <section className={stile.section}>
        {cocktails.map((card) => (
          <CardMenu
            key={card.idDrink}
            id={card.idDrink}
            name={card.strDrink}
            src={card.strDrinkThumb}
            alcoholic={alcoholic === true ? "alcolico" : "analcolico"}
          />
        ))}
      </section>
    </div>
  );
}

export default SectionMenu;
