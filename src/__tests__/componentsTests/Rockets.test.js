import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from '../../components/rockets/Rockets';

describe('Rockets', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Rockets /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
