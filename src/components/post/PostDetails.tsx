import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CustomInput } from "../form/CustomInput";
import { CustomForm } from "../form/Form";
import { PostTypeWithTimestamp } from "../../models/PostModel";
import { updatePost } from "../../features/posts/actions";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { Map } from "../Map";
import { CustomImage, FormWrapper, PostDetailsWrapper, PosttEditContainer, TextBody, Title } from "./PostTile.style";
import { CustomButton } from "../Button/Button.style";
import { theme } from "../../theme/theme";

const PostDetails: React.FC<{}> = () => {
    const params = useParams();
    const navigate = useNavigate();

    const { postsData } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const [formError, setFormError] = useState<string | null>();
    const [post, setPost] = useState<PostTypeWithTimestamp>({
        content: "",
        id: 1,
        image_url: "",
        lat: "",
        long: "",
        title: "",
    });

    useEffect(() => {
        if (params.id) {
            const currentId = Number(params.id);
            const currentPost: PostTypeWithTimestamp | undefined = postsData?.find(
                (postItem: PostTypeWithTimestamp) => postItem.id === currentId
            );
            if (currentPost) {
                setPost(currentPost);
            }
        }
    }, [postsData, params.id]);

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, [e.target.id]: e.target.value });
    };

    const onSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const isFormComplete: boolean = Object.values(post).every(Boolean);
            if (!isFormComplete) {
                setFormError("All Fields Are Required!");
                return;
            }
            await dispatch(updatePost(post));
            setFormError(null);
            navigate(-1);
        },
        [dispatch, navigate, post]
    );

    return (
        <>
            <PosttEditContainer>
                <PostDetailsWrapper
                >
                    <CustomImage src={post.image_url} alt="Image" />
                    <Title>{post.title}</Title>
                    <TextBody>{post.content}</TextBody>
                    <TextBody>Latitude: {post.lat}</TextBody>
                    <TextBody>Longitude: {post.long}</TextBody>
                </PostDetailsWrapper>
                <FormWrapper
                >
                    <CustomForm onSubmit={onSubmit}>
                        <>
                            <CustomInput
                                id="title"
                                onTextChange={onTextChange}
                                placeholder="City"
                                title="Title*"
                                value={post.title}
                            />
                            <CustomInput
                                id="content"
                                onTextChange={onTextChange}
                                placeholder="Description"
                                title="Description *"
                                value={post.content}
                            />
                            <CustomInput
                                id="image_url"
                                onTextChange={onTextChange}
                                placeholder="Image Url"
                                title="Image *"
                                value={post.image_url}
                            />
                            <CustomInput
                                id="lat"
                                onTextChange={onTextChange}
                                placeholder="Latitude"
                                title="Latitude *"
                                value={post.lat}
                            />
                            <CustomInput
                                id="long"
                                onTextChange={onTextChange}
                                placeholder="Longitude"
                                title="Longitude *"
                                value={post.long}
                            />
                            <br />
                            <CustomButton style={{ width: "40%" }}>
                                Submit
                            </CustomButton>
                            {formError && <div style={{ color: theme.danger, paddingTop: "10px" }}>{formError}</div>}
                        </>
                    </CustomForm>
                </FormWrapper>
            </PosttEditContainer>
            <div style={{ display: "flex", justifyContent: "center", margin: '20px' }}>
                <br />
                <Map latitude={post.lat} longitude={post.long} city={post.title} />
            </div>
        </>
    );
};

export default PostDetails;
