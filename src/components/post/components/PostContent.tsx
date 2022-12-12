import { CustomButton } from "../../Button/Button.style";
import { CustomImage, TextBody, Title } from "../PostTile.style";

type PostContentType = {
    image_url: string;
    title: string;
    content: string;
    lat?: string;
    long?: string;
    postControl?: boolean;
    removePost?: () => void;
    onNavigate?: () => void;
};

export const PostContent: React.FC<PostContentType> = ({
    content,
    image_url,
    title,
    lat,
    long,
    postControl,
    removePost,
    onNavigate,
}) => {
    return (
        <>
            <CustomImage src={image_url} alt="Image" />
            <Title>{title}</Title>
            <TextBody>{content}</TextBody>

            {postControl && (
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <CustomButton onClick={onNavigate}>View</CustomButton>
                    <CustomButton dangerBackground onClick={removePost}>
                        Delete
                    </CustomButton>
                </div>
            )}

            {(lat || long) && (
                <>
                    <TextBody>Latitude: {lat}</TextBody>
                    <TextBody>Longitude: {long}</TextBody>
                </>
            )}
        </>
    );
};
