import {FC} from "react";
import {Navigate} from "react-router-dom";

interface IProtectedRoute {
    children: any;
}

const ProtectedRoute: FC<IProtectedRoute> = ({children}) => {
    const isAuthorized = false; // Should be replaced with state management and logic
    return isAuthorized ? children : <Navigate to="/sign-in" replace />; // Could also be another page
}

export default ProtectedRoute;