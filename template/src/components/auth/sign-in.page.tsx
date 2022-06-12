import {ChangeEvent, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../services/state/state.hooks";
import {setUser} from "../../services/state/auth/auth.slice";
import {IUser} from "../../types/app.types";
import {v4 as uuidv4} from 'uuid';
import {PageContainer, ErrorContainer} from "./auth.styles";
import InputField from "../shared/input-field/input-field.component";
import Button from "../shared/button/button.component";

const SignInPage = () => {
    const auth = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!!auth.currentUser) navigate("/test"); // This should become an actual route
    }, [auth, navigate]);

    const [formState, setFormState] = useState({
        mail: "",
        password: ""
    });

    const [errors, setErrors]: [errors: any[], setErrors: Function] = useState([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setFormState({
        ...formState,
        [event.target.name]: event.target.value
    });

    const handleSubmit = () => {
        // Validate
        // Authenticate
        if (formState.mail === "test@test.be" && formState.password === "test") {
            const userData: IUser = {
                id: uuidv4(),
                first_name: "Thomas",
                last_name: "Vercamer",
                email: "test@test.be",
                last_sign_in: new Date().toString()
            };
            dispatch(setUser(userData));
        } else {
            setErrors(["No match between user and password."]);
        }
    }

    return (
        <PageContainer>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <InputField
                    name="mail"
                    id="mail"
                    type="email"
                    label="Your mail:"
                    onChange={handleChange}
                />

                <InputField
                    name="password"
                    id="password"
                    type="password"
                    label="Your password:"
                    onChange={handleChange}
                />

                {errors.length > 0 && (
                    <ErrorContainer>
                        {errors.map((error, index) => <p key={index}>{error}</p>)}
                    </ErrorContainer>
                )}

                <Button
                    label="Sign in"
                    onClick={handleSubmit}
                    align="right"
                />
            </form>
        </PageContainer>
    );
}

export default SignInPage;