export const pokemonCards = ( state = {cards: "Home" }, action ) => {
  switch(action.type) {
    case "SET_POKEMON_CARDS":
      console.log(action.cards)
      return action.cards;
    default:
      return state;
  }
}