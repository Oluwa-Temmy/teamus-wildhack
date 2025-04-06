import { InputContainer } from "./style";

export function Input({ id, type, placeholder, value, onChange, answer, name }) {
    if (type === "radio") {
        return (
            <InputContainer>
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="input-field"
                    name={name}
                />
                <label htmlFor={id}>{answer}</label>
            </InputContainer>
        );
    }
    else if (type === "checkbox") {
        return (
            <InputContainer>
                <label htmlFor={id}>
                    <input
                        id={id}
                        type={type}
                        value={value}
                        onChange={onChange}
                        className="input-field"
                        name={name}
                    />
                    {answer}
                </label>
            </InputContainer>
        );
    }
    return (
        
        <InputContainer>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field"
                name={name}
            />
        </InputContainer>
    );
}