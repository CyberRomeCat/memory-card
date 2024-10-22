import { useState } from 'react';
import question from '../assets/question.svg';
import bubble from '../assets/bubblechat.svg';

export default function Instructions() {
  const [show, setShow] = useState(false);
  function showInstuctions() {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <div className="instructions-container">
      <button className="show-instructions">
        {show && (
          <div className="bubble-guide">
            <img className="instructions" src={bubble} />
            <p className="text-instruc">
              Get points by clicking on an image but dont click any more than
              once!
            </p>
          </div>
        )}
        <img src={question} onClick={() => showInstuctions()} />
      </button>
    </div>
  );
}
