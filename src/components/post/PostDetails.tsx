import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CustomForm } from "../form/Form";
import { PostTypeWithTimestamp } from "../../models/PostModel";
import { updatePost } from "../../features/posts/actions";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { Map } from "../Map";
import { FormWrapper, InnerPostTile, PosttEditContainer } from "./PostTile.style";
import { PostContent } from "./components/PostContent";

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
            dispatch(updatePost(post));
            setFormError(null);
            navigate(-1);
        },
        [dispatch, navigate, post]
    );

    return (
        <>
            <PosttEditContainer>
                <InnerPostTile maxWidth="45%">
                    <PostContent title={post.title} image_url={post.image_url} content={post.content} lat={post.lat} long={post.long} />
                </InnerPostTile>
                <FormWrapper
                    maxWidth="45%"
                >
                    <CustomForm onSubmit={onSubmit} formError={formError} title={post.title} content={post.content} image_url={post.image_url} lat={post.lat} long={post.long} onTextChange={onTextChange} />
                </FormWrapper>
            </PosttEditContainer>
            <div style={{ display: "flex", justifyContent: "center", margin: '20px' }}>
                <Map latitude={post.lat} longitude={post.long} city={post.title} />
            </div>
        </>
    );
};

export default PostDetails;
