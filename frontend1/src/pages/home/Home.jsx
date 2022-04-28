import "./home.css";
import React, { Component, useState } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
// import Chart from "../../components/chart/Chart";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
    </div>
  );
}
