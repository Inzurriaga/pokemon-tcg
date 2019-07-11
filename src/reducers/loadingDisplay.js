export const loadingDisplay = (state = false, action) => {
  switch(action.type) {
    case "LOADING":
      return action.bool;
    default:
      return state;
  }
}