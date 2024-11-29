import { FaFacebook,FaInstagram,FaLinkedin,FaTiktok } from "react-icons/fa";
const Footer = () => {
    return ( 
        <footer className="mt-20 text-white text-center flex flex-col from-esperanza_cyan_blue bg-gradient-to-t">
            <div className="font-bold text-white flex flex-col justify-center items-center gap-6 drop-shadow-[0_0_10px_rgba(166,230,255,0.7)]">
                <img src="/esperanza_logo.svg" alt="Esperanza Logo" className="w-28 sm:w-36" />
                <p>Made by Esperanza Club Members</p>
                <div>
            <div className="flex justify-center items-center">
                <a href="https://www.facebook.com/esperanzaclub1" target="_blank" rel="noopener noreferrer"  className="text-white mx-2 hover:text-sky-400">
                    <FaFacebook size={25} />
                </a>
                <a href="https://www.instagram.com/esperanza_club/" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-sky-400">
                    <FaInstagram size={25} />
                </a>
                <a href="https://www.linkedin.com/company/esperanza-club/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-sky-400">
                    <FaLinkedin size={25} />
                </a>
                <a href="https://www.tiktok.com/@esperanza.club?_t=8kJsEKxlNA6&_r=1" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-sky-400">
                    <FaTiktok size={25} />
                </a>
            </div>
            <div>
                <p className="pt-4">Visit Our website : <a href="https://esperanza-club.tech" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Esperanza Club</a></p>
            </div>
            </div>
                <p className="text-xs sm:text-sm pb-5">© 2024 Esperanza Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
