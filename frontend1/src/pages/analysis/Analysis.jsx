import React, { Component } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import "./analysis.css";
// import {Scrollbars} from "react-custom-scrollbars"

const types = ["MetaData","Analysis"]

const Button = styled.button`
  background-color: "#333333";
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: "black";
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

export function Dummy(props){
  const key = props.keys;
  const value = props.value;
  const items = [];
  let index = 0;
  for (let [key_, value] of Object.entries(value)){
    items.push( <li key={index}>{key_}:{value}</li>)
    index += 1
  }
  return(
    <>
    <h3>{key}</h3>
    {items}
    </>
  )
}

export function Sample(props){
  const data = (props.data);
  const items = [];
  // console.log("----Sample----");
  // console.log(props.data);
  // const k = Object.keys(props.data);
  // const val = Object.values(props.data);
  let index = 0
  for (let [key_, value] of Object.entries(data)){
    items.push( <Dummy key={index} keys={key_} value={value}/>)
    index += 1
  }
  console.log("items")
  console.log(items)
  // console.log("---Columns---");
  // console.log(val);
  // console.log("---Values---");
  // console.log(val);
  // const col = k;

  // let itemList = data.map((item, index) => {
  //   return (
  //     <div key={item}>
  //       {index}
  //     </div>
  //   );
  // });



  return (
    <>
      <ul>{items}</ul>
      {/* {itemList} */}
    </>
  );
}

export default class AnalysisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model_name: "None",
      dataset_size: 0,
      citations: 0,
      downloads: 0,
      description: "None",
      analytics_json:{},
      dummy_obj:"None",
    };
    this.dataset_name = this.props.match.params.datasetName;
    this.model_name = "None"
    // this.get_metadata = this.get_metadata1.bind(this);
    this.get_metadata();
    this.get_download_track();
    this.handleDownload = this.handleDownload.bind(this);
    
    // this.state = {
    //   downloads: 0,
    // };
  }

  handleDownload(){
    fetch("/dataset/analysis", {
      method: 'post',
      headers:{ 
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        model_name: this.state.model_name,
        downloads: (this.state.downloads + 1),
        citations: this.state.citations,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          downloads: prevState.downloads + 1,
        }));
      });
  }
  
  async get_metadata() {
    const response = await fetch("/dataset/get_metadata" + "?dataset=" + this.dataset_name)
    const data = await response.json();
    this.model_name = data.model_name;
    const response1 = await fetch("/dataset/get_data?model=" + this.model_name);
    const data1 = await response1.json();
    this.setState({
      analytics_json: data1, 
      model_name: data.model_name,
      dataset_size: data.dataset_size,
      citations: data.citations,
      downloads: data.downloads,
      description: data.description,
      
    });
    console.log(data1)
    console.log(this.state.analytics_json)
    // fetch("/dataset/get_metadata" + "?dataset=" + this.dataset_name)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(this)
    //     console.log('Response body of outer "url":');
    //     this.model_name = data.model_name;
    //     const response1 = await fetch("/dataset/get_data?model=" + this.model_name);
    //     const res_json = await response1.json();
    //     console.log(res_json)
    //     console.log(this)
        // fetch("/dataset/get_data?model=" + this.model_name)
        // .then(function (response1) {
        //   response1.json().then(function (data2) {
        //     console.log('Response body of inner "anotherUrl":');
        //     console.log(JSON.stringify(data) + '\n\n');
        //     console.log(JSON.stringify(data2) + '\n\n');
        //     console.log(this)
        //     // this.setState({
        //     //   analytics_json: data2, 
        //     //   model_name: data.model_name,
        //     //   dataset_size: data.dataset_size,
        //     //   citations: data.citations,
        //     //   downloads: data.downloads,
        //     //   description: data.description,
              
        //     // });
        //   }.bind(this));
        // }).catch(function () {
        //   console.log('Booo');
        // });
    
      // })
      // .catch((err) => console.log("Error in fetching metadata"));
  }

  // isEmpty(obj) {
  //   return Object.keys(obj).length === 0;
  // }

  // get_analytics() {
  //   if(this.isEmpty(this.state.analytics_json)){
  //     fetch("/dataset/get_data?model=" + this.model_name)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("first")
  //       console.log(data)
  //       console.log("below")
  //       this.setState({
  //         analytics_json: data.sample_id,
  //       });
  //       console.log("second")
  //       console.log(this.state.analytics_json)
  //       })
  //     .catch((err) => console.log("Error in fetching analytics"));
  //   }
    
  // }

  // async get_analytics1() {
  //   try{
  //     let response = await fetch("/dataset/get_data?model=" + this.model_name);
  //     console.log("line 130")
  //     console.log(response)
  //     let data = response.json()
      
  //     console.log("line 132")
  //   // console.log(data)
  //     console.log("third_below")
  //     // .then((response) => response.json())
  //     // .then((data) => {
  //     this.setState({
  //       analytics_json : 20
  //     });  
  //     this.data = data  
  //     console.log("second")
  //       // console.log(this.state.analytics_json)
  //       // })
  //     // .catch((err) => console.log("Error in fetching analytics"));
  //   }
  //   catch(error){
  //     console.log("error in fetching analytics")
  //   }
  // }

  get_download_track() {
    fetch("/dataset/track_download" + "?dataset=" + this.dataset_name)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const x = Object.keys(data)
        const y = Object.values(data)
        console.log(typeof(x))
      })
      .catch((err) => console.log("Error in fetching"));
  }

  render() {
    return (
      <>
        <div className="grid1">
          <Grid item xs={12} container spacing={5}>
            <Grid item lg={6} sm={12} xs={12} container spacing={0} className="dataset">
              <h1>{this.dataset_name}</h1>
            </Grid>
            <Grid item lg={6} sm={12} xs={12} container spacing={0} className="download">
              <Button
                className="button"
                variant="contained"
                onClick={this.handleDownload}
              >
              <h3>Download ({this.state.dataset_size} KB) </h3>
              </Button>
            </Grid> 
            <Grid item lg={6} sm={12} xs={12} container spacing={0} className="dataset">
              <p>{this.state.description}</p>
            </Grid>
          </Grid> 
          <hr className="horizontal_line_main"></hr>
          <div>
            <h2>About dataset</h2>
            <p>{this.state.description}</p>
          </div>
          <hr className="horizontal_line"></hr>
          <div>
            <h2>Number of downloads</h2>
            <p>{this.state.downloads}</p>
          </div>
          <hr className="horizontal_line"></hr>
          <div>
            <h2>Number of citations</h2>
            <p>{this.state.citations}</p>
          </div>
          <hr className="horizontal_line"></hr>
          <div>
            <h2>Analytics of dataset</h2>
          </div>
          <hr className="horizontal_line"></hr>
          {/* <p>test1</p> */}
          <Sample data={this.state.analytics_json}/>
        </div>
      </>
    );
  }
}