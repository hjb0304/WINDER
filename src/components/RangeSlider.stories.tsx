import RangeSlider from '@/components/RangeSlider';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof RangeSlider> = {
  title: 'components/RangeSlider',
  component: RangeSlider,
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    values: [3],
  },
};
