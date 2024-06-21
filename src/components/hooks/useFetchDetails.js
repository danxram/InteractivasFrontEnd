import { useEffect, useState } from "react";

export const useFetchDetails = (id) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    const getData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(`http://interactivasbackend.test/api/details/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

     console.log(data); 

    return { data, loading, error };
};
