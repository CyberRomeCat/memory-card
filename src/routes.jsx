import App from './App';
import { FetchLocations, FetchTitans } from './components/FetchAPI';
import { DefaultProfile } from './components/DefaultProfile';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: 'level/medium', element: <FetchTitans /> },
      { path: 'level/hard', element: <FetchLocations /> },
    ],
  },
];

export default routes;
