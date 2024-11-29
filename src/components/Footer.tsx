const Footer = () => {
    return ( 
        <footer className="mt-20 text-white text-center flex flex-col from-esperanza_cyan_blue bg-gradient-to-t">
            <div className="font-bold text-white flex flex-col justify-center items-center gap-6 drop-shadow-[0_0_10px_rgba(166,230,255,0.7)]">
                <img src="/esperanza_logo.svg" alt="Esperanza Logo" className="w-28 sm:w-40" />
                <p>Made by Esperanza Club Members</p>
                <p className="text-xs sm:text-sm pb-5">© 2024 Esperanza Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
