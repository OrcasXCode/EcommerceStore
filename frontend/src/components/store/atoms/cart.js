import { atom, atomFamily, selector, selectorFamily } from "recoil";
import axios from "axios";

// Define Recoil atom\

export const cartAtom = atom({
  key: "cartAtom",
  default: 0,
});

export const cartAtomFamily = atomFamily({
  key: "cartAtom",
  default: selectorFamily({
    key: "cartNumberFamily",
    get:
      () =>
      async ({ get }) => {
        await new Promise((res) => setTimeout(res, 1));
        const res = await axios.get(
          `http://localhost:3000/api/v1/cart/getAllCartItems`
        );
        console.log(res.data);
        return res.data;
      },
  }),
});
