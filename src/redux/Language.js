import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { changelan } from "./Actions/lanAction";
const { Option } = Select;

function Language(props) {
  return (
    <Select
      className="select"
      onChange={(value) => props.changelan(value)}
      defaultValue="uz"
      style={{ width: 120 }}
    >
      <Option value="uz">UZ</Option>
      <Option value="en">EN</Option>
    </Select>
  );
}
const mapState = (state) => {
  return state;
};

export default connect(mapState, { changelan })(Language);
