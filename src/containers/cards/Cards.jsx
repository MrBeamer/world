import React, { useState, useContext } from "react";
import { Card } from "../../components";
import { FilterContext } from "../../helper/FilterContext";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries } = props;
  const [searchParam] = useState(["name"]);

  const context = useContext(FilterContext);

  function searchAndFilter(items) {
    // eslint-disable-next-line array-callback-return
    return items?.filter((item) => {
      if (item.region === context.filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.common
              .toString()
              .toLowerCase()
              .indexOf(context.query.toLowerCase()) > -1
          );
        });
      } else if (context.filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.common
              .toString()
              .toLowerCase()
              .indexOf(context.query.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    countries && (
      <div className="cards">
        {searchAndFilter(countries).map((country, index) => {
          return <Card key={index} theme={theme} country={country}></Card>;
        })}
      </div>
    )
  );
}
