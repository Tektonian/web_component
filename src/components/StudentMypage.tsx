import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid2 as Grid,
} from '@mui/material';
import StudentProfileCard from './StudentProfileCard';
import IndexCard from './IndexCard';
import RequestCard, { RequestCardProps } from './RequestCard';
import ReviewOfStudentCard from './ReviewOfStudentCard';
import { StudentAttributes } from './StudentProfileCard';

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

const mockReviews = [
  {
    corp_id: 102,
    orgn_id: 203,
    consumer_id: 304,
    student_id: 405,
    request_id: 506,
    request_url: 'https://example.com/request/506',
    was_late: 0,
    was_proactive: 10,
    was_diligent: 10,
    commu_ability: 10,
    lang_fluent: 9,
    goal_fulfillment: 10,
    want_cowork: 10,
    praise: 'Outstanding performance and communication.',
    need_improve: 'None.',
    created_at: new Date('2023-01-15T10:00:00Z'),
    updated_at: new Date('2023-02-15T10:00:00Z'),
  },
  {
    corp_id: 103,
    orgn_id: 204,
    consumer_id: 305,
    student_id: 406,
    request_id: 507,
    request_url: 'https://example.com/request/507',
    was_late: 2,
    was_proactive: 3,
    was_diligent: 4,
    commu_ability: 5,
    lang_fluent: 4,
    goal_fulfillment: 3,
    want_cowork: 4,
    praise: 'Good effort, but needs improvement.',
    need_improve: 'Improve punctuality and communication skills.',
    created_at: new Date('2023-01-20T10:00:00Z'),
    updated_at: new Date('2023-02-20T10:00:00Z'),
  },
  {
    corp_id: 104,
    orgn_id: 205,
    consumer_id: 306,
    student_id: 407,
    request_id: 508,
    request_url: 'https://example.com/request/508',
    was_late: 1,
    was_proactive: 6,
    was_diligent: 6,
    commu_ability: 7,
    lang_fluent: 8,
    goal_fulfillment: 6,
    want_cowork: 6,
    praise: 'Performed well overall.',
    need_improve: 'Consistency in meeting deadlines.',
    created_at: new Date('2023-01-10T10:00:00Z'),
    updated_at: new Date('2023-02-10T10:00:00Z'),
  },
];

const StudentMypage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const ongoingRequests = mockRequests.filter((req) => req.request_status === 3);
  const openRequests = mockRequests.filter((req) => req.request_status === 0);
  const pastRequests = mockRequests.filter((req) => req.request_status === 4 || req.request_status === 5);

  const sections = ['0', '1', '2', '3', '4'];

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
        <StudentProfileCard
          student_name="김철수"
          nationality="대한민국"
          birth_date={new Date()}
          gender={0}
          image="https://via.placeholder.com/200"
          has_car={1}
          isMypage={true}
          phone_number="010-1234-5678"
          emergency_contact="010-8765-4321"
          keyword_list={["자유", "평등", "박애"]}
          onEditClick={() => alert('Edit Student Profile')}
        />

        {/* Tabs */}
        <Box sx={{ marginTop: '24px' }}>
          <Tabs 
            value={tabIndex} 
            onChange={handleTabChange} 
            centered
            variant="fullWidth"
            >
            <Tab label="의뢰" />
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
              <Grid container spacing={3}>
                {mockReviews.map((review, index) => (
                  <Grid size={6} key={index}>
                    <ReviewOfStudentCard {...review} />
                  </Grid>
                ))}
              </Grid>
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
        <IndexCard roles="student" sections={sections} />
      </Container>
    </Box>
  );
};

export default StudentMypage;
