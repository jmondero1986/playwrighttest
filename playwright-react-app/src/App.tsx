import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'dashboard'

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    } else {
      setIsLoggedIn(false);
      setCurrentPage('login');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  return (
    <div>
      {currentPage === 'dashboard' ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
