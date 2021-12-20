import React from "react";
import { DetailCard } from "../../components";
import "./detailView.css";

export default function DetailView(props) {
  const { theme, countries } = props;
  return (
    <main className={`detail-view main ${theme}`}>
      <DetailCard countries={countries} theme={theme} />
    </main>
  );
}
