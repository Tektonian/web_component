import React from 'react';
import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import '@fontsource/noto-sans-kr';

interface BarNavigationCardProps {
  onPrevious: () => void;
  onNext: () => void;
}

const BarNavigationCard: React.FC<BarNavigationCardProps> = ({ onPrevious, onNext }) => {
  return (
    <Card
      sx={{
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 1,
        borderRadius: '16px',
        boxShadow: 'none',
        border: '1px solid #d3d3d3',
        backgroundColor: '#f5f5f5',
        margin: 'auto',
      }}
    >

      <IconButton
        sx={{
          display: 'flex',
          cursor: 'pointer',
          color: '#333',
        }}
        onClick={onPrevious}
      >
        <NavigateBeforeIcon />
      </IconButton>


      <IconButton
        sx={{
          display: 'flex',
          cursor: 'pointer',
          color: '#333',
        }}
        onClick={onNext}
      >
        <NavigateNextIcon />
      </IconButton>
    </Card>
  );
};

export default BarNavigationCard;
