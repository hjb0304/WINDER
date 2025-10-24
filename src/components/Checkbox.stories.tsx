import Checkbox from '@/components/Checkbox';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'policy',
    label: '개인정보처리방침에 동의합니다.',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    id: 'policy',
    label: '개인정보처리방침에 동의합니다.',
    checked: true,
  },
};

export const WithError: Story = {
  args: {
    id: 'policy',
    label: '개인정보처리방침에 동의합니다.',
    checked: false,
    errorMessage: '개인정보처리방침에 동의해주세요.',
  },
};
