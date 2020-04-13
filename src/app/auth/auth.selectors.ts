import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';

export const featureAuthSelector = createFeatureSelector<AuthState>('auth');

export const selectLoggedIn = createSelector(
  featureAuthSelector,
  auth => {
    return !!auth.user;
  }
);

// selectors can be rooted on other selectors
export const selectLoggedOut = createSelector(
  selectLoggedIn,
  loggedIn => {
    return !loggedIn;
  }
);
