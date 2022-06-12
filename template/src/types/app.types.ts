import {store} from "../services/state/store";
import {ReactNode} from "react";

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

// ---------- Route types
export interface IRoute {
    id: string;
    element: ReactNode;
    path: string;
    label: string;
    icon?: ReactNode;
    order?: number; // A lower number means a higher priority, default = 100
    protected: boolean; // Should this route be protected by some authentication?
    navigation: boolean; // Should the label (and icon) appear in the navigation?
    published: boolean; // When working with "modules" you can enable them here.
}