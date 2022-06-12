import {FC, ChangeEvent} from "react";
import {FieldContainer, FieldLabel, FieldElement} from "./input-field.styles";

interface IInputField {
    name: string;
    id?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => any;
    label?: string;
    type?: "text" | "password" | "email" | "search";
}

const InputField: FC<IInputField> = ({name, id, onChange, label, type="text"}) => (
    <FieldContainer>
        {label && <FieldLabel htmlFor={id || name}>{label}</FieldLabel>}
        <FieldElement
            name={name}
            id={id || name}
            onChange={onChange}
            type={type}
        />
    </FieldContainer>
);

export default InputField;