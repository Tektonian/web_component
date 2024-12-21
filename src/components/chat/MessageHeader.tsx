import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export interface MessageHeaderProps {
    username: string;
    onClickArrow: React.MouseEventHandler;
    onClickUser: React.MouseEventHandler;
}

const MessageHeader: React.FC<MessageHeaderProps> = ({ username, onClickArrow, onClickUser }) => {
    return (
        <AppBar position="static" elevation={0} sx={{ maxWidth: 1080 }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    onClick={onClickArrow}
                    aria-label="navigate back"
                    sx={{
                        padding: 0,
                        color: 'inherit',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <NavigateBeforeIcon />
                </IconButton>
                <Button
                    onClick={onClickUser}
                    sx={{
                        textTransform: 'none',
                        padding: 0,
                        color: 'inherit',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <Typography variant="h6" component="span">
                        {username}
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default MessageHeader;
