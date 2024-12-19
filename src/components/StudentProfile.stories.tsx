import React from 'react'
import { Meta, StoryObj } from '@storybook/react';
import StudentProfile, { StudentProfileProps } from './StudentProfile';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


const meta: Meta<typeof StudentProfile> = {
  title: 'Components/StudentProfile',
  component: StudentProfile,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Theme>
          <Story />
        </Theme>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    name_glb: { control: 'object' },
    image: { control: 'text' },
    nationality: { control: 'text' },
    age: { control: 'text' },
    gender: {
      control: 'select',
      options: ['남자', '여자', '표시하지 않음', ''],
    },
    academic: { control: 'object' },
    language: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<StudentProfileProps>;

export const Default: Story = {
  args: {
    student_id: 1,
    name_glb: { kr: '홍길동', en: 'Hong Gil-dong' },
    nationality: 'Korean',
    age: '25',
    phone_number: '010-1234-5678',
    emergency_contact: '010-9876-5432',
    email_verified: new Date(),
    gender: '남자',
    image: 'https://via.placeholder.com/150',
    has_car: 1,
    keyword_list: {},
    created_at: new Date(),
    updated_at: new Date(),
    academic: [
      {
        degree: 'Bachelor of Science',
        faculty: 'Computer Science',
        school_name: 'Seoul National University',
        start_date: '2015-03-01',
        end_date: '2019-02-28',
        status: 'Graduated',
        logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg',
      },
      {
        degree: 'Master of Science',
        faculty: 'Data Science',
        school_name: 'KAIST',
        start_date: '2020-03-01',
        end_date: '2022-02-28',
        status: 'Graduated',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/KAIST_wordmark.svg',
      },
    ],
    language: [
      {
        language: 'Korean',
        level: 3,
        exam_name: 'TOPIK',
        exam_result: 'Level 6',
      },
      {
        language: 'English',
        level: 2,
        exam_name: 'TOEIC',
        exam_result: '950',
      },
    ],
  },
};

export const ExtensiveAcademicHistory: Story = {
  args: {
    ...Default.args,
    academic: [
      {
        degree: 'Bachelor of Arts',
        faculty: 'History',
        school_name: 'Harvard University',
        start_date: '2010-09-01',
        end_date: '2014-06-01',
        status: 'Graduated',
      },
      {
        degree: 'Master of Arts',
        faculty: 'Anthropology',
        school_name: 'Harvard University',
        start_date: '2015-09-01',
        end_date: '2017-06-01',
        status: 'Graduated',
      },
      {
        degree: 'PhD in History',
        faculty: 'Modern History',
        school_name: 'Cambridge University',
        start_date: '2018-09-01',
        end_date: '2022-06-01',
        status: 'Graduated',
      },
    ],
  },
};

export const Multilingual: Story = {
  args: {
    ...Default.args,
    language: [
      {
        language: 'English',
        level: 3,
        exam_name: 'TOEFL',
        exam_result: '120',
      },
      {
        language: 'French',
        level: 2,
        exam_name: 'DALF',
        exam_result: 'C1',
      },
      {
        language: 'Spanish',
        level: 1,
        exam_name: 'DELE',
        exam_result: 'B2',
      },
      {
        language: 'Japanese',
        level: 3,
        exam_name: 'JLPT',
        exam_result: 'N1',
      },
    ],
  },
};
