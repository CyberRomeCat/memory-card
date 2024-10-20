import { FetchTitans } from './components/FetchAPI';
import Multimedia from './components/multimedia';
import './App.css';
import { StrictMode } from 'react';

const App = () => {
  return (
    <StrictMode>
      <FetchTitans />
      <Multimedia />
    </StrictMode>
  );
};

export default App;
