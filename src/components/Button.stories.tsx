import Button from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '버튼',
    size: 'lg',
    full: false,
    outlined: false,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: '작은 버튼',
    size: 'sm',
    full: false,
    outlined: false,
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    children: '아웃라인 버튼',
    size: 'lg',
    full: false,
    outlined: true,
    disabled: false,
  },
};

export const Full: Story = {
  args: {
    children: '전체 너비 버튼',
    size: 'lg',
    full: true,
    outlined: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    size: 'lg',
    full: true,
    outlined: false,
    disabled: true,
  },
};
