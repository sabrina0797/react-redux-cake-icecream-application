import { BUY_ICECREAM } from "./ActionsTypes";

export const buyicecream = (quantity) => {
  return {
    type: BUY_ICECREAM,
    payload: {
      quantity,
    },
  };
};
