import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "@fontsource/noto-sans-kr";

export interface LanguageCardProps {
    level: number;
    exam_result: string;
    exam_name: string;
    language: string;
}

type LevelColorProps = "indigo" | "purple" | "crimson";

const levelToColor = (level: number): LevelColorProps => {
    switch (level) {
        case 1:
            return "indigo";
        case 2:
            return "purple";
        case 3:
            return "crimson";
        default:
            return "indigo";
    }
};

const LanguageCard: React.FC<LanguageCardProps> = ({
    level,
    exam_result,
    exam_name,
    language,
}) => {
    const color = levelToColor(level);

    return (
        <Card
            sx={{
                width: "fit-content",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                border: `2px solid ${color}`,
                color: color,
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Box sx={{ display: "inline-flex", textAlign: "center" }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: color,
                            fontSize: "0.6em",
                            fontWeight: "bold",
                        }}
                    >
                        {language}
                    </Typography>
                </Box>
                <Box sx={{ display: "inline-flex", textAlign: "center" }}>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            color: color,
                            fontSize: "1.4em",
                            transform: "scale(1.0, 1.2)",
                        }}
                    >
                        <strong>
                            {exam_name}: {exam_result}
                        </strong>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LanguageCard;
