import React from "react";
import "./style.css";
const FriendCard = props => (
  <div onClick={() => props.setClicked(props.id)} className="card col-md-3">
    <div className="img-container">
      <img alt={props.image} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
