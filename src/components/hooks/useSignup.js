import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (first_name, last_name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://interactivasbackend.test/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name, email, password}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }
      const data = await response.json();

      
      
      navigate(`/homePage/${data.user.id}`); // Navigate to the form page on successful signup
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, error, loading };
};

