import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addNewPost } from "../../features/posts/actions";
import { CustomForm } from "../form/Form";
import { PostType } from "../../models/PostModel";
import { useAppDispatch } from "../../hooks/useTypedSelector";
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
        const isFormComplete: boolean = Object.values(post).every(Boolean);
        if (!isFormComplete) {
            setFormError("All Fields Are Required!");
            return;
        }
        dispatch(addNewPost(post));
        setFormError(null);
        navigate(-1);
    };

    return (
        <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <Link
                to="/"
                style={{
                    padding: "20px",
                    color: theme.primary,
                    textDecoration: "none",
                }}
            >
                Go Back
            </Link>
            <FormWrapper maxWidth="60%">
                <CustomForm
                    onSubmit={onSubmit}
                    formError={formError}
                    title={post.title}
                    content={post.content}
                    image_url={post.image_url}
                    lat={post.lat}
                    long={post.long}
                    onTextChange={onInputChange}
                />
            </FormWrapper>
        </div>
    );
};

export default AddNewPost;