import React from "react";
import {
    Card,
    CardContent,
    Box,
    Typography,
    Grid2 as Grid,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "@fontsource/noto-sans-kr";

export interface CorpProfileCardProps {
    corp_name: string;
    nationality: string;
    ceo_name?: string;
    corp_address?: string;
    biz_started_at?: string;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
    isMypage?: boolean;
    corp_domain?: string;
    phone_number?: string;
    corp_num?: number;
    biz_num?: number;
    corp_status?: number;
    onEditClick?: () => void;
    onClick?: () => void;
}

const CorpProfileCard: React.FC<CorpProfileCardProps> = ({
    corp_name,
    nationality,
    ceo_name,
    corp_address,
    biz_started_at,
    biz_type,
    logo_image,
    site_url,
    isMypage = false,
    corp_domain,
    phone_number,
    corp_num,
    biz_num,
    corp_status,
    onEditClick,
    onClick,
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
                transition: "background-color 0.3s ease",
                "&:hover": isMypage
                    ? { backgroundColor: "#e0e0e0" }
                    : undefined,
                position: "relative",
            }}
            onClick={onClick}
        >
            {isMypage && (
                <IconButton
                    onClick={onEditClick}
                    sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        backgroundColor: "#f5f5f5",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                    }}
                >
                    <EditIcon />
                </IconButton>
            )}

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

                    {isMypage && (
                        <>
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
                        </>
                    )}
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
                    {isMypage && (
                        <>
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
                        </>
                    )}
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
        </Card>
    );
};

export default CorpProfileCard;
