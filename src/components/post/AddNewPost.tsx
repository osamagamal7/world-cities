import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addNewPost } from "../../features/posts/actions";
import { CustomForm } from "../form/Form";
import { CustomInput } from "../form/CustomInput";
import { PostType } from "../../models/PostModel";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { CustomButton } from "../Button/Button.style";
import { Link } from "react-router-dom";
import { theme } from "../../theme/theme";
import { FormWrapper } from "./PostTile.style";

const AddNewPost: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [formError, setFormError] = useState<string | null>();

    const [post, setPost] = useState<PostType>({
        content: "",
        id: 1,
        image_url: "",
        lat: "",
        long: "",
        title: "",
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, [e.target.id]: e.target.value });
    };

    const onSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        const isFormComplete: boolean = Object.values(post).every(Boolean)
        if (!isFormComplete) {
            setFormError("All Fields Are Required!")
            return
        }
        await dispatch(addNewPost(post));
        setFormError(null)
        navigate(-1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <Link to="/" style={{ padding: "20px", color: theme.primary, textDecoration: "none" }}>Go Back</Link>
            <FormWrapper>
                <CustomForm onSubmit={onSubmit}>
                    <>

                        <CustomInput
                            id="title"
                            onTextChange={onInputChange}
                            placeholder="City"
                            title="Title *"
                            value={post.title}
                        />
                        <CustomInput
                            id="content"
                            onTextChange={onInputChange}
                            placeholder="Description"
                            title="Description *"
                            value={post.content}
                        />
                        <CustomInput
                            id="image_url"
                            onTextChange={onInputChange}
                            placeholder="Image Url"
                            title="Image *"
                            value={post.image_url}
                        />
                        <CustomInput
                            id="lat"
                            onTextChange={onInputChange}
                            placeholder="Latitude"
                            title="Latitude *"
                            value={post.lat}
                        />
                        <CustomInput
                            id="long"
                            onTextChange={onInputChange}
                            placeholder="Longitude"
                            title="Longitude *"
                            value={post.long}
                        />
                        <br />
                        <CustomButton >
                            Submit
                        </CustomButton>
                        {formError && <div style={{ color: "red", paddingTop: "10px" }}>{formError}</div>}

                    </>
                </CustomForm>
            </FormWrapper>
        </div>
    );
};

export default AddNewPost;