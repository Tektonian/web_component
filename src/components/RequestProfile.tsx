import React from 'react';
import { Theme, Separator, Grid, Box, Flex, Text } from '@radix-ui/themes';
import CorpProfile from './CorpProfile';
import { CIcon } from '@coreui/icons-react';
import { cilPeople, cilMoney, cilCalendar, cilAvTimer, cilDinner, cilBusAlt } from '@coreui/icons';

export interface RequestProfileProps {
  title: string;
  subtitle: string;
  head_count: number;
  reward_price: number;
  currency: 'USD' | 'JPY' | 'KRW' | '';
  content: string;
  are_needed: string;
  are_required: string;
  date: Date;
  start_time: string;
  end_time: string;
  address: string;
  address_coordinate: { lat: number; lng: number };
  provide_food: boolean;
  provide_trans_exp: boolean;
  prep_material: string;
  created_at: Date;
}

const isProvided = (idf: boolean) => (idf ? "제공함" : "제공안함")

const RequestProfile: React.FC<RequestProfileProps> = ({
  title,
  subtitle,
  head_count,
  reward_price,
  currency,
  content,
  are_needed,
  are_required,
  date,
  start_time,
  end_time,
  address,
  address_coordinate,
  provide_food,
  provide_trans_exp,
  prep_material,
  created_at,
}) => {
  return (
      <Box width={{ initial: "300px", xs: "520px", sm: "768px", md: "1024px"}}>
        <CorpProfile 
          name="Company Name"
          nationality="Country"
          corp_address="Company Address"
          corp_num="Company Number"
          review_count={42}
          biz_type="Business Type"
          logo_image="logo.png"
          homepage_url="https://companyhomepage.com"
        />
        <Separator my="3" size="4" />
        <Box style={{ width: '100%', boxSizing: 'border-box' }}>
          <Flex direction="column" gap="4">
            <Text as="div" size="6" weight="bold">{title}</Text>
            <Text size="4" color="gray">{subtitle}</Text>
            <Separator my="3" size="4" />
            <Flex direction="column" justify="center" align="center" gap="5" style={{ marginTop: '10px', marginBottom: '10px' }}>
              <Grid columns={{initial: "1", xs: "2", sm: "3"}} width="auto" gap="6">
                <Box>
                  <Flex direction="row" gap="5">
                    <CIcon icon={cilPeople} style={{ width: '20px', height: '20px' }} />
                    <Text size="3" color="gray">{head_count}</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="row" gap="5">
                    <CIcon icon={cilMoney} style={{ width: '20px', height: '20px' }} />
                    <Text size="3" color="gray">{reward_price} {currency}</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="row" gap="5">
                   <CIcon icon={cilAvTimer} style={{ width: '20px', height: '20px' }} />
                   <Text size="3" color="gray">
                     {start_time} - {end_time}
                   </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="row" gap="5">
                    <CIcon icon={cilDinner} style={{ width: '20px', height: '20px' }} />
                    <Text size="3" color="gray">{isProvided(provide_food)}</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="row" gap="5">
                    <CIcon icon={cilBusAlt} style={{ width: '20px', height: '20px' }} />
                    <Text size="3" color="gray">{isProvided(provide_trans_exp)}</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="row" gap="5">
                   <CIcon icon={cilCalendar} style={{ width: '20px', height: '20px' }} />
                   <Text size="3" color="gray">
                     {date.toDateString()}
                   </Text>
                  </Flex>
                </Box>
              </Grid>
            </Flex>
            <Separator my="3" size="4" />
            <Text size="4">{content}</Text>
            <Separator my="3" size="4" />
            <Text size="3" color="gray">필요사항: {are_needed}</Text>
            <Text size="3" color="gray">권장사항: {are_required}</Text>
            <Text size="3" color="gray">준비물: {prep_material}</Text>
            <Separator my="3" size="4" />
            <Text size="3" color="gray">주소: {address}</Text>
            <Separator my="3" size="4" />
            <Text size="3" color="gray">Posted on: {new Date(created_at).toLocaleDateString()}</Text>
          </Flex>
        </Box>
      </Box>
  );
};

export default RequestProfile;
