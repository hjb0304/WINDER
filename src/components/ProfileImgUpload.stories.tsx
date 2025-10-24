import ProfileImgUpload from '@/components/ProfileImgUpload';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ProfileImgUpload> = {
  title: 'components/ProfileImgUpload',
  component: ProfileImgUpload,
};

export default meta;
type Story = StoryObj<typeof ProfileImgUpload>;

export const Default: Story = {
  args: {
    url: '',
    canUpload: true,
  },
};

export const NoUpload: Story = {
  args: {
    url: '',
    canUpload: false,
  },
};
