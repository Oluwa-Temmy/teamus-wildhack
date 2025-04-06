import { InputContainer } from "./style";

export function Input({ id, type, placeholder, value, onChange, question }) {
    return (
        <InputContainer>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field"
            />
        </InputContainer>
    );
}