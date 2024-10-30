import { useState, useRef } from 'react';
import play from '../assets/play.svg';
import pause from '../assets/pause.svg';
import sound from '../assets/rumblingAudio.mp3';

export default function RumblingAudio() {
  const [control, setControl] = useState('pause');
  let rumblingAudio = useRef(new Audio(sound));

  if (control == 'pause') {
    rumblingAudio.current.pause();
  } else {
    rumblingAudio.current.play();
  }

  function controls() {
    if (control == 'pause') {
      setControl('play');
    } else {
      setControl('pause');
    }
  }

  return (
    <button className="audio" onClick={() => controls()}>
      {control == 'pause' ? (
        <img src={pause} className="controls" />
      ) : (
        <img src={play} className="controls" />
      )}
    </button>
  );
}
