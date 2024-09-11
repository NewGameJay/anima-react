import React, { useState } from 'react';

const StudioProfile = () => {
  const [studioName, setStudioName] = useState('');
  const [email, setEmail] = useState('');
  const [gameTitle, setGameTitle] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      type: 'studio', // Indicate that this is a studio submission
      studioName,
      email,
      gameTitle,
      twitterHandle,
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwDGKk9qVo0damvttncn08M2fBH3_UwaAMh7_RjTDdb6etVhocaWp6nKIh0AV86YEVR/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Studio profile submitted successfully');
      } else {
        console.error('Error submitting studio profile');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h2>Game Studio Profile Setup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Studio Name" value={studioName} onChange={(e) => setStudioName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Game Title" value={gameTitle} onChange={(e) => setGameTitle(e.target.value)} required />
        <input type="text" placeholder="Twitter Handle" value={twitterHandle} onChange={(e) => setTwitterHandle(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudioProfile;
