import React, { useState } from 'react';

const CreatorProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      type: 'creator', // Indicate that this is a creator submission
      name,
      email,
      displayName,
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
        console.log('Creator profile submitted successfully');
      } else {
        console.error('Error submitting creator profile');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h2>Creator Profile Setup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Display Name:
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Twitter Handle:
            <input
              type="text"
              value={twitterHandle}
              onChange={(e) => setTwitterHandle(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatorProfile;
