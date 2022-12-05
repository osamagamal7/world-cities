import React, { ReactElement } from "react";

export const ContainerContent: React.FC<{
    children: ReactElement, style?: React.CSSProperties;
}> = ({
    children,
    style
}): React.ReactElement => {
        return <div style={style}>{children}</div>;
    };
