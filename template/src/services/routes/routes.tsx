import {v4 as uuidv4} from 'uuid';
import {IRoute} from "../../types/app.types";
import BasePage from "../../components/shared/base-page/base-page.component";

// ---------- Pages
import HomePage from "../../components/auth/home.page";
import SignInPage from "../../components/auth/sign-in.page";
import SignUpPage from "../../components/auth/sign-up.page";
import ForgotPasswordPage from "../../components/auth/forgot-password.page";

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
        element: <SignUpPage />,
        label: "Sign up",
        path: "/sign-up",
        protected: false,
        navigation: false,
        published: true
    },
    {
        id: uuidv4(),
        element: <ForgotPasswordPage />,
        label: "Forgot password",
        path: "/forgot-password",
        protected: false,
        navigation: false,
        published: true
    },
    {
        id: uuidv4(),
        element: <BasePage><p>Test</p></BasePage>,
        label: "Test",
        path: "/test",
        order: 2,
        protected: false,
        navigation: true,
        published: true
    }
];