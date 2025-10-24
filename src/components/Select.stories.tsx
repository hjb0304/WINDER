import Select from '@/components/Select';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { text: '전체', value: 'all' },
      { text: '레드', value: 'reds' },
      { text: '화이트', value: 'whites' },
      { text: '로제', value: 'rose' },
      { text: '스파클링', value: 'sparkling' },
    ],
    id: 'wine',
    label: '와인 종류',
  },
};
