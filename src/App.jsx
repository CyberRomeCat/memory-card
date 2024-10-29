import Multimedia from './components/multimedia';
import './App.css';
import DifficultyLevels from './components/DifficultyLevels';
import Header from './components/displayHeader';
const App = () => {
  return (
    <>
      <Header />
      <DifficultyLevels />
      <Multimedia />
    </>
  );
};

export default App;
