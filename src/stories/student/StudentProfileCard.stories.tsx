import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import StudentProfileCard, { StudentAttributes } from '../../components/student/StudentProfileCard';

const meta: Meta<typeof StudentProfileCard> = {
  title: 'student/StudentProfileCard',
  component: StudentProfileCard,
  tags: ['autodocs'],
  argTypes: {
    student_name: { control: 'text' },
    nationality: { control: 'text' },
    birth_date: { control: 'date' },
    phone_number: { control: 'text' },
    emergency_contact: { control: 'text' },
    gender: { control: 'text' },
    image: { control: 'text' },
    has_car: { control: 'number' },
    isMypage: { control: 'boolean' },
    onEditClick: { action: 'edit clicked' },
  },
};

export default meta;

const Template: StoryFn<StudentAttributes> = (args) => <StudentProfileCard {...args} />;

export const Default: StoryObj<StudentAttributes> = Template.bind({});
Default.args = {
  student_name: '김철수',
  nationality: '대한민국',
  birth_date: new Date().toString(),
  gender: 0,
  image: 'https://picsum.photos/150',
  keyword_list: ["자유", "평등", "박애"],
  has_car: 1,
};

export const MyPageView: StoryObj<StudentAttributes> = Template.bind({});
MyPageView.args = {
  student_name: '박지성',
  nationality: '대한민국',
  birth_date: new Date().toString(),
  gender: 0,
  phone_number: '010-1234-5678',
  emergency_contact: '010-8765-4321',
  image: 'https://picsum.photos/150',
  has_car: 1,
  keyword_list: ["자유", "평등", "박애"],
  isMypage: true,
};
