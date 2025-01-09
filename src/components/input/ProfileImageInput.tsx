import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import blockies from "ethereum-blockies";
import { TextField, Box, Typography, Container } from "@mui/material";

export interface ProfileImageInputProps {
    control: any;
    onNext: () => void;
    onPrevious: () => void;
}

const ProfileImageInput: React.FC<ProfileImageInputProps> = ({
    control,
    onNext,
    onPrevious,
}) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [defaultImages, setDefaultImages] = useState<string[]>([]);

    // Blockies 기본 이미지 생성
    useEffect(() => {
        const generateBlockiesImages = () => {
            const images = Array(4)
                .fill(null)
                .map((_, index) =>
                    blockies
                        .create({
                            seed: `blockies-${index}-${Math.random()}`,
                            size: 8,
                            scale: 20,
                            bgcolor: "#ffffff",
                        })
                        .toDataURL(),
                );
            setDefaultImages(images);
        };
        generateBlockiesImages();
    }, []);

    const handleImageDrop = (
        event: React.DragEvent<HTMLDivElement>,
        onChange: (url: string) => void,
    ) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                onChange(result);
                setPreviewUrl(result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDefaultImageClick = (
        url: string,
        onChange: (url: string) => void,
    ) => {
        onChange(url);
        setPreviewUrl(url);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Profile Picture
            </Typography>
            <Controller
                name="image"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <Box>
                        <TextField
                            {...field}
                            label="Image URL"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => {
                                field.onChange(e.target.value);
                                setPreviewUrl(e.target.value);
                            }}
                            placeholder="Enter or drop an image URL here"
                            sx={{ mt: 2 }}
                        />
                        {/* 드래그 영역 */}
                        <Box
                            onDrop={(event) =>
                                handleImageDrop(event, field.onChange)
                            }
                            onDragOver={(event) => event.preventDefault()}
                            sx={{
                                border: "2px dashed #ccc",
                                padding: 3,
                                marginTop: 3,
                                textAlign: "center",
                                borderRadius: 1,
                                color: "#777",
                                cursor: "pointer",
                                backgroundColor: "#f9f9f9",
                            }}
                        >
                            Drag and Drop Image Here
                        </Box>
                        {/* 미리보기 */}
                        {previewUrl && (
                            <Box sx={{ mt: 2, textAlign: "center" }}>
                                <Typography variant="body2" gutterBottom>
                                    Image Preview:
                                </Typography>
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        border: "1px solid #ccc",
                                    }}
                                />
                            </Box>
                        )}
                        {/* 기본 제공 이미지 */}
                        <Box
                            display="flex"
                            justifyContent="center"
                            gap={2}
                            mt={2}
                        >
                            {defaultImages.map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Default ${index + 1}`}
                                    onClick={() =>
                                        handleDefaultImageClick(
                                            url,
                                            field.onChange,
                                        )
                                    }
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        cursor: "pointer",
                                        borderRadius: "4px",
                                        border:
                                            previewUrl === url
                                                ? "2px solid #3f51b5"
                                                : "1px solid #ccc",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                )}
            />
            {/* 네비게이션 버튼 */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={3}
            ></Box>
        </Container>
    );
};

export default ProfileImageInput;
