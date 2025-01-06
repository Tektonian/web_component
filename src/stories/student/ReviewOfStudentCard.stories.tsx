import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReviewOfStudentCard, { ReviewOfStudentCardProps } from '../../components/student/ReviewOfStudentCard';

const meta: Meta<typeof ReviewOfStudentCard> = {
  title: 'student/ReviewOfStudentCard',
  component: ReviewOfStudentCard,
  argTypes: {
    was_late: { control: 'number', min: 0, max: 2 },
    was_proactive: { control: 'number', min: 0, max: 10 },
    was_diligent: { control: 'number', min: 0, max: 10 },
    commu_ability: { control: 'number', min: 0, max: 10 },
    lang_fluent: { control: 'number', min: 0, max: 10 },
    goal_fulfillment: { control: 'number', min: 0, max: 10 },
    want_cowork: { control: 'number', min: 0, max: 10 },
  },
};

export default meta;
type Story = StoryObj<ReviewOfStudentCardProps>;

export const Default: Story = {
  args: {
    corp_id: 101,
    orgn_id: 202,
    consumer_id: 303,
    student_id: 404,
    request_id: 505,
    request_url: 'https://example.com/request/505',
    was_late: 1,
    was_proactive: 7,
    was_diligent: 8,
    commu_ability: 8,
    lang_fluent: 9,
    goal_fulfillment: 7,
    want_cowork: 7,
    praise: 'Great attitude and teamwork.Great attitude and teamwork.Great attitude and teamwork.',
    need_improve: 'Needs to manage time better.',
    created_at: new Date('2023-01-01T10:00:00Z'),
    updated_at: new Date('2023-02-01T10:00:00Z'),
  },
};

export const HighEvaluation: Story = {
  args: {
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
};

export const LowEvaluation: Story = {
  args: {
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
};

export const MidEvaluation: Story = {
  args: {
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
};
