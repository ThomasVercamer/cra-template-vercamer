import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "styled-components";
import {appTheme} from "./services/theme/app.theme";
import App from "./app.component";
import reportWebVitals from "./services/react/reportWebVitals";

const AppElement = document.getElementById("app") as HTMLElement;
const AppRoot = ReactDOM.createRoot(AppElement);

AppRoot.render(
    <React.StrictMode>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();