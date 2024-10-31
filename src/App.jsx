import Multimedia from './components/multimedia';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Outlet />
      <Multimedia />
    </>
  );
};

export default App;
