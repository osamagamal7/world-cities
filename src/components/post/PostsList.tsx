import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { deletePost } from "../../features/posts/actions";
import { PostTypeWithTimestamp } from "../../models/PostModel";
import { PostTile } from "./PostTile";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { ContainerContent } from "../ContentContainer";
import { theme } from "../../theme/theme";
import { CustomButton } from "../Button/Button.style";

export const PostsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { postsData, error } = useAppSelector((state) => state);

    if (error) {
        return (
            <ContainerContent style={{ textAlign: 'center' }}>
                <h2 style={{ color: theme.danger }}>{error}</h2>
            </ContainerContent>
        );
    }

    if (postsData?.length === 0) {
        return (
            <ContainerContent style={{ textAlign: 'center', padding: '10px 0' }}>
                <>
                    <h2>no data to show!</h2>
                    <CustomButton onClick={() => navigate("add-post")}>Add New Entries!</CustomButton>
                </>
            </ContainerContent>
        );
    }
    const removePost = (id: number) => {
        dispatch(deletePost(id));
    };

    return (
        <>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>

                <Link to="add-post" style={{ textDecoration: 'none', color: theme.primary }}>
                    Add New Post!
                </Link>
            </div>
            {React.Children.toArray(
                postsData?.map((post: PostTypeWithTimestamp) => (
                    <>
                        <PostTile
                            content={post.content}
                            image_url={post.image_url}
                            id={post.id}
                            removePost={(id) => removePost(id)}
                            title={post.title}
                        />
                    </>
                ))
            )}
        </>
    );
};
