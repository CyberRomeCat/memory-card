import App from './App';
import { FetchLocations, FetchTitans } from './components/FetchAPI';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'level/medium',
    element: <FetchTitans />,
  },
  {
    path: 'level/hard',
    element: <FetchLocations />,
  },
];

export default routes;
