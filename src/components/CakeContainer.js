import React, { useState } from "react";
import { connect } from "react-redux";
import { buycake } from "../redux/cake/CakeActions";
function CakeContainer({ numberOfcake, buycakehandler }) {
  const [quantity, SetQuantity] = useState(1);
  return (
    <div>
      <h1> Nomber of cakes is - {numberOfcake}</h1>
      <input
        type="text"
        value={quantity}
        onChange={(e) => SetQuantity(e.target.value)}
      />
      <button onClick={() => buycakehandler(quantity)}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfcake: state.cake.numberOfcake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buycakehandler: (quantity) => {
      dispatch(buycake(quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
