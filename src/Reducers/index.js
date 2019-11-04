import { combineReducers } from 'redux';
import { parties } from './parties';
import { cocktailsByName } from './searchCocktailByName';
import { selectParty } from './selectParty';
import { selectCocktail } from "./selectCocktail"
import { togglePartyInput } from './togglePartyInput';

export const rootReducer = combineReducers({
  parties,
  cocktailsByName: cocktailsByName,
  selectParty,
  selectedCocktail: selectCocktail,
  isPartyInputVisible: togglePartyInput,  
})