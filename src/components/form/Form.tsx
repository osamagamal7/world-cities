import React, { ReactElement } from 'react'

type FormProps = {
    children: ReactElement;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const CustomForm: React.FC<FormProps> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}
