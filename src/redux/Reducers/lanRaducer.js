import { english } from "./../language/en";
import { uzbek } from "./../language/uz";

const lang = {
  lan: uzbek,
};
export const lanReducer = (state = lang, action) => {
  switch (action.type) {
    case "uz":
      return { lan: uzbek };
    case "en":
      return { lan: english };
    default:
      return state;
  }
};
