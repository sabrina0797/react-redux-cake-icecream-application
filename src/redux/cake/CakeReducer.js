import { BUY_CAKE } from "./ActionsTypes";

const initialState = {
  numberOfcake: 10,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      console.log(
        "hello a costumer wants to buy a cake please",
        action.payload.quantity
      );
      return {
        ...state,
        numberOfcake: state.numberOfcake - action.payload.quantity,
      };
    default:
      return state;
  }
};
export default CakeReducer;
