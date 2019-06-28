export const cardInfoDisplay = (state = false, action) => {
  switch(action.type) {
    case "CARD_INFO_DISPLAY":
      return action.bool;
    default:
      return state;
  }
}