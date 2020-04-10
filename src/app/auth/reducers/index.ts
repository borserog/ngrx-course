import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {loginAction} from '../auth.actions';
import {AuthActions} from '../action-types';

export interface AuthState {

}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginAction, (state, action) => {
    // extracts the payload of the action
    return {
      user: action.user
    };
  })
);

