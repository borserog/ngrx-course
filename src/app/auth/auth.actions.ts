import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';

// this is an action creator with a payload
export const loginAction = createAction(
  '[Login Page] User Login',
  props<{user: User}>()
);

// this is an action creator without a payload
export const logoutAction = createAction(
  '[Top Menu] User Logout'
);
