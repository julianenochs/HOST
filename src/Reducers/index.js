import { combineReducers } from 'redux';
import { addParty } from './addParty';
import { cocktailsByName } from './searchCocktailByName';
export const rootReducer = combineReducers({ parties: addParty, cocktailsByName: cocktailsByName })