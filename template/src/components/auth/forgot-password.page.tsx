import {ChangeEvent, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../services/state/state.hooks";
import {PageContainer} from "./auth.styles";
import InputField from "../shared/input-field/input-field.component";
import Button from "../shared/button/button.component";

const ForgotPasswordPage = () => {
    const auth = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!!auth.currentUser) navigate("/test"); // This should become an actual route
    }, [auth, navigate]);

    const [formState, setFormState] = useState({
        mail: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setFormState({
        ...formState,
        [event.target.name]: event.target.value
    });

    const handleSubmit = () => {
        console.log("Resetting password");
    }

    return (
        <PageContainer>
            <h1>Forgot password</h1>
            <form onSubmit={handleSubmit}>
                <p>Enter your email. You will receive a link to reset your password.</p>
                <InputField
                    name="mail"
                    id="mail"
                    type="email"
                    label="Your mail:"
                    onChange={handleChange}
                />

                <Button
                    label="Reset password"
                    onClick={handleSubmit}
                    align="right"
                />
            </form>
        </PageContainer>
    );
}

export default ForgotPasswordPage;