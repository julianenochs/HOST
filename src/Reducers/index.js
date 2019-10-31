import { combineReducers } from 'redux';
import { addParty } from './addParty';

export const rootReducer = combineReducers({ parties: addParty })