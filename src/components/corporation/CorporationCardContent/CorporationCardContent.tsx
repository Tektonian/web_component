import React from "react";
import { CardContent, Box, Typography, Grid2 as Grid } from "@mui/material";
import { APIType } from "api_spec";

interface CorpCardContent extends APIType.CorporationType.CorpCardData {}

const CorporationCardContent = ({
    logo_image,
    corp_name,
    nationality,
    phone_number,
    ceo_name,
    corp_address,
    corp_domain,
    biz_type,
}: CorpCardContent) => {
    return (
        <CardContent sx={{ padding: 3, fontFamily: "Noto Sans KR" }}>
            <Box display="flex" alignItems="center" marginBottom="16px">
                {logo_image && (
                    <Box
                        component="img"
                        src={logo_image}
                        alt={`${corp_name} logo`}
                        sx={{
                            width: 50,
                            height: 50,
                            marginRight: 2,
                            borderRadius: "4px",
                        }}
                    />
                )}
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Noto Sans KR", fontSize: "1.5rem" }}
                >
                    {corp_name}
                </Typography>
            </Box>

            <Grid container spacing={2}>
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
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {nationality}
                    </Typography>
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
                        도메인
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {corp_domain}
                    </Typography>
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
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {ceo_name}
                    </Typography>
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
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {corp_address}
                    </Typography>
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
                        전화번호
                    </Typography>
                </Grid>
                <Grid size={9}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {phone_number}
                    </Typography>
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
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans KR",
                            fontSize: "1rem",
                            color: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {biz_type}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default CorporationCardContent;
