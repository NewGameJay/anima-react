import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/signup';
import CreatorTypeform from './components/CreatorTypeform';

const App = () => {
  return (
    <div className="app">
      <h1>Sign Up</h1>
      <Routes>
        <Route path="/creator-typeform" element={<CreatorTypeform />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;