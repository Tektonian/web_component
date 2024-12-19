import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import StudentProfileCard from './StudentProfileCard';
import IndexCard from './IndexCard';
import RequestCard, { RequestCardProps } from './RequestCard';
import RequestDataCard from './RequestDataCard';
import RequestSideCard from './RequestSideCard';

const mockRequests: RequestCardProps[] = [
    {
        title: '진행 중인 요청',
        reward_price: 100,
        currency: 'KRW',
        address: '서울특별시 강남구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 3,
        onClick: () => alert('진행 중인 요청 클릭'),
    },
    {
        title: '모집 중인 요청',
        reward_price: 150,
        currency: 'KRW',
        address: '서울특별시 송파구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 0,
        onClick: () => alert('모집 중인 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
];

const requestDataExample = {
    title: "신규 개발 프로젝트 요청",
    content: "AI 기반 개발 프로젝트에 대한 상세 요구 사항입니다.",
    are_needed: ["React 경험", "TypeScript 사용 능력"],
    are_required: ["Redux 사용 경험", "MUI 스타일링"],
    address: "서울특별시 강남구 테헤란로",
    address_coordinate: {
      type: "Point",
      coordinates: [37.507728, 127.062205],
    },
    prep_material: ["노트북", "개발 환경 세팅"],
    request_status: 1,
    created_at: new Date(),
    updated_at: new Date(),
    head_count: 3,
    reward_price: 15000,
    currency: "JPY",
    start_date: new Date(),
    end_date: new Date(),
    provide_food: false
};

const corpProfileExample = {
    corp_name: "OpenAI Corp",
    logo_image: "https://via.placeholder.com/50",
    nationality: "USA",
    ceo_name: "Sam Altman",
    corp_address: "123 AI Lane, San Francisco, CA",
    biz_started_at: "2023-01-01",
    biz_type: "AI Development",
};
    

const StudentMypage = () => {
    const ongoingRequests = mockRequests.filter((req) => req.request_status === 3);
    const openRequests = mockRequests.filter((req) => req.request_status === 0);
    const pastRequests = mockRequests.filter((req) => req.request_status === 4 || req.request_status === 5);

    const sections = ["0", "1", "2", "3", "4"]

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '24px',
                maxWidth: '1080px',
                margin: 'auto',
                padding: '16px',
            }}
            id={sections[0]}
        >
            <Container 
                sx={{
                width: { xs: '100%', md: '712px' },
                padding: '0 !important',
              }}
              >
                <RequestDataCard requestData={requestDataExample} corpCard={corpProfileExample} otherRequests={mockRequests}/>
            </Container>

            <Container 
                sx={{
                    width: { xs: '100%', md: '344px' }, // 작은 화면에서는 100% 폭
                    padding: '0 !important',
                    position: { xs: 'relative', md: 'sticky' }, // 작은 화면에서는 위치 고정 해제
                    top: { md: '50%' }, // 중간 위치 (데스크톱만)
                    transform: { md: 'translateY(-50%)' }, // 중간 위치 조정 (데스크톱만)
                    order: { xs: -1, md: 1 }, // 모바일에서 위로 이동
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                }}>
                <RequestSideCard request={requestDataExample}/>
                <Card 
                    sx={{
                        borderRadius: "16px",
                        backgroundColor: "#ff7961",
                    }}
                >
                    <CardContent sx={{textAlign: 'center', padding: "8px !important"}}>
                        <Typography>
                            신청하기
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default StudentMypage;
