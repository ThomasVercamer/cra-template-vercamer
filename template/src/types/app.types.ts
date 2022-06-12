import {store} from "../services/state/store";

/* -----------------------------------------------------------------------------------
 * GENERAL
 * The types below can be re-used throughout the entire application.
 * ----------------------------------------------------------------------------------- */
export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    last_sign_in: string;
};

/* -----------------------------------------------------------------------------------
 * SERVICES
 * The types below all belong to one of the services.
 * ----------------------------------------------------------------------------------- */

// ---------- State types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;