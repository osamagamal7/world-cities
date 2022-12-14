import React from "react";
import { CustomLabel } from "./Form.style";

type CustomInputProps = {
    id: string;
    onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    title: string;
    value: string;
};

export const CustomInput: React.FC<CustomInputProps> = ({
    id,
    onTextChange,
    placeholder,
    title,
    value,
}) => {
    return (
        <>
            <CustomLabel style={{ display: 'block' }}>{title}</CustomLabel>
            <input
                className="custom-input"
                id={id}
                value={value}
                onChange={onTextChange}
                type="text"
                placeholder={placeholder}
            />
        </>
    );
};
