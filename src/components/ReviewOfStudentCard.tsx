import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid2 as Grid,
} from '@mui/material';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import '@fontsource/noto-sans-kr';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export interface ReviewOfStudentCardProps {
  corp_id?: number;
  orgn_id?: number;
  consumer_id: number;
  student_id: number;
  request_id: number;
  request_url: string;
  was_late: 0 | 1 | 2;
  was_proactive: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  was_diligent: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  commu_ability: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  lang_fluent: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  goal_fulfillment: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  want_cowork: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  praise?: string;
  need_improve?: string;
  created_at?: Date;
  updated_at?: Date;
  onClick?: () => void;
}

const ReviewOfStudentCard: React.FC<ReviewOfStudentCardProps> = ({
  was_late,
  was_proactive,
  was_diligent,
  commu_ability,
  lang_fluent,
  goal_fulfillment,
  want_cowork,
  praise,
  need_improve,
}) => {
  const data = {
    labels: [
      '적극성',
      '성실성',
      '의사소통',
      '언어 능력',
      '목표 달성',
      '재고용 의사',
    ],
    datasets: [
      {
        data: [
          was_proactive,
          was_diligent,
          commu_ability,
          lang_fluent,
          goal_fulfillment,
          want_cowork,
        ],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(34, 202, 236, 1)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          display: false,
        },
        pointLabels: {
          font: {
            family: 'Noto Sans KR',
          },
        },
      },
    },
  };

  return (
    <Card
      sx={{
        borderRadius: '16px',
        width: 344,
        height: 480,
        margin: 'auto',
        border: '1px solid #d3d3d3',
        padding: 2,
      }}
    >
      <CardContent sx={{ padding: "0 !important"}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <Radar data={data} options={options} />
        </Box>
        {praise && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid size={3}>
              <Typography variant="body1" sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', fontWeight: 'bold' }}>
                칭찬:
              </Typography>
            </Grid>
            <Grid size={9}>
              <Typography variant="body1" sx={{ fontFamily: 'Noto Sans KR' }}>{praise}</Typography>
            </Grid>
          </Grid>
        )}
        {need_improve && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid size={3}>
              <Typography variant="body1" sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', fontWeight: 'bold' }}>
                개선:
              </Typography>
            </Grid>
            <Grid size={9}>
              <Typography variant="body1" sx={{ fontFamily: 'Noto Sans KR' }}>{need_improve}</Typography>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewOfStudentCard;
