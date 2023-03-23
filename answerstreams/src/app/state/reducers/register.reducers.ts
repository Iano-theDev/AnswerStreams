import { Action, createReducer, on } from "@ngrx/store";
import { loggedInUserInitialState } from "src/app/state/reducers/login.reducers";
import * as registerUserActions from '../actions/register.actions';


export const registerUserReducer = createReducer(
    loggedInUserInitialState,
    on(registerUserActions.register, (state, { user }) => ({
        ...state,
        loading: true,
        error: null
    })
    ),

    on(registerUserActions.registerSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        user: { ...user },
        error: null
    })
    ),

    on(registerUserActions.registerError, (state, { error }) => ({
        ...state,
        loading: false,
        error: { ...error }
    })
    )

);
