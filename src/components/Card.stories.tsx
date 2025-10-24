import Card from '@/components/Card';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    src: '',
    name: '와인 이름',
    rating: 4.5,
  },
};

export const WithTypeDate: Story = {
  args: {
    src: '',
    name: '와인 이름',
    type: 'white',
    rating: 4,
    date: '2025-08-08',
  },
};
