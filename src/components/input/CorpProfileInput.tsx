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
import { APIType } from "api_spec";

interface CorpProfileInputProps extends APIType.CorporationType.CorpCardData {
    control: Control<APIType.CorporationType.CorpCardData>;
}

const CorpProfileInputCard = ({
    control,
    ...defaultValues
}: CorpProfileInputProps) => {
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
                image={defaultValues?.logo_image}
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
                            defaultValue={defaultValues?.nationality}
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
                            defaultValue={defaultValues?.ceo_name}
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
                            defaultValue={defaultValues?.corp_address}
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
                            defaultValue={defaultValues?.biz_type}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CorpProfileInputCard;
