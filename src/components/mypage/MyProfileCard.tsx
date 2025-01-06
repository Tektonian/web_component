import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Avatar,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ReviewsIcon from "@mui/icons-material/Reviews";
import HistoryIcon from "@mui/icons-material/History";
import "@fontsource/noto-sans-kr";

export interface MyProfileCardProps {
    name: string;
    image?: string;
    location?: string;
}

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    if (name.split(" ").length < 2) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(" ")[0][0]}`,
        };
    }
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
}

const MyProfileCard: React.FC<MyProfileCardProps> = ({
    name,
    image,
    location,
}) => {
    return (
        <Card
            sx={{
                maxWidth: {
                    xs: "100%",
                    sm: "300px",
                },
            }}
        >
            <CardMedia
                image={`image/profile_background.png`}
                sx={{
                    height: "140px",
                    objectFit: "cover",
                    backgroundPosition: "bottom",
                }}
            />
            <CardContent>
                {image === undefined ? (
                    <Avatar {...stringAvatar(name)} />
                ) : (
                    <Avatar src={image} />
                )}
                <Typography component="div" variant="h5" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {location}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MyProfileCard;
