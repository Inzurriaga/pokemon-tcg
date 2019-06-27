export const pokemonCards = ( state = [], action ) => {
  switch(action.type) {
    case "SET_POKEMON_CARDS":
      return action.cards;
    default:
      return state;
  }
}