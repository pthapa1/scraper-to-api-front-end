import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import NavigationBar from '../navigation/navbar';
import Search from '../body/search';
import AddressSection from '../body/addressSection';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Static Component Testing', () => {
  test('should render navigaiton bar', () => {
    render(<NavigationBar />);

    const navBar = screen.getByRole('navigation', {
      name: /find address/i,
    });

    expect(navBar).toBeVisible();
    expect(navBar).toHaveAccessibleName(/(.*)address/i);
  });

  test('should render search box', () => {
    render(<Search />);
    const inputBox = screen.getByRole('textbox', { name: /search box/i });
    expect(inputBox).toBeVisible();
    expect(inputBox).toHaveDisplayValue('');
  });

  test('search button should be clickable', () => {
    render(<Search />);
    const searchButton = screen.getByRole('button', { name: /search button/i });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeVisible();
    fireEvent.click(searchButton);
  });

  test('explainer paragraph exists', () => {
    const addressList = {}; // when the addressList is empty.
    render(<AddressSection addressList={addressList} />);
    const staticText = screen.getByText(/(.*)type place name(.*)/i);
    expect(staticText).toBeInTheDocument();
    expect(staticText).toBeVisible();
  });
});
describe('Dynamic Components Testing', () => {
  const addressList = [
    '1',
    {
      name: 'Hotel nhow Brussels Bloom',
      address: 'Rue Bodenbroek 2, 1000 Bruxelles, Belgium',
      phone: '+3225181100',
    },
  ];
  const uid = () => 1;
  test('results should display', () => {
    render(<AddressSection addressList={addressList} uid={uid} />);
    const displayedResult = screen.getByRole('note', {
      name: /address container/i,
    });
    const businessName = screen.getByRole('note', {
      name: /business name/i,
    });
    const businessAddress = screen.getByRole('note', {
      name: /business address/i,
    });
    const businessPhone = screen.getByRole('note', { name: /business phone/i });

    expect(displayedResult).toBeInTheDocument();
    expect(displayedResult).toBeVisible();
    expect(displayedResult).toContainElement(businessName);
    expect(displayedResult).toContainElement(businessAddress);
    expect(displayedResult).toContainElement(businessPhone);
  });

  test('error Message does not appear initially without button click', () => {
    render(<Search />);
    const errorMessage = screen.queryByRole('alert', {
      name: /error message/i,
    });
    expect(errorMessage).not.toBeInTheDocument();
  });

  test('error Message Appears', async () => {
    render(<App />);

    const searchButton = screen.getByRole('button', { name: /search button/i });
    userEvent.click(searchButton);

    const loadingSpinner = screen.queryByRole('alert', {
      name: /loading content/i,
    });

    await waitForElementToBeRemoved(() => loadingSpinner);

    const errorMessage = await screen.getByRole('alert', {
      name: /error message/i,
    });
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeVisible();
  });

  test('do not show api loading before search', () => {
    const loadingSpinner = screen.queryByRole('alert', {
      name: /loading content/i,
    });
    expect(loadingSpinner).not.toBeInTheDocument();
  });
});
