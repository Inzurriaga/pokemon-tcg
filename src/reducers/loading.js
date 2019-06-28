export const loading = (state = false, action) => {
  switch(action.type) {
    case "LOADING":
      return action.bool;
    default:
      return state;
  }
}