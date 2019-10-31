import { combineReducers } from 'redux';
import { addParty } from './addParty';
import { cocktailsByName } from './searchCocktailByName';
import { selectParty } from './selectParty';

export const rootReducer = combineReducers({ parties: addParty, cocktailsByName: cocktailsByName, currentParty: selectParty })