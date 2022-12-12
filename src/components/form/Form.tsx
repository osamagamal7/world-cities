import React from 'react'
import { CustomButton } from '../Button/Button.style';
import { ErrorMessage } from '../error/ErrorMessage';
import { CustomInput } from './CustomInput';

type FormProps = {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    content: string;
    image_url: string;
    lat: string;
    long: string;
    formError: string | null | undefined;
}

export const CustomForm: React.FC<FormProps> = ({ onSubmit, onTextChange, title, content, image_url, lat, long, formError }) => {
    return (
        <form onSubmit={onSubmit}>
            <CustomInput
                id="title"
                onTextChange={onTextChange}
                placeholder="City"
                title="Title*"
                value={title}
            />
            <CustomInput
                id="content"
                onTextChange={onTextChange}
                placeholder="Description"
                title="Description *"
                value={content}
            />
            <CustomInput
                id="image_url"
                onTextChange={onTextChange}
                placeholder="Image Url"
                title="Image *"
                value={image_url}
            />
            <CustomInput
                id="lat"
                onTextChange={onTextChange}
                placeholder="Latitude"
                title="Latitude *"
                value={lat}
            />
            <CustomInput
                id="long"
                onTextChange={onTextChange}
                placeholder="Longitude"
                title="Longitude *"
                value={long}
            />
            <br />
            <CustomButton style={{ width: "80%", borderRadius: "0" }} >
                Submit
            </CustomButton>
            {formError && <ErrorMessage formError={formError} />}
        </form>
    )
}
