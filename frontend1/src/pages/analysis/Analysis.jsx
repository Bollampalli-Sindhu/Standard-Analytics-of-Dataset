import React, { Component } from "react";
import { useParams } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
// import {Scrollbars} from "react-custom-scrollbars"

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
      <Grid container spacing={1}>
        
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
              {this.dataset_name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <p>Dataset Size: {this.state.dataset_size}</p>
            <p>Number of Downloads: {this.state.downloads}</p>
            <p>Number of Citations: {this.state.citations}</p>
            <p>Dataset Description: {this.state.description}</p>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography component="h6" variant="h6">
              {this.state.downloads}
            </Typography>
            <Button variant="contained" onClick={this.handleDownload}>
              Download
            </Button>
          </Grid>
        
      </Grid>
    );
  }
}