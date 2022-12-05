import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../Button/Button.style";
import { CustomImage, InnerPostTile, GridContainer, TextBody, Title } from "./PostTile.style";

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
        <GridContainer
        >
            <InnerPostTile>
                <ul style={{}}>
                    <li>
                        <CustomImage src={image_url} />
                    </li>
                    <li>
                        <Title>{title}</Title>
                    </li>
                    <li>
                        <TextBody>{content}</TextBody>
                    </li>
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <CustomButton onClick={() => navigate(`post-details/${id}`)}>View</CustomButton>
                    <CustomButton
                        dangerBackground
                        onClick={() => removePost(id)}
                    >
                        Delete
                    </CustomButton>
                </div>
            </InnerPostTile>
        </GridContainer >
    );
};
