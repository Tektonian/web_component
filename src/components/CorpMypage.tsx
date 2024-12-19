import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import StudentProfileCard from './StudentProfileCard';
import IndexCard from './IndexCard';
import RequestCard, { RequestCardProps } from './RequestCard';
import CorpProfileCard, { CorpProfileProps } from './CorpProfileCard';
import ReviewOfCorpCard, {ReviewOfCorpCardProps} from './ReviewOfCorpCard';

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
];

const mockReviews: ReviewOfCorpCardProps[] = [
  {
    id: 1,
    consumer_id: 101,
    student_id: 201,
    corp_id: 301,
    request_id: 401,
    request_url: 'https://example.com/request/401',
    review_text: '좋은 협업 경험이었습니다.',
    prep_requirement: '준비물은 따로 필요 없었습니다.',
    work_atmosphere: '협업 분위기가 좋았습니다.',
    sense_of_achive: 8,
  },
  {
    id: 2,
    consumer_id: 102,
    student_id: 202,
    corp_id: 302,
    request_id: 402,
    request_url: 'https://example.com/request/402',
    review_text: '다소 아쉬운 점이 있었습니다.',
    prep_requirement: '준비물이 많았습니다.',
    work_atmosphere: '조금 경직된 분위기였습니다.',
    sense_of_achive: 5,
  },
];

const corpProfileDummyData: CorpProfileProps = {
  corp_name: "OpenAI Tech Solutions",
  nationality: "USA",
  ceo_name: "Sam Altman",
  corp_address: "123 AI Lane, San Francisco, CA 94110",
  biz_started_at: "2015-12-01",
  biz_type: "Artificial Intelligence",
  logo_image: "https://via.placeholder.com/150",
  site_url: "https://openai.com",
  isMypage: true,
  corp_domain: "openai.com",
  phone_number: "+1-800-123-4567",
  corp_num: 12345678,
  biz_num: 98765432,
  corp_status: "Active",
  onEditClick: () => {
    console.log("Edit button clicked!");
  },
};

const CorpMypage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const ongoingRequests = mockRequests.filter((req) => req.request_status === 3);
  const openRequests = mockRequests.filter((req) => req.request_status === 0);
  const pastRequests = mockRequests.filter((req) => req.request_status === 4 || req.request_status === 5);

  const sections = ["0", "1", "2", "3", "4"];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

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
        <CorpProfileCard
          corp_name={corpProfileDummyData.corp_name}
          nationality={corpProfileDummyData.nationality}
          ceo_name={corpProfileDummyData.ceo_name}
          corp_address={corpProfileDummyData.corp_address}
          biz_started_at={corpProfileDummyData.biz_started_at}
          biz_type={corpProfileDummyData.biz_type}
          logo_image={corpProfileDummyData.logo_image}
          site_url={corpProfileDummyData.site_url}
          isMypage={corpProfileDummyData.isMypage}
          corp_domain={corpProfileDummyData.corp_domain}
          phone_number={corpProfileDummyData.phone_number}
          corp_num={corpProfileDummyData.corp_num}
          biz_num={corpProfileDummyData.biz_num}
          corp_status={corpProfileDummyData.corp_status}
          onEditClick={corpProfileDummyData.onEditClick}
        />

        {/* Tabs */}
        <Box sx={{ marginTop: '24px' }}>
          <Tabs 
            value={tabIndex} 
            onChange={handleTabChange} 
            centered
            variant="fullWidth"
            >
            <Tab label="요청" />
            <Tab label="리뷰" />
          </Tabs>

          {/* Tab Panels */}
          {tabIndex === 0 && (
            <Box sx={{ marginTop: '16px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>진행 중인 요청</Typography>
              {ongoingRequests.map((request, index) => (
                <Box key={index} sx={{ marginTop: '16px' }}>
                  <RequestCard {...request} />
                </Box>
              ))}

              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px', marginTop: '24px' }}>신청 요청</Typography>
              {openRequests.map((request, index) => (
                <Box key={index} sx={{ marginTop: '16px' }}>
                  <RequestCard {...request} />
                </Box>
              ))}

              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px', marginTop: '24px' }}>과거 요청</Typography>
              {pastRequests.map((request, index) => (
                <Box key={index} sx={{ marginTop: '16px' }}>
                  <RequestCard {...request} />
                </Box>
              ))}
            </Box>
          )}

          {tabIndex === 1 && (
            <Box sx={{ marginTop: '16px' }}>
              {mockReviews.map((review) => (
                <Box key={review.id} sx={{ marginTop: '16px' }}>
                  <ReviewOfCorpCard {...review} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Container>

      <Container 
        sx={{
          width: { xs: '100%', md: '344px' },
          padding: '0 !important',
          position: { xs: 'relative', md: 'sticky' },
          top: { md: '50%' },
          transform: { md: 'translateY(-50%)' },
          order: { xs: -1, md: 1 },
        }}
      >
        <IndexCard roles="corp" sections={sections} />
      </Container>
    </Box>
  );
};

export default CorpMypage;
