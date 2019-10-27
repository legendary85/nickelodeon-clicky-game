import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

var style = {
  backgroundColor: "#f57c15",
  // borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "70px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

class Footer extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
        <div>
          <a
            href={"https://github.com/legendary85/nickelodeon-clicky-game"}
            target={"blank"}
          >
            <i className="fa fa-github" style={{ fontSize: 24 }}></i>
          </a>
          <p>Developed By: Kourtney McCullough © 2019</p>
          <br />
        </div>
      </div>
    );
  }
}

export default Footer;
