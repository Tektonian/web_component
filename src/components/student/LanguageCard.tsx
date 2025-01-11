import React from "react";
import {
    Box,
    Paper,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import "@fontsource/noto-sans-kr";

export interface LanguageCardProps {
    level: number;
    exam_name: string;
    language: string;
    image?: string;
}

type LevelColorProps = "indigo" | "purple" | "crimson";

const LanguageCard: React.FC<LanguageCardProps> = ({
    level,
    exam_name,
    language,
    image,
}) => {
    const color = ["indigo", "purple", "crimson"].at(level) ?? "indigo";
    // TODO: need global later
    const langClass = ["중급", "상급", "최상급"].at(level) ?? "중급";

    return (
        <Paper
            elevation={1}
            sx={{
                minWidth: "fit-content",
                maxWidth: "150px",
                border: `2px solid ${color}`,
                color: color,
            }}
        >
            <Card>
                {image && (
                    <CardMedia
                        component="img"
                        height="50px"
                        alt="Test image"
                        image={image}
                    />
                )}
                <CardContent
                    sx={{
                        padding: "2px",
                        paddingBottom: "2px !important",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: color,
                        }}
                    >
                        <strong>{exam_name}</strong>
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: color,
                        }}
                    >
                        {language} : {langClass}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
};

export default LanguageCard;
