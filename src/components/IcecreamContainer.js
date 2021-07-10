import React, { useState } from "react";
import { connect } from "react-redux";
import { buyicecream } from "../redux/icecream/IcecreamActions";
function IcecreamContainer({ numberOficecream, buyicecreamhandler }) {
  const [quantity, SetQuantity] = useState(1);
  return (
    <div>
      <h1> Nomber of icecream is - {numberOficecream}</h1>
      <input
        type="text"
        value={quantity}
        onChange={(e) => SetQuantity(e.target.value)}
      />
      <button onClick={() => buyicecreamhandler(quantity)}>Buy icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOficecream: state.icecream.numberOficecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyicecreamhandler: (quantity) => {
      dispatch(buyicecream(quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
