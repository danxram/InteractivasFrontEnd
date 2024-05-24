
import "../../index.css";
import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';
import {SignUpContainer} from '../activity/SignUpContainer';

export function SignUp() {
   

    return (
        <div className="bg-white">
            <Header />
           <SignUpContainer/>
            <Footer />
        </div>
    )
}
