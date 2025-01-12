import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export interface ChatRoomHeaderProps {
    title: string;
    menuItemList: React.ReactNode[];
    onBackClick: React.MouseEventHandler;
}

const ChatRoomHeader: React.FC<ChatRoomHeaderProps> = ({
    title,
    menuItemList,
    onBackClick,
}) => {
    return (
        <Box flexGrow={1}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="back"
                        onClick={onBackClick}
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        <NavigateBeforeIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        flex={1}
                        noWrap={true}
                        style={{ fontWeight: "bold" }}
                    >
                        {title}
                    </Typography>
                    {menuItemList.map((item, idx) => (
                        <React.Fragment key={idx}>{item}</React.Fragment>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default ChatRoomHeader;
