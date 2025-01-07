import React, { createContext, useContext } from "react";
import { Card, CardMedia } from "@mui/material";
import EditableCardHeader from "./EditableCardHeader";

import type { CardContentProps } from "@mui/material";

const EditModeContext = createContext<{ editMode: boolean }>({
    editMode: false,
});

interface ModeProps {
    children: React.ReactElement<CardContentProps>;
}

const EditMode = (props: ModeProps) => {
    const { editMode } = useContext(EditModeContext);

    return editMode === false ? <></> : props.children;
};

const NormalMode = (props: ModeProps) => {
    const { editMode } = useContext(EditModeContext);
    return editMode === true ? <></> : props.children;
};

interface EditableCardProps {
    cardImage?: string;
    editMode?: boolean;
    header: ReturnType<typeof EditableCardHeader>;
    children: React.ReactNode;
}

const EditableCard = ({
    cardImage,
    editMode = false,
    header,
    children,
}: EditableCardProps) => {
    return (
        <Card
            sx={{
                maxWidth: "1080px",
                margin: "auto",
                borderRadius: "16px",
                fontFamily: "Noto Sans KR",
                color: "rgba(0, 0, 0, 0.7)",
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "#e0e0e0" },
                position: "relative",
            }}
        >
            <CardMedia
                component="img"
                image={cardImage}
                alt={`Editable card`}
                sx={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    margin: "16px",
                }}
            />
            {header}
            <EditModeContext.Provider value={{ editMode: editMode }}>
                {children}
            </EditModeContext.Provider>
        </Card>
    );
};

export { NormalMode, EditMode, EditableCard };
