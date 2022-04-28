import React, { Component, useState } from "react";

// import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./analysis.css";

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

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
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
    };
    this.dataset_name = this.props.match.params.datasetName;
    this.get_metadata();
    this.get_download_track();
    this.handleDownload = this.handleDownload.bind(this);
    this.state = {
      downloads: 0,
    };
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

  get_metadata() {
    fetch("/dataset/get_metadata" + "?dataset=" + this.dataset_name)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          model_name: data.model_name,
          dataset_size: data.dataset_size,
          citations: data.citations,
          downloads: data.downloads,
          description: data.description,
        });
      })
      .catch((err) => console.log("Error in fetching"));
  }

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
        </div>
      </>
    );
  }
}