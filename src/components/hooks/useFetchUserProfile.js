import { useEffect, useState } from "react";

export const useFetchUserProfile = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Recuperar el objeto 'user' del localStorage y obtener el 'id' del usuario
                const user = JSON.parse(localStorage.getItem('user'));
                const userId = user ? user.id : null;

                if (!userId) {
                    throw new Error('User ID not found');
                }

                // Realizar la solicitud HTTP para obtener los datos del perfil de usuario
                const response = await fetch(`http://interactivasbackend.test/api/userProfile/${userId}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                console.log('Fetched data:', jsonData);
                setData(jsonData);
            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    return { data, loading, error };
};
