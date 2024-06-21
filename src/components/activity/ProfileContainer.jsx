import "../../index.css";
import { useFetchUserProfile } from "../hooks/useFetchUserProfile";
import { CardEvent } from "../ui/CardEvent";
//import { Profile } from "../ui/Profile";

export function ProfileContainer({ id }) {

    const { data, loading, error } = useFetchUserProfile(id);
    console.log(data);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No data available</div>;

    return (
        <>
            <Profile
            id={data.id}
            userType={data.privileges_id}
            userPfp={data.image}
            username={data.first_name}
            lastname={data.last_name}
            userEmail={data.email}
            userEnjoined={data.created_at}
            />
        </>
    );
}
