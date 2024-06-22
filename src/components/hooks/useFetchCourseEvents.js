import { useEffect, useState } from "react";

export const useFetchCourseEvents = (courseId, userId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch(`http://interactivasbackend.test/api/courseEvents/${courseId}/${userId}`);
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
    }, [courseId, userId]);

    console.log(data)
    return { data, loading, error };
};
