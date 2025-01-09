import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import "@fontsource/noto-sans-kr";

export interface AcademicHistoryCardProps {
    degree: string;
    faculty: string;
    school_name: string;
    start_date: string;
    end_date: string;
    status: number;
    logo?: string;
}

const AcademicHistoryCard: React.FC<AcademicHistoryCardProps> = ({
    degree,
    faculty,
    school_name,
    start_date,
    end_date,
    status,
    logo,
}) => (
    <Card
        sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            minWidth: 150,
            maxWidth: 480,
            width: "100%",
            padding: 2,
            boxShadow: 2,
            position: "relative",
        }}
    >
        {logo && (
            <CardMedia
                component="img"
                image={logo}
                alt={`${school_name} logo`}
                sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "4px",
                    objectFit: "cover",
                }}
            />
        )}
        <CardContent
            sx={{
                flex: 1,
            }}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{ color: "#2c3e50", fontSize: "1.5em" }}
            >
                {school_name}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: "#34495e",
                    fontStyle: "Noto Sans KR",
                    fontSize: "1.1em",
                }}
            >
                {degree} in {faculty}
            </Typography>
            <Typography
                variant="body2"
                sx={{ color: "#7f8c8d", fontSize: "0.9em" }}
            >
                {new Date(start_date).toLocaleDateString()} -{" "}
                {end_date ? new Date(end_date).toLocaleDateString() : "Present"}
            </Typography>
        </CardContent>
        <Chip
            // TODO: need global later
            label={["재학중", "졸업", "휴학 또는 자퇴"].at(status) ?? ""}
            sx={{
                position: "absolute",
                top: 1,
                right: 1,
                fontSize: "0.76em",
                fontWeight: "bold",
                backgroundColor: "#ecf0f1",
                color: ["indigo", "green", "tomato"].at(status) ?? "indigo",
            }}
        />
    </Card>
);

export default AcademicHistoryCard;
