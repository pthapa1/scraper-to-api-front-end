import { render, screen, cleanup } from '@testing-library/react';
import NavigationBar from '../navigation/navbar';

test('should render navigaiton bar', () => {
  render(<NavigationBar />);

  const navBar = screen.getByRole('navigation', {
    name: /find address/i,
  });

  expect(navBar).toBeVisible();
});
