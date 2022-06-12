import {FC, MouseEventHandler} from "react";
import {ButtonContainer, ButtonElement} from "./button.styles";

interface IButton {
    variant?: "primary" | "success" | "info" | "warning" | "highlight" | "subtle";
    outline?: boolean;
    icon?: any;
    autoFocus?: boolean;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    align?: "left" | "center" | "right";
}

const Button: FC<IButton> = ({
    label,
    onClick,
                                 variant= "primary",
    align = "left",
    outline = false,
    type="button",
    disabled,
    autoFocus,
    icon
}) => (
    <ButtonContainer align={align}>
        <ButtonElement
            onClick={onClick}
            type={type}
            disabled={!!disabled}
            autoFocus={!!autoFocus}
            outline={!!outline}
            variant={variant}
        >
            <span>{label}</span>
            <span>{icon}</span>
        </ButtonElement>
    </ButtonContainer>
);


export default Button;