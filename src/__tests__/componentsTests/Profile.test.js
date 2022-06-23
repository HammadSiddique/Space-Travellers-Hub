import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';
import Profile from '../../components/profile/Profile';

const MockMyProfileComponent = () => (
  <Provider store={store}>
    <Profile />
  </Provider>
);

describe('My profile component', () => {
  it('renders without crashing', () => {
    render(<MockMyProfileComponent />);
    const missionsHeaderText = screen.getByText(/My Missions/i);
    expect(missionsHeaderText).toBeInTheDocument();
  });
});
