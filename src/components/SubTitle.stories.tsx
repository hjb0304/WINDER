import SubTitle from '@/components/SubTitle';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof SubTitle> = {
  title: 'components/SubTitle',
  component: SubTitle,
};

export default meta;
type Story = StoryObj<typeof SubTitle>;

export const Default: Story = {
  args: {
    children: '오늘의 추천 와인',
  },
};
