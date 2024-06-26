import { useEffect, useState } from "react";

export const useFetchEvents = (id) => {
    const [data, setData] = useState({ events: [], trafics: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch(`http://interactivasbackend.test/api/homepage/${id}`);
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
        getData();
    }, [id]);

    console.log(data)
    return { data, loading, error };
};
