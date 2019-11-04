import { combineReducers } from 'redux';
import { addParty } from './addParty';
import { cocktailsByName } from './searchCocktailByName';
import { selectParty } from './selectParty';
import { initialState } from "./initialState";
import { selectCocktail } from "./selectCocktail"

export const rootReducer = combineReducers({
  parties: addParty,
  cocktailsByName: cocktailsByName,
  selectParty,
  selectedCocktail: selectCocktail,
  isDrinkSelected: "",
}, initialState)