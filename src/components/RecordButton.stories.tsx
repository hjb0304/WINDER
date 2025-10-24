import RecordButton from '@/components/RecordButton';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof RecordButton> = {
  title: 'components/RecordButton',
  component: RecordButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RecordButton>;

export const Default: Story = {};
