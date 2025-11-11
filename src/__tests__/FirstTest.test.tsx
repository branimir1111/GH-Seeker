import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '@/pages';

describe('HomePage Component', () => {
  it('renders correctly', () => {
    render(<HomePage />);

    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });
});
