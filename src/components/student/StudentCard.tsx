import React from "react";
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Box,
    IconButton,
    Divider,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface langWithLevelProps {
    language: string;
    level: number;
}

export interface StudentCardProps {
    student_id: number;
    name: string;
    nationality: string;
    school: string;
    major: string;
    languageWithLevel: langWithLevelProps[];
    imageUrl: string;
    isBookmarked: boolean;
    onBookmarkClick: (newState: boolean) => void;
}

const renderLanguages = (langWithLevel: langWithLevelProps[]) => {
    const sortedLanguages = langWithLevel
        .sort((a, b) => b.level - a.level)
        .slice(0, 3);
    const languageSlots = Array.from(
        { length: 3 },
        (_, i) => sortedLanguages[i]?.language || "-",
    );

    return (
        <Box display="flex" justifyContent="space-between" width="100%">
            {languageSlots.map((lang, index) => (
                <Box
                    key={index}
                    textAlign="center"
                    flex={1}
                    position="relative"
                >
                    <Typography
                        variant="body2"
                        color={lang === "-" ? "text.secondary" : "error"}
                    >
                        {lang}
                    </Typography>
                    {index < 2 && (
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                position: "absolute",
                                right: 0,
                                height: "30px",
                                backgroundColor: "#ccc",
                            }}
                        />
                    )}
                </Box>
            ))}
        </Box>
    );
};

const StudentCard = ({
    student_id,
    name,
    nationality,
    school,
    major,
    languageWithLevel,
    imageUrl,
    isBookmarked,
    onBookmarkClick,
}: StudentCardProps) => {
    const handleBookmarkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onBookmarkClick(!isBookmarked);
    };

    return (
        <Card
            sx={{
                width: 300,
                height: 340,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 2,
                borderRadius: 2,
                position: "relative",
                padding: 2,
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    height: "100%",
                }}
            >
                {/* Profile Image */}
                <Avatar
                    src={imageUrl}
                    alt={name}
                    sx={{ width: 72, height: 72, marginBottom: 2 }}
                >
                    {name.charAt(0)}
                </Avatar>

                {/* Name */}
                <Typography variant="h6" component="div" align="center">
                    {name}
                </Typography>

                {/* Nationality */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: -0.5 }}
                >
                    {nationality}
                </Typography>

                {/* School */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: -0.5 }}
                >
                    {school}
                </Typography>

                {/* Major */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: -0.5 }}
                >
                    {major}
                </Typography>

                {/* Separator */}
                <Divider sx={{ my: 2, width: "100%" }} />

                {/* Languages */}
                {renderLanguages(languageWithLevel)}
            </CardContent>

            {/* Bookmark Button */}
            <IconButton
                onClick={handleBookmarkClick}
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: isBookmarked ? "error.main" : "text.secondary",
                }}
            >
                {isBookmarked ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
        </Card>
    );
};

export default StudentCard;
