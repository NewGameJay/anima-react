import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatorTypeform = () => {
  const [gameGenres, setGameGenres] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save the response to the backend or state management
    console.log('Game Genres:', gameGenres);
    
    // Navigate to the next question or page
    navigate('/next-question'); // Update this to the actual route for the next question
  };

  return (
    <div>
      <h2>Welcome to New Game!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          What game genres do you like?
          <input
            type="text"
            value={gameGenres}
            onChange={(e) => setGameGenres(e.target.value)}
            required
          />
        </label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default CreatorTypeform;
