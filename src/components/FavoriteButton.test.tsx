import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import FavoriteButton from './FavoriteButton';

describe('FavoriteButton', () => {
  it('isFavorite=false일 때 aria-label과 색상이 올바르게 표시됨', async () => {
    const handleClick = vi.fn();
    render(<FavoriteButton onClick={handleClick} isFavorite={false} />);

    const button = screen.getByRole('button', { name: '찜하기' });
    expect(button).toBeInTheDocument();

    // 클릭 이벤트 테스트
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('isFavorite=true일 때 aria-label과 색상이 올바르게 표시됨', () => {
    render(<FavoriteButton onClick={() => {}} isFavorite={true} />);
    const button = screen.getByRole('button', { name: '찜하기 해제' });
    expect(button).toHaveClass('bg-primary');
  });
});
