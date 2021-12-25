import React, { useState } from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries, query, filterParam } = props;
  const [searchParam] = useState(["name"]);

  function searchAndFilter(items) {
    // eslint-disable-next-line array-callback-return
    return items?.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.common
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.common
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  }

  function test(items) {
    return searchParam.some((newItem) => newItem);
  }
  console.log(test(countries));
  // console.log(countries.map((one) => console.log(one.name)));

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
