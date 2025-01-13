import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import {
    Send as SendIcon,
    AttachFile as AttachIcon,
} from "@mui/icons-material";

interface InputBoxProps {
    value: string;
    placeholder?: string;
    onAttachClick: React.MouseEventHandler<HTMLButtonElement>;
    onSend: React.MouseEventHandler<HTMLButtonElement>;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    disabled: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
    value,
    placeholder,
    onAttachClick,
    onSend,
    onChange,
    disabled,
}) => {
    const handleKeyPress = (evt: React.KeyboardEvent<HTMLDivElement>) => {
        if (evt.key === "Enter" && !evt.shiftKey && !disabled) {
            evt.preventDefault();
            onSend(evt as unknown as React.MouseEvent<HTMLButtonElement>);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
                padding: 1,
                borderTop: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                maxWidth: 1080,
            }}
        >
            <IconButton onClick={onAttachClick} disabled={disabled}>
                <AttachIcon fontSize="small" />
            </IconButton>

            <TextField
                multiline
                minRows={1}
                maxRows={3}
                fullWidth
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={handleKeyPress}
                disabled={disabled}
                sx={{
                    flexGrow: 1,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-root": {
                        padding: 1,
                    },
                }}
            />

            <IconButton onClick={onSend} disabled={disabled}>
                <SendIcon fontSize="small" />
            </IconButton>
        </Box>
    );
};

export default InputBox;
