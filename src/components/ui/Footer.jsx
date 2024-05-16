import "../../index.css";
import logoYT from '../../assets/imgs/yt.svg';
import logoEML from "../../assets/imgs/eml.svg";
import logoIG from "../../assets/imgs/insta.svg";
import logoFB from "../../assets/imgs/fb.svg";

export function Footer() {
    return (

        <footer className="bg-[#262626] mt-32">
        <div className="flex flex-col pb-10">
            <a className="flex justify-center sm:justify-start m-20 " href="">
                <img src="./img/logo.png" alt="" />
            </a>
            <div className="flex flex-row justify-center gap-11 sm:gap-24">
                <a href="">
                    <img src={logoYT} alt="yt-logo" />
                </a>
                <a href="">
                    <img src={logoEML} alt="em-logo" />
                </a>
                <a href="">
                    <img src={logoIG} alt="ig-logo" />
                </a>
                <a href="">
                    <img src={logoFB} alt="fb-logo" />
                </a>
            </div>
            <div className="flex flex-col justify-center gap-4 p-11 ">
                <p className="font-semibold font-main text-center text-[#ffffff] text-xl sm:text-3xl tracking-widest">Contact Us</p>
                <p className="font-normal font-main text-center text-[#ffffff] text-lg sm:text-3xl tracking-widest">+506 87920989</p>
                <a  href='mailto:eventmate@gmail.com' className="font-normal underline font-main text-center text-[#ffffff] text-lg sm:text-3xl tracking-widest">eventmate@gmail.com</a>
            </div>
        </div>
    </footer>



    )
}