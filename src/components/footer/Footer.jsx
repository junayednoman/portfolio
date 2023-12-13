import { Container } from "@mui/material";
import facebookImg from '../../assets/facebook.png'
import twitterImg from '../../assets/twitter.png'
import linkedinImg from '../../assets/linkedin.png'
import InstagramImg from '../../assets/Instagram.png'

const Footer = () => {
    return (
        <div className="bg-[#406ed815] py-8">
            <Container>
                <footer className="footer items-center justify-between gap-6">
                    <aside className="items-center grid-flow-col">
                        <p className="text-gray-600 md:text-left text-center">Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-semibold text-[#406DD8]">Junayed Noman</span></p>
                    </aside>
                    <div className="flex gap-3 w-full justify-center">
                        <a href="#" target="_blank" className="hover:scale-110 w-[32px] duration-200"><img className="w-full" src={linkedinImg} alt="" /></a>
                        <a href="#" target="_blank" className="hover:scale-110 w-[32px] duration-200"><img className="w-full" src={facebookImg} alt="" /></a>
                        <a href="https://twitter.com/junayednoman" target="_blank" className="hover:scale-110 w-[32px] duration-200"><img className="w-full" src={twitterImg} alt="" /></a>
                        <a href="https://www.instagram.com/junayednoman.me/" target="_blank" className="hover:scale-110 w-[32px] duration-200"><img className="w-full" src={InstagramImg} alt="" /></a>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;