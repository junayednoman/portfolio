import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
    </>
    return (
        <Container>
            <div>
                <div className="navbar py-3 md:py-6 px-0">
                    <div className="navbar-start justify-between lg:w-1/2 w-full lg:flex-row flex-row-reverse lg:justify-start">
                        <div className="dropdown headerMenuDropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0 text-right">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to={'/'} className="text-2xl md:text-3xl text-[#406DD8] font-extrabold"><h2 className="text-[#3E6CD7]">Junayed <span className="">Noman</span></h2></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end md:block hidden text-right">
                        <a target="_blank" href="https://github.com/junayednoman" className="py-3 px-7 flex ml-auto items-center w-[120px] justify-center gap-2 hover:bg-[#3357ad] duration-200 text-white bg-[#406DD8] rounded-xl">Github <GitHubIcon></GitHubIcon></a>
                    </div>
                </div>
            </div>
        </Container>
    );
};




export default Navbar;