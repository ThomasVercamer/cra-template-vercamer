import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../services/state/state.hooks";

const HomePage = () => {
    const auth = useAppSelector(state => state.auth);

    return (
        <>
            {
                !!auth.currentUser
                    ? <Navigate to={'/test'}/>
                    : <Navigate to={'/sign-in'}/>
            }
        </>
    )
};

export default HomePage;