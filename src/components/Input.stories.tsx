import Input from '@/components/Input';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'nickname',
    label: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
  },
};

export const WithError: Story = {
  args: {
    id: 'email',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
    errorMessage: '올바른 이메일을 입력해주세요.',
  },
};
