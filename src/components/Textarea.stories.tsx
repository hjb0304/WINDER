import Textarea from '@/components/Textarea';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Textarea> = {
  title: 'components/Textarea',
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: 'memo',
    label: '메모',
    placeholder: '와인에 대한 메모를 남겨주세요.',
  },
};

export const WithError: Story = {
  args: {
    id: 'memo',
    label: '메모',
    placeholder: '와인에 대한 메모를 남겨주세요.',
    errorMessage: '메모를 입력해주세요.',
  },
};
