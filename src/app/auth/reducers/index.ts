import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {loginAction} from '../auth.actions';
import {AuthActions} from '../action-types';
import {User} from '../model/user.model';

export interface AuthState {
  user: User;
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
  }),
  on(AuthActions.logoutAction, (state, action) => {
    return {
      user: undefined
    };
  })
);

