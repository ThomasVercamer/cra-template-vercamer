import {v4 as uuidv4} from 'uuid';
import {IRoute} from "../../types/app.types";

export const routes: IRoute[] = [
    {
        id: uuidv4(),
        element: <p>Hello World</p>,
        label: "Home",
        path: "/", // Please note that due to react-router-dom v6, this route will always be selected!
        order: 1,
        private: false,
        navigation: true,
        published: true
    },
    {
        id: uuidv4(),
        element: <p>Test</p>,
        label: "Test",
        path: "/test",
        order: 2,
        private: false,
        navigation: true,
        published: true
    }
];