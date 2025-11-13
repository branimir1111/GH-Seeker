import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { SearchForm } from '@/components';

// const mockToast = vi.fn();
const setUserNameMock = vi.fn();

describe('SearchForm component', () => {
  const user = userEvent.setup();
  beforeEach(() => vi.clearAllMocks());

  const getFormElements = () => {
    const input = screen.getByRole('textbox', { name: /userName/i });
    const button = screen.getByRole('button', { name: /search/i });

    return { input, button };
  };

  test('renders the search form correctly', () => {
    render(<SearchForm userName="John Doe" setUserName={setUserNameMock} />);
    const { input, button } = getFormElements();
    expect(input).toHaveValue('John Doe');
    expect(button).toBeInTheDocument();
  });
  test('displays empty input when userName is empty', () => {
    render(<SearchForm userName="" setUserName={setUserNameMock} />);
    const { input } = getFormElements();
    expect(input).toHaveValue('');
  });
  test('updates input value on change', async () => {
    render(<SearchForm userName="" setUserName={setUserNameMock} />);
    const { input } = getFormElements();
    await user.type(input, 'John Doe');
    expect(input).toHaveValue('John Doe');
  });
  //   test('shows toast when submitting empty input', async () => {
  //     render(<SearchForm userName='' setUserName={setUserNameMock} />);

  //     const { button } = getFormElements();
  //     await user.click(button);
  //     expect(mockToast).toHaveBeenCalledWith({
  //       description: 'Please enter a valid username',
  //     });
  //     expect(setUserNameMock).not.toHaveBeenCalled();
  //   });
  test('calls setUserName on valid form submission', async () => {
    render(<SearchForm userName="" setUserName={setUserNameMock} />);
    const { input, button } = getFormElements();
    await user.type(input, 'John Doe');
    await user.click(button);

    expect(setUserNameMock).toHaveBeenCalledWith('John Doe');
    // expect(mockToast).not.toHaveBeenCalled();
  });
});
