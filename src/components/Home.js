import React, { Component } from "react";
import Video from "./Video";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <h3>Enesetutvustus</h3>
          <div className="centered">
            <Video />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;