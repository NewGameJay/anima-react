import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this line
import CreatorProfile from './creatorprofile';
import StudioProfile from './studioprofile';

const SignUp = () => {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    displayName: '',
    twitterHandle: '',
    studioName: '',
    gameTitle: '',
  });
  const navigate = useNavigate(); // Change this line

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = userType === 'creator' ? {
      type: 'creator',
      name: formData.name,
      email: formData.email,
      displayName: formData.displayName,
      twitterHandle: formData.twitterHandle,
    } : {
      type: 'studio',
      studioName: formData.studioName,
      email: formData.email,
      gameTitle: formData.gameTitle,
      twitterHandle: formData.twitterHandle,
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
        console.log(`${userType} profile submitted successfully`);
        navigate('/creator-typeform'); // Navigate to the first typeform question
      } else {
        console.error('Error submitting profile');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      {!userType ? (
        <div>
          <button onClick={() => handleUserTypeSelect('creator')}>Sign Up as Creator</button>
          <button onClick={() => handleUserTypeSelect('studio')}>Sign Up as Game Studio</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {userType === 'creator' && (
            <>
              <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input type="text" name="displayName" placeholder="Display Name" onChange={handleChange} required />
              <input type="text" name="twitterHandle" placeholder="Twitter Handle" onChange={handleChange} required />
            </>
          )}
          {userType === 'studio' && (
            <>
              <input type="text" name="studioName" placeholder="Studio Name" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input type="text" name="gameTitle" placeholder="Game Title" onChange={handleChange} required />
              <input type="text" name="twitterHandle" placeholder="Twitter Handle" onChange={handleChange} required />
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
