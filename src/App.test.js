import React from 'react';
import { render } from '@testing-library/react';

jest.mock(
  'react-router-dom',
  () => ({
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: () => <div>Route</div>,
    useParams: () => ({ id: 'impetigo' }),
    useNavigate: () => jest.fn(),
  }),
  { virtual: true }
);

import App from './App';

test('renders App component without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
