import {GlobalReset, AppContainer} from "./app.styles";
import {Routes, Route} from "react-router-dom";
import {routes} from "./services/routes/routes";

const App = () => (
    <>
        <GlobalReset/>
        <AppContainer>
            <p>App</p>
            <Routes>
                {routes
                    .filter(route => route.published)
                    .map(route => (
                        <Route key={route.id} path={route.path} element={route.element} />
                    ))
                }
            </Routes>
        </AppContainer>
    </>
);

export default App;