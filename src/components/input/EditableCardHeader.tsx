import React, { useState } from "react";
import { IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SaveAsIcon from "@mui/icons-material/SaveAs";

interface EditableCardHeaderProps {
    disabled?: boolean;
    onClickEditIcon?: React.MouseEventHandler;
    editMode?: boolean;
    onClickCloseIcon?: React.MouseEventHandler;
    onClickSaveIcon?: React.MouseEventHandler;
}

const EditableCardHeader = ({
    disabled = true,
    onClickEditIcon,
    editMode = false,
    onClickCloseIcon,
    onClickSaveIcon,
}: EditableCardHeaderProps) => {
    if (disabled) {
        return <></>;
    }

    if (editMode) {
        return (
            <Box
                display="flex"
                gap={1}
                position="absolute"
                top="10px"
                right="10px"
            >
                <IconButton
                    onClick={onClickCloseIcon}
                    sx={{
                        backgroundColor: "#f5f5f5",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <IconButton
                    onClick={onClickSaveIcon}
                    sx={{
                        backgroundColor: "#f5f5f5",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                    }}
                >
                    <SaveAsIcon />
                </IconButton>
            </Box>
        );
    } else {
        return (
            <>
                <IconButton
                    onClick={onClickEditIcon}
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "#f5f5f5",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                    }}
                >
                    <EditIcon />
                </IconButton>
            </>
        );
    }
};

export default EditableCardHeader;
