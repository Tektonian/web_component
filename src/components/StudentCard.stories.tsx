import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from "@radix-ui/themes"
import StudentCard from './StudentCard';

const meta = {
  title: 'StudentCard',
  component: StudentCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ],
  args: {
    name: 'John Doe',
    nationality: 'American',
    school: 'Harvard University',
    major: 'Computer Science',
    languageWithLevel: [{language: 'English', level: 1}, {language: 'Spanish', level: 2}],
    imageUrl: 'https://via.placeholder.com/120',
    onBookmarkClick: fn(),
  },
} satisfies Meta<typeof StudentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultiLanguage: Story = {
  args: {
    name: 'Jane Smith',
    nationality: 'Canadian',
    school: 'University of Toronto',
    major: 'Physics',
    languageWithLevel: [{language: 'French', level: 1}, {language: 'Japaneses', level: 2}],
    imageUrl: 'https://via.placeholder.com/120',
  },
};

export const DifferentMajor: Story = {
  args: {
    name: 'Alice Kim',
    nationality: 'South Korean',
    school: 'Korea University',
    major: 'International Relations',
    languageWithLevel: [{language: 'Korean', level: 1}, {language: 'English', level: 2}],
    imageUrl: 'https://via.placeholder.com/120',
  },
};
