export const setPokemonCards = (cards) => ({
  type: "SET_POKEMON_CARDS",
  cards
})

export const loading = (bool) => ({
  type: "LOADING",
  bool
})

export const cardInfoDisplay = (bool) => ({
  type: "CARD_INFO_DISPLAY",
  bool
})