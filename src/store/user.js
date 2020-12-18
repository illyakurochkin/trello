import {createAction, createReducer} from '@reduxjs/toolkit';

const SET_USER = 'set user action';

export const setUserAction = createAction(SET_USER);

export const selectUser = (state) => state.user;

export default createReducer(null, {
  [SET_USER]: (state, {payload}) => payload,
});
