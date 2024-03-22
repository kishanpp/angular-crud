import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { login } from '../actions/login.action';
import { LocalService } from '../local.service';

export interface userState {
    user: null,
    users: [],
    userInfo: String,
    loading: boolean,
    error: Object,
    validUser: boolean
}
export const initialUserState:userState = {
    user: null,
    users: [],
    userInfo: '',
    loading: false,
    error: {},
    validUser: false
  };
//   const localStore: LocalService

export const initialStateReducer = createReducer(
    initialUserState,

  on(login, (state, {username, password}) => ({
    ...state,
    validUser: true
  })),
);

export const selectInitialState = (state:userState) => state;

export const selectState = createSelector(
    selectInitialState,
    (state) => state.validUser
)