import { BUY_ICECREAM } from "./ActionsTypes";

const initialState = {
  numberOficecream: 10,
};

const IcecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      console.log(
        "hello a costumer wants to buy a iceream please",
        action.payload.quantity
      );
      return {
        ...state,
        numberOficecream: state.numberOficecream - action.payload.quantity,
      };
    default:
      return state;
  }
};
export default IcecreamReducer;
