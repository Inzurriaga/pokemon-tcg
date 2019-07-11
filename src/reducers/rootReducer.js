import { combineReducers } from "redux";
import { pokemon } from "./pokemon";
import { pokemonCards } from "./pokemonCards";
import { loadingDisplay } from "./loadingDisplay";
import { cardInfoDisplay } from "./cardInfoDisplay";

export const rootReducer = combineReducers({
  pokemon,
  pokemonCards,
  loadingDisplay,
  cardInfoDisplay
})
