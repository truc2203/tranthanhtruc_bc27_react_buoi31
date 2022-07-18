import React, { Component } from "react";
import data from './Data.json'
import "./glass.css";
import SelectGlass from "./SelectGlass";
import Model from "./Model";
export default class Glass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoGlass : {url:'./glassesImage/v1.png'}
    };
  }
  changeGlass = (info) => {
    this.setState({infoGlass : info})
  };

  render() {
    return (
      <div className="container bg-image">
        <div className="header">TRY GLASSES APP ONLINE</div>
        <div className="py-5 d-flex justify-content-center">
          <Model info = {this.state.infoGlass}/>
        </div>
        <SelectGlass info = {data} onSelect={this.changeGlass}/>
      </div>
    );
  }
}
