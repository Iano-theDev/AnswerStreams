import { createReducer, on } from "@ngrx/store";
import { LoggedInUser } from "src/app/shared/models/loggedInUser.model";
import * as loginActions from "src/app/state/actions/login.actions"


export interface LoggedInUserState {
    user: LoggedInUser | null;
    loading: boolean;
    error: any;
}

export const loggedInUserInitialState: LoggedInUserState = {
    user: null,
    loading: false,
    error: null
}

export const loggedInUserReducer = createReducer(
    loggedInUserInitialState,

    on(loginActions.login, state => ({
        ...state,
        loading: true,
        error: null
    })
    ),
    on(loginActions.loginSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        user: { ...user }
    })
    ),

    on(loginActions.loginError, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    })
    )
);