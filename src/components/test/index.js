import React from "react";
import { Item } from "./item";
import { ItemStorage } from "./itemStorage";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const StorePrueba = ({ storage, client, increase, decrease, reset }) => {
  const Add = (item) => {
    increase(item);
  };
  const Quit = (item) => {
    decrease(item);
  };

  return (
    <div className="row">
      <div className="col p-5">
        {storage.map((item, i) => (
          <ItemStorage name={item} Add={Add} key={i} />
        ))}
      </div>

      <div className="col p-5">
        {client.map((item, i) => (
          <Item name={item} i={i} key={i} Add={Add} Quit={Quit} />
        ))}

        <center>
          <button className="btn btn-sm btn-secondary" onClick={reset}>
            Borrar todo
          </button>
        </center>
      </div>
    </div>
  );
};

const mSTP = (state) => ({
  storage: state.storage,
  client: state.client,
});

const mDTP = (dispatch) => ({
  increase: (data) => dispatch({ type: "INCREASE", payload: data }),
  decrease: (data) => dispatch({ type: "DECREASE", payload: data }),
  reset: () => dispatch({ type: "RESET" }),
});

StorePrueba.propTypes = {
  storage: PropTypes.array,
  client: PropTypes.array,
};

export default connect(mSTP, mDTP)(StorePrueba);
