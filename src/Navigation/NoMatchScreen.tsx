import { useNavigate } from "react-router-dom";

import { CustomButton } from "../components/Button/Button.style";
import { ContainerContent } from "../components/ContentContainer";
import { theme } from "../theme/theme";

export const NoMatchScreen: React.FC<{}> = () => {
    const navigate = useNavigate();

    return (
        <ContainerContent style={{ textAlign: 'center' }}>
            <>
                <h3 style={{ color: theme.danger }}>No Page Has Been Found!</h3>
                <CustomButton onClick={() => navigate("/")}>Home</CustomButton>
            </>
        </ContainerContent>
    );
};