import { Link } from 'react-router-dom';

export default function DifficultyLevels() {
  return (
    <div className="main-page">
      <div className="title-mainpage">DIFFICULTY LEVELS</div>
      <div className="links">
        <Link to="level/medium">Medium</Link>
        <Link to="level/hard">Hard</Link>
      </div>
    </div>
  );
}
