import Navigation from '@/components/Navigation';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Navigation> = {
  title: 'components/Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
