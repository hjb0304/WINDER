import Rating from '@/components/Rating';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Rating> = {
  title: 'components/Rating',
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
  },
};
