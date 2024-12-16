import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import CorpProfileCard, { CorpProfileProps } from "./CorpProfileCard";
import RequestCard, { RequestCardProps } from "./RequestCard";
import Divider from '@mui/material/Divider';


export interface RequestData {
  title: string;
  content: string;
  are_needed?: string[];
  are_required?: string[];
  address: string;
  address_coordinate: {
    type: "Point";
    coordinates: [lat: number, lng: number];
  };
  prep_material: string[];
  request_status: number;
  created_at?: Date;
  updated_at?: Date;
}

interface CorpWithPastRequest extends CorpProfileProps {
  past_requests: RequestCardProps[];
}

export interface RequestDataCardProps {
  requestData: RequestData;
  corpProfile: CorpWithPastRequest;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value }) => (
  <Box role="tabpanel" hidden={value !== index} mt={2}>
    {value === index && <Box>{children}</Box>}
  </Box>
);

const RequestDataCard: React.FC<RequestDataCardProps> = ({ requestData, corpProfile }) => {
  const [activeTab, setActiveTab] = useState(0);

  const googleMapsKey = "AIzaSyB8_1BXxTpvEJHABsLs2EXXNZ1MqS5Kz0c";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=${requestData.address_coordinate.coordinates[0]},${requestData.address_coordinate.coordinates[1]}`;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Card
      sx={{
        maxWidth: "712px",
        margin: "auto",
        borderRadius: "16px",
        fontFamily: "Noto Sans KR",
        backgroundColor: "#ffffff",
        border: "1px solid #d3d3d3",
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", fontFamily: "Noto Sans KR", marginBottom: 2 }}
        >
          {requestData.title}
        </Typography>
        <Box display="flex" alignItems="center" marginBottom={3}>
          {corpProfile.logo_image && (
            <Box
              component="img"
              src={corpProfile.logo_image}
              alt={`${corpProfile.corp_name} logo`}
              sx={{ width: 50, height: 50, marginRight: 2, borderRadius: "4px" }}
            />
          )}
          <Typography variant="subtitle1" sx={{ fontFamily: "Noto Sans KR" }}>
            {corpProfile.corp_name}
          </Typography>
        </Box>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="상세 정보" />
          <Tab label="기업 정보" />
        </Tabs>
        <TabPanel value={activeTab} index={0}>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginTop: 2 ,fontSize: "18px"}}
          >
            업무 내용
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginBottom: 2, fontSize: "16px", lineHeight: "32px"}}
          >
            {requestData.content}
          </Typography>
          <Divider/>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginTop: 2 ,fontSize: "18px"}}
          >
            요구 사항
          </Typography>
          {requestData.are_needed && (
            <Typography
              variant="body2"
              sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginBottom: 2, fontSize: "16px", lineHeight: "32px"}}
            >
              {requestData.are_needed.map((item, index) => (
                <div key={index}>- {item}</div>
              ))}
            </Typography>
          )}
          <Divider/>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginTop: 2 ,fontSize: "18px"}}
          >
            우대 사항
          </Typography>
          {requestData.are_required && (
            <Typography
              variant="body2"
              sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginBottom: 2, fontSize: "16px", lineHeight: "32px"}}
            >
              {requestData.are_required.map((item, index) => (
                <div key={index}>- {item}</div>
              ))}
            </Typography>
          )}
          <Divider/>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginTop: 2 ,fontSize: "18px"}}
          >
            준비물
          </Typography>
          {requestData.prep_material && (
            <Typography
              variant="body2"
              sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginBottom: 2, fontSize: "16px", lineHeight: "32px"}}
            >
              {requestData.prep_material.map((item, index) => (
                <div key={index}>- {item}</div>
              ))}
            </Typography>
          )}
          <Divider/>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginTop: 2 ,fontSize: "18px"}}
          >
            주소
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)", marginBottom: 2, fontSize: "16px", lineHeight: "32px"}}
          >
            {requestData.address}
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <iframe
                title="google-map"
                src={mapUrl}
                style={{
                    width: "100%",
                    height: "450px",
                    border: "none",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>

          <Box sx={{ marginBottom: 4 }}>
            <CorpProfileCard {...corpProfile} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
            {corpProfile.past_requests.map((request, index) => (
            <Box key={index} sx={{ width: "100%" }}>
              <RequestCard key={index} {...request} />
            </Box>
            ))}
          </Box>
        </TabPanel>
      </CardContent>
    </Card>
  );
};

export default RequestDataCard;
