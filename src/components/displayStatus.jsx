import { useEffect, useState } from 'react';
import { FetchGiphy } from './FetchAPI';

export default function DisplayStatus({ status }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, [status]);

  if (status == 'loser' && visible == true) {
    return (
      <div className="popup">
        <div className="content">
          {' '}
          <FetchGiphy />
          <div className="status">YOU LOST!</div>
          <button
            id="playagain"
            onClick={() => {
              setVisible(false);
            }}
          >
            play again
          </button>
        </div>
      </div>
    );
  }

  if (status == 'winner' && visible == true) {
    return (
      <div className="popup">
        <div className="content">
          <div className="status">YOU WIN!</div>
          <button
            id="playagain"
            onClick={() => {
              setVisible(false);
            }}
          >
            play again
          </button>
        </div>
      </div>
    );
  }
}
