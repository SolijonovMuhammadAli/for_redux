import { Button } from "antd";
import { connect } from "react-redux";
import { inc, dec } from "./Actions/countAction";

function Action(props) {
  console.log(props);
  return (
    <div className="button">
      <Button type="danger" onClick={props.dec}>
        {props.lang.lan.dec}
      </Button>
      <Button type="primary" onClick={props.inc}>
        {props.lang.lan.inc}
      </Button>
    </div>
  );
}
const mapState = (state) => {
  return state;
};

export default connect(mapState, { dec, inc })(Action);
