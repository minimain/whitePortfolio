import { useState, useEffect } from 'react';
import'styles/titlename.scss';
function Titlename() {
  const [index, setIndex] = useState(0);
  const titles = [
    ['KIM', 'MIN', 'HEE'],
    ['UI/UX', 'MIN', 'HEE'],
    ['MIN', 'HEE', 'P.M']
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => (index + 1) % titles.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='letter_title'>
      {titles[index].map((title, i) => (
        <h1 key={i}>
          {title.split('').map((letter, j) => (
            <span key={j}>{letter}</span>
          ))}
        </h1>
      ))}
    </div>
  );
}

export default Titlename;