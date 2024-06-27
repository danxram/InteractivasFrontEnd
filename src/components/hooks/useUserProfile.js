// src/hooks/useUserProfile.js
import { useState } from 'react';

export const useUserProfile = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const saveUserProfile = async (userId, sleepHours,physicalActivity,healthIssues,stress,specificDiet,aditionalInfo) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://interactivasbackend.test/api/user-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          users_id: userId, 
          sleep_hours: sleepHours,
          physical_activity: physicalActivity,
          health_issues: healthIssues,
          stress: stress,
          specific_diet: specificDiet,
          aditional_info: aditionalInfo
        }),
      });

      if (!response.ok) {
        //const errorData = await response.json();
       // throw new Error(errorData.message || 'Failed to save user profile');
       console.log(response.status);
      }

      const data = await response.json();
      console.log(data);
      //return data.userProfile;
    } catch (err) {
      setError(err.message);
      console.log(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { saveUserProfile, error, loading };
};
