import { combineReducers } from 'redux';
import { addParty } from './addParty';
import { cocktailsByName } from './searchCocktailByName';
import { selectParty } from './selectParty';
import { initialState } from "./initialState";
import { selectCocktail } from "./selectCocktail"
import { togglePartyInput } from './togglePartyInput';

export const rootReducer = combineReducers({
  parties: addParty,
  cocktailsByName: cocktailsByName,
  selectParty,
  selectedCocktail: selectCocktail,
  isPartyInputVisible: togglePartyInput,  
}, initialState)