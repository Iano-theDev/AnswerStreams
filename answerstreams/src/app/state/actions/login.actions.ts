
import { createAction, props } from "@ngrx/store";
import { ILoginToken, LoggedInUser } from "src/app/shared/models/loggedInUser.model";
import { LoginInterface } from "src/app/shared/models/loginInterface.model";


export const login = createAction( '[Login] Login', props<{ user: LoginInterface }>());

export const logout = createAction('[Logout] Logout')

export const loginSuccess = createAction( '[Login] Login Success', props<{ user: LoggedInUser }>());

export const loginError = createAction( '[Login] Login Error', props<{ error: any }>());