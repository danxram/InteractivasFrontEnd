import { FormsContainer } from "../activity/FormsContainer";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export function FormsInfo() {
    return (
        <>
        <div className="bg-white">
            <Header />
            <FormsContainer />
            <Footer />
        </div>
        </>
    );
}