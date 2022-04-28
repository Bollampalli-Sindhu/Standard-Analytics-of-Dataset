import "./featuredInfo.css";
import {Grid} from "@material-ui/core"
import { useNavigate } from "react-router-dom";
// import {Navbar} from "../Navbar/Navbar";
import {Link} from 'react-router-dom';
import React, { Component, useState } from "react";

let items=['Covid Dataset','Credit Card Fraud Detection','	European Soccer Database','Red Wine Quality','Titanic','Medical Cost Personal Dataset',
            'MNIST','MS-COCO','ImageNet','VisualQA','SVHN','CIFAR-10','Fashion-MNIST','IMDB-Reviews','WordNet','Music Archive','Libri Speech','VoxCeleb','IMDB-Wiki',
            'Google Books N-grams','TIMIT'];

export default function FeaturedInfo() {
  const navigate = useNavigate();
  
  let itemList = items.map((item, index) => {
    return (
      <Grid item lg={4} sm={6} xs={12} container spacing={0}>
        <div className="featuredItem">
          <span
            className="featuredTitle"
            key={index}
          >
            <Link className="dataset"
              to={{
                pathname: "/analysis/"+item,
                state: { dataset:{item} },
              }}
            >
            {item}
            </Link>
          </span>
        </div>
      </Grid>
    );
  });
  return (
    <div className="featured">
      <Grid item xs={12} container spacing={5}>
        {itemList}
      </Grid>
    </div>
  );
}
