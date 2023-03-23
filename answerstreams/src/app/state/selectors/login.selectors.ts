import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoggedInUserState } from "../reducers/login.reducers";


export const selectLoggedInUserState = createFeatureSelector<LoggedInUserState>('loggedInUser');

export const selectLoggedInUser =  createSelector(
    selectLoggedInUserState,
    (state: LoggedInUserState) => state.user
);

export const selectLoggedInUserLoading = createSelector(
    selectLoggedInUserState,
    (state: LoggedInUserState) => state.loading
);

export const selectLoggedInUserError = createSelector(
    selectLoggedInUserState,
    (state: LoggedInUserState) => state.error
);


