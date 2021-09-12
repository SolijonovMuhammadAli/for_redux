import React from "react";
import { connect } from "react-redux";

function Count(props) {
  return (
    <div className="count">
      <h1>{props.app.count}</h1>
    </div>
  );
}

const mapState = (state) => {
  return state;
};

export default connect(mapState)(Count);
