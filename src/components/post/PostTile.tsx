import React from "react";
import { useNavigate } from "react-router-dom";
import { PostContent } from "./components/PostContent";
import { InnerPostTile, PostContainer } from "./PostTile.style";

type MainPostProps = {
    content: string;
    image_url: string;
    id: number;
    removePost: (id: number) => void;
    title: string;
};

export const PostTile: React.FC<MainPostProps> = ({
    content,
    image_url,
    id,
    removePost,
    title
}) => {
    const navigate = useNavigate();

    return (
        <PostContainer>
            <InnerPostTile maxWidth="700px">
                <PostContent
                    title={title}
                    content={content}
                    image_url={image_url}
                    postControl
                    removePost={() => removePost(id)}
                    onNavigate={() => navigate(`post-details/${id}`)}
                />
            </InnerPostTile>
        </PostContainer>
    );
};
