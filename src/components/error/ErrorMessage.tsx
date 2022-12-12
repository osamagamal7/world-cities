import { theme } from "../../theme/theme";

type ErrorMessageType = {
    formError: string;
}

export const ErrorMessage: React.FC<ErrorMessageType> = ({ formError }) => {

    return (
        <div style={{ color: theme.danger, padding: "10px 0" }}>{formError}</div>
    )
}
