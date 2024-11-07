import { Meta, StoryObj } from '@storybook/react';
import ReviewPopOver, { ReviewPopOverProps } from './ReviewPopOver';
import { LightningBoltIcon } from "@radix-ui/react-icons";
import {Theme} from "@radix-ui/themes"

const meta: Meta<typeof ReviewPopOver> = {
  title: 'Components/ReviewPopOver',
  component: ReviewPopOver,
  argTypes: {
    popOverString: {control: String, defaultValue: "성실함을 나타냄"}
  },
};

export default meta;
type Story = StoryObj<ReviewPopOverProps>;

export const Default: Story = {
  args: {
    triggerIcon: LightningBoltIcon,
    popOverString: "성실함을 나타냄",
  },
};