import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://interactivasbackend.test/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      const userId = data.user.id; // Obtener el ID del usuario de data.user
      
      navigate(`/homePage/${userId}`); // Navigate to homepage on successful login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};
