import React from "react";
import { Box, Container } from "@mui/material";

interface PageContainerProps {
    main: React.ReactNode;
    side: React.ReactNode;
    sideBar?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
    main,
    side,
    sideBar,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "24px",
                maxWidth: "1080px",
                margin: "auto",
                padding: "16px",
                minHeight: "100vh",
            }}
        >
            <Container
                sx={{
                    width: { xs: "100%", md: "712px" },
                    padding: "0 !important",
                }}
            >
                {main}
            </Container>

            <Container
                sx={{
                    width: { xs: "100%", md: "344px" }, // 작은 화면에서는 100% 폭
                    padding: "0 !important",
                    position: { xs: "relative", md: "sticky" }, // 작은 화면에서는 위치 고정 해제
                    top: { md: "50%" }, // 중간 위치 (데스크톱만)
                    transform: { md: "translateY(-50%)" }, // 중간 위치 조정 (데스크톱만)
                    order: { xs: -1, md: 1 }, // 모바일에서 위로 이동
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                {side}
                {sideBar}
            </Container>
        </Box>
    );
};

export default PageContainer;
