import {createAction, createReducer} from '@reduxjs/toolkit';

const SET_BOARD = 'set cards action';
const SET_BOARD_LOADING = 'set cards loading action';

export const setBoardAction = createAction(SET_BOARD);
export const setBoardLoadingAction = createAction(SET_BOARD_LOADING)

export const selectBoard = (state) => state.board.data;
export const selectBoardLoading = (state) => state.board.loading;

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default createReducer(INITIAL_STATE, {
  [SET_BOARD]: (state, {payload}) => ({...state, data: payload}),
  [SET_BOARD_LOADING]: (state, {payload}) => ({...state, loading: payload}),
})
