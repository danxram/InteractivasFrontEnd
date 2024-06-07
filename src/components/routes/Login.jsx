
import "../../index.css";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import {LoginContainer} from '../activity/LoginContainer';

export function Login() {
    

    return (
        <div className="bg-white">
            <Header />
            <LoginContainer/>
            <Footer />
        </div>
    );
}
