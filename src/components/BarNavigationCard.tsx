import React from "react";
import { Card, CardContent, Box, Typography, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "@fontsource/noto-sans-kr";

interface BarNavigationCardProps {
    onPrevious: () => void;
    onNext: () => void;
}

const BarNavigationCard: React.FC<BarNavigationCardProps> = ({
    onPrevious,
    onNext,
}) => {
    return (
        <Card
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 1,
                borderRadius: "16px",
                fontFamily: "Noto Sans KR",
                boxShadow: "none",
                border: "1px solid #d3d3d3",
                backgroundColor: "#f5f5f5",
                maxWidth: "500px",
                margin: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                }}
                onClick={onPrevious}
            >
                <IconButton>
                    <NavigateBeforeIcon sx={{ color: "#333" }} />
                </IconButton>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "Noto Sans KR",
                        fontSize: "1rem",
                        color: "#333",
                    }}
                >
                    뒤로
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                }}
                onClick={onNext}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "Noto Sans KR",
                        fontSize: "1rem",
                        color: "#333",
                    }}
                >
                    다음
                </Typography>
                <IconButton>
                    <NavigateNextIcon sx={{ color: "#333" }} />
                </IconButton>
            </Box>
        </Card>
    );
};

export default BarNavigationCard;
