import FavoriteButton from '@/components/FavoriteButton';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof FavoriteButton> = {
  title: 'components/FavoriteButton',
  component: FavoriteButton,
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    isFavorite: false,
    onClick: () => alert('clicked'),
  },
};

export const Favorite: Story = {
  args: {
    isFavorite: true,
    onClick: () => alert('clicked'),
  },
};
