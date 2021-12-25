import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries, query, filterParam } = props;
  const [searchParam] = useState(["capital", "name"]);

  /// new search test
  function search(list) {
    return list?.filter((country) => {
      return searchParam.some((newCountry) => {
        if (newCountry !== "name") {
          return (
            country[newCountry]
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(query.toLowerCase()) > -1
          );
        } else {
          return (
            country[newCountry].common
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(query.toLowerCase()) > -1
          );
        }
      });
    });
  }

  function searchAndFilter(items) {
    return items?.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              ?.toString()
              ?.toLowerCase()
              ?.indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  }

  // console.log(countries.all.map((one) => console.log(one.name.common)));
  // console.log(
  //   countries.all.map((one) => console.log(indexOf(one.name.common)))
  // );

  console.log(search(countries));

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
