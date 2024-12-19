import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StudentStepperCard from './StudentStepperCard';

export default {
  title: 'Components/StudentStepperCard',
  component: StudentStepperCard,
  argTypes: {
    currentStep: {
      control: {
        type: 'number',
        min: 0,
        max: 6,
        step: 1,
      },
      description: '현재 단계를 나타내는 숫자 (0부터 시작)',
    },
  },
} as Meta;

const Template: StoryFn<{ currentStep: number }> = (args) => <StudentStepperCard {...args} />;

export const Step0 = Template.bind({});
Step0.args = {
  currentStep: 0,
};

export const Step1 = Template.bind({});
Step1.args = {
  currentStep: 1,
};

export const Step2 = Template.bind({});
Step2.args = {
  currentStep: 2,
};

export const Step3 = Template.bind({});
Step3.args = {
  currentStep: 3,
};

export const Step4 = Template.bind({});
Step4.args = {
  currentStep: 4,
};

export const Step5 = Template.bind({});
Step5.args = {
  currentStep: 5,
};

export const Completed = Template.bind({});
Completed.args = {
  currentStep: 6,
};
