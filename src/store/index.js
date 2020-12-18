import * as Redux from '@reduxjs/toolkit';
import {reducer as form} from 'redux-form';
import user from './user';
import board from './board';

const reducer = Redux.combineReducers({
  board,
  user,
  form,
});

export default Redux.createStore(reducer);
