import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack,
    keyframes,
    Paper,
} from "@mui/material";

export interface RequestCardProps {
    title: string;
    reward_price: number;
    currency: string;
    address: string;
    start_date: string;
    request_status: number;
    logo_image?: string;
    onClick: () => void;
}

const rainbowAnimation = keyframes`
  0% { border-color: red; }
  16% { border-color: orange; }
  33% { border-color: yellow; }
  50% { border-color: green; }
  66% { border-color: blue; }
  83% { border-color: indigo; }
  100% { border-color: violet; }
`;

const RequestCard = ({
    title,
    reward_price,
    currency,
    address,
    start_date,
    logo_image,
    request_status,
    onClick,
}: RequestCardProps) => {
    const getStatusStyles = () => {
        switch (request_status) {
            case 0:
                return {
                    border: "1px solid #d3d3d3",
                    backgroundColor: "#ffffff",
                };
            case 3:
                return {
                    border: "1px solid",
                    backgroundColor: "#ffffff",
                    animation: `${rainbowAnimation} 3s linear infinite`,
                };
            case 4:
                return {
                    border: "none",
                    backgroundColor: "#d3d3d3",
                };
            case 5:
                return {
                    border: "1px solid red",
                    backgroundColor: "#d3d3d3",
                };
            default:
                return {
                    border: "none",
                    backgroundColor: "#ffffff",
                };
        }
    };

    const styles = getStatusStyles();

    return (
        <Paper elevation={1} sx={{ width: "100%" }}>
            <Card
                sx={{
                    minWidth: "350px",
                    width: "100%",
                    maxWidth: "1080px",
                    margin: "auto",
                    borderRadius: "16px",
                    fontFamily: "Noto Sans KR",
                    backgroundColor: styles.backgroundColor,
                    border: styles.border,
                    animation: styles.animation || "none",
                    cursor: "pointer",
                    display: "flex",
                    boxShadow: "none",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "3px",
                }}
                onClick={onClick}
            >
                {logo_image && logo_image && (
                    <CardMedia
                        component="img"
                        image={logo_image}
                        alt="Logo"
                        sx={{
                            minWidth: "0",
                            flex: "1",
                            maxWidth: "114px",
                            borderRadius: "16px",
                            marginTop: "14px",
                            marginBottom: "14px",
                            marginRight: "14px",
                            marginLeft: "14px",
                            objectFit: "cover",
                        }}
                    />
                )}
                <CardContent
                    sx={{
                        flex: "1",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flexGrow: 1,
                        padding: 3,
                        fontFamily: "Noto Sans KR",
                        gap: "8px",
                    }}
                >
                    <Stack>
                        <Typography
                            variant="h5"
                            component="div"
                            noWrap
                            flex={1}
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Noto Sans KR",
                            }}
                        >
                            {title}
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            {start_date}
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Noto Sans KR",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            {address}
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Noto Sans KR",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            {reward_price} {currency}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Paper>
    );
};

export default RequestCard;
