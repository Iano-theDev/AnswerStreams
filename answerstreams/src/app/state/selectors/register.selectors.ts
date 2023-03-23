import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoggedInUserState } from "../reducers/login.reducers";



export const registerUserState = createFeatureSelector<LoggedInUserState>('registerUser');


export const selectRegisterUser = createSelector(
    registerUserState,
    (state: LoggedInUserState) => state.user
);

export const selectRegisterUserStateloading = createSelector(
    registerUserState,
    (state: LoggedInUserState) => state.loading
);

export const selectRegisterUserStateError = createSelector(
    registerUserState,
    (state: LoggedInUserState) => state.error
);
