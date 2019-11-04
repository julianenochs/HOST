import { combineReducers } from 'redux';
import { parties } from './parties';
import { cocktailsByName } from './searchCocktailByName';
import { selectCocktail } from './selectCocktail'
import { togglePartyInput } from './togglePartyInput';

export const rootReducer = combineReducers({
  parties: parties,
  cocktailsByName: cocktailsByName,
  selectedCocktail: selectCocktail,
  isPartyInputVisible: togglePartyInput,  
})