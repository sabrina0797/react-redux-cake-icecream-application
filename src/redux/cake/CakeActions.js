import { BUY_CAKE } from "./ActionsTypes";

export const buycake = (quantity) => {
  return {
    type: BUY_CAKE,
    payload: {
      quantity,
    },
  };
};
