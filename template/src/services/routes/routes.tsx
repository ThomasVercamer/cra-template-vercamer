import {v4 as uuidv4} from 'uuid';
import {IRoute} from "../../types/app.types";

// ---------- Pages
import HomePage from "../../components/auth/home.page";
import SignInPage from "../../components/auth/sign-in.page";

export const routes: IRoute[] = [
    {
        id: uuidv4(),
        element: <HomePage />,
        label: "Home",
        path: "/",
        order: 1,
        protected: false,
        navigation: true,
        published: true
    },
    {
        id: uuidv4(),
        element: <SignInPage />,
        label: "Sign in",
        path: "/sign-in",
        protected: false,
        navigation: false,
        published: true
    },
    {
        id: uuidv4(),
        element: <p>Test</p>,
        label: "Test",
        path: "/test",
        order: 2,
        protected: false,
        navigation: true,
        published: true
    }
];