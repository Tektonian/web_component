import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2 as Grid,
  keyframes,
} from "@mui/material";

export interface RequestCardProps {
  title: string;
  reward_price: number;
  currency: "USD" | "KRW" | "JPY" | "";
  address: string;
  start_date: Date;
  renderLogo: boolean;
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
  renderLogo,
  logo_image,
  request_status,
  onClick,
}: RequestCardProps) => {
  const getStatusStyles = () => {
    switch (request_status) {
      case 0:
        return {
          border: '1px solid #d3d3d3',
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
    <Card
      sx={{
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
        alignItems: "stretch",
      }}
      onClick={onClick}
    >
      {renderLogo && logo_image && (
        <CardMedia
          component="img"
          image={logo_image}
          alt="Logo"
          sx={{
            width: "114px",
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          padding: 3,
          fontFamily: "Noto Sans KR",
          gap: "8px",
        }}
      >
        <Grid container spacing={1}>
          <Grid size={12}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", fontFamily: "Noto Sans KR" }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)" }}
            >
              {start_date.toDateString()}
            </Typography>
          </Grid>
          <Grid size={10.5}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)" }}
            >
              {address}
            </Typography>
          </Grid>
          <Grid size={1.5}>
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RequestCard;
