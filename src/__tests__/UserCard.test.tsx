import { render, screen } from '@testing-library/react';
import { UserCard } from '@/components';

describe('UserCard Component', () => {
  const props = {
    avatarUrl: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    bio: 'Frontend Developer',
    url: 'https://github.com/johndoe',
  };
  test('renders user information correctly', () => {
    render(<UserCard {...props} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();

    const avatarImage = screen.getByAltText('John Doe');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute(
      'src',
      'https://example.com/avatar.jpg'
    );
    expect(avatarImage).toHaveAttribute('alt');

    const followLink = screen.getByRole('link', { name: /explore/i });
    expect(followLink).toHaveAttribute('href', 'https://github.com/johndoe');
    expect(followLink).toHaveAttribute('target', '_blank');
    expect(followLink).toHaveAttribute('rel', 'noreferrer');
  });
  test('renders default values when name and bio are not provided', () => {
    const propsWithoutNameAndBio = {
      ...props,
      name: '',
      bio: '',
    };

    render(<UserCard {...propsWithoutNameAndBio} />);

    expect(screen.getByText('Branimir Djordjevic')).toBeInTheDocument();
    expect(
      screen.getByText(/exploring JavaScript programming language/i)
    ).toBeInTheDocument();
  });
});
