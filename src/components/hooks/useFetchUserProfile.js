import { useEffect, useState } from "react";

export const useFetchUserProfile = (id) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(`http://interactivasbackend.test/api/userProfile/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            console.log('Fetched data:', jsonData); // Añadir este log
            setData(jsonData);
        } catch (error) {
            setError(error);
            console.error('Error fetching data:', error); // Añadir este log
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            console.log('Fetching data for ID:', id); // Añadir este log
            getData();
        }
    }, [id]);

    return { data, loading, error };
};
