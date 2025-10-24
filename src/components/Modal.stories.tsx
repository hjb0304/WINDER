import Input from '@/components/Input';
import Modal from '@/components/Modal';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    message: '비밀번호를 입력해주세요.',
    children: (
      <div className="w-full">
        <label htmlFor="password" className="sr-only">
          비밀번호
        </label>
        <Input id="password" name="password" placeholder="비밀번호" type="password" full />
      </div>
    ),
  },
};

export const NoCancelButton: Story = {
  args: {
    isOpen: true,
    message: '찜 목록 추가에 실패했습니다.',
    hideCancelButton: true,
  },
};
