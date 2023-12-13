import { Container } from "@mui/material";
import bannerImg from '../../../assets/banner bg.png'
import Btn from "../../../components/btn/Btn";
const Banner = () => {
    return (
        <Container>
            <div className="grid grid-cols-5 gap-14 items-center md:py-20 py-4">
                <div className="col-span-5 lg:col-span-3 md:text-left text-center">
                    <p className=" py-2 px-6 text-sm bg-[#e9a93242] hidden md:inline-block rounded-full">Junayed Noman</p>
                    <h1 className="md:text-[65px] text-4xl md:leading-[80px] font-bold md:mb-4 md:mt-0 mt-2 mb-2">Seasoned Front-end Developer</h1>
                    <p className="my-4 md:mb-8 mb-4">I'm Junayed Noman, a junior front-end developer with a passion for creating seamless digital experiences. 💻 My meticulous and intuitive approach enables me to design user interfaces that balance functionality with a touch of creativity.</p>
                    <Btn text='Say Hello👋'></Btn>
                </div>
                <div className="col-span-2 lg:block hidden">
                    <img className="" src={bannerImg} />
                </div>
            </div>
        </Container>

    );
};

export default Banner;