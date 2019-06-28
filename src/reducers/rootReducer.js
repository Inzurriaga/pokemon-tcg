import { combineReducers } from "redux";
import { pokemon } from "./pokemon";
import { pokemonCards } from "./pokemonCards";
import { loading } from "./loading";
import { cardInfoDisplay } from "./cardInfoDisplay";

export const rootReducer = combineReducers({
  pokemon,
  pokemonCards,
  loading,
  cardInfoDisplay
})
