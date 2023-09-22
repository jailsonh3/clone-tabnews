import { useState } from 'react'

function Home () {
  const [displayedWord, setDisplayedWord] = useState('');
  const [emoji, setEmoji] = useState('');

  const handleLetterClick = (letter) => {
    const word = displayedWord + letter;
    if (word === 'DOPAMINA') {
      setDisplayedWord('DOPAMINA');
      setEmoji('🤩')
    } else if ('DOPAMINA'.startsWith(word)) {
      setDisplayedWord(word);
    } else {
      setDisplayedWord('');
      setEmoji('')
    }
  };

  return (
    <div style={{ textAlign: 'center', fontSize: 24, fontFamily: 'monospace' }}>
      <h1>
        "<span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('D')}>D</span>entro,{' '}
          <span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('O')}>O</span>portunidades{' '}
          <span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('P')}>P</span>ulsam{' '}
          <span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('A')}>A</span>legria,{' '}
          <span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('M')}>M</span>omentos{' '}
          <span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('I')}>I</span>ncríveis,{' '}
          <span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('N')}>N</span>ovos{' '}
          <span style={{ opacity: 0.89, cursor: 'pointer'}} onClick={() => handleLetterClick('A')}>A</span>res."{' '}
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: 64, fontFamily: 'monospace', color: '#ffcc00' }}>
        {displayedWord}<br/>
        {emoji}
      </h2>
    </div>
  );
}

export default Home