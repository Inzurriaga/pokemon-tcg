import { combineReducers } from "redux";
import { pokemon } from "./pokemon";
import { pokemonCards } from "./pokemonCards";

export const rootReducer = combineReducers({
  pokemon,
  pokemonCards
})
