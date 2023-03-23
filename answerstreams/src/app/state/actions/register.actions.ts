
import { createAction, props } from "@ngrx/store";
import { RegisterUser } from "src/app/shared/models/registerUser.model";


export const register = createAction(
    '[Register] Register',
    props<{ user: RegisterUser }>()
);

export const registerSuccess = createAction(
    '[Register] Register Success',
    props<{ user: any }>()
);

export const registerError = createAction(
    '[Register] Register Error',
    props<{ error: any }>()
);