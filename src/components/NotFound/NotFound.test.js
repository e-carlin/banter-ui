import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import NotFound from './NotFound';

it('NotFound renders correctly', () => {
  const tree = renderer.create(<Router><NotFound /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
