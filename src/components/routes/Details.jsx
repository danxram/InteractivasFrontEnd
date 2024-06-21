import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { useParams } from 'react-router-dom';
import { DetailContainer } from "../activity/DetailContainer";

export function Details() {
    const { id } = useParams();
    

console.log(id)
    return (
        <div>
            <Header />
            <DetailContainer id={id} />
            <Footer />
        </div>
    );
}