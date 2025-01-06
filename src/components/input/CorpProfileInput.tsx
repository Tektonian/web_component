import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid2 as Grid,
    Box,
} from "@mui/material";
import { Control } from "react-hook-form";
import "@fontsource/noto-sans-kr";
import ShortTextInput from "./ShortTextInput";

export interface CorpProfileData {
    corp_name: string;
    nationality: string;
    ceo_name?: string;
    corp_address?: string;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
}

interface CorpProfileInputProps {
    initialData?: CorpProfileData;
    control: Control<any>;
}

const CorpProfileInput: React.FC<CorpProfileInputProps> = ({
    initialData,
    control,
}) => {
    return (
        <Card
            sx={{
                maxWidth: "1080px",
                margin: "auto",
                borderRadius: "16px",
                fontFamily: "Noto Sans KR",
                color: "rgba(0, 0, 0, 0.7)",
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                position: "relative",
            }}
        >
            <CardMedia
                component="img"
                image={initialData?.logo_image}
                sx={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    margin: "16px",
                }}
            />

            <CardContent
                sx={{ padding: 3, fontFamily: "Noto Sans KR", flex: 1 }}
            >
                <Box mb={5}>
                    <ShortTextInput
                        control={control}
                        name="student_name"
                        defaultValue={initialData?.corp_name}
                    />
                </Box>
                <Grid container spacing={4}>
                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            국적
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <ShortTextInput
                            control={control}
                            name="nationality"
                            defaultValue={initialData?.nationality}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            대표명
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <ShortTextInput
                            control={control}
                            name="ceo_name"
                            defaultValue={initialData?.ceo_name}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            주소
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <ShortTextInput
                            control={control}
                            name="corp_address"
                            defaultValue={initialData?.corp_address}
                        />
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            업종
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <ShortTextInput
                            control={control}
                            name="biz_type"
                            defaultValue={initialData?.biz_type}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CorpProfileInput;
