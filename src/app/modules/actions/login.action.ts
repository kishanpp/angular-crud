import {createAction, props} from '@ngrx/store';
// import {Item} from "../model/items.model";

// export const getItems = createAction(
//   '[Item List] Get items');

export const login = createAction(
  '[login page] login',
  props<{ 
    username :String,
    password:String 
  }>()
);

