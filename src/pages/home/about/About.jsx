import SectionTitle from "../../../components/section title/SectionTitle";
import Technologies from "../technologies/Technologies";
import { Container } from "@mui/material";
import Btn from "../../../components/btn/Btn";
import aboutImg from '../../../assets/junayed.png'
import resume from '../../../assets/Resume.pdf'

const About = () => {

    return (
        <>
            <Technologies></Technologies>
            <Container>
                <div className="grid grid-cols-5 gap-12 items-center md:py-20 py-4">
                    <div className="col-span-2 lg:block hidden">
                        <img className="rounded-[30px]" src={aboutImg} />
                    </div>

                    <div className="col-span-5 lg:col-span-3 md:text-left text-center">
                        <SectionTitle tex heading='Meet Junayed Noman' subHeading='Front-End Developer | Curious Learner | Constantly Improving 🔥' mb='20px'></SectionTitle>
                        <p className="">Greetings! I'm Junayed Noman, a junior front-end developer with a passion for creating seamless digital experiences. 💻 My meticulous and intuitive approach enables me to design user interfaces that balance functionality with a touch of creativity.
                        </p>
                        <p className="mt-3 mb-5">🛠️ Proficient in front-end technologies, I navigate coding challenges with a commitment to constant improvement. My adaptability ensures a quick grasp of emerging technologies, contributing to efficient project outcomes.</p>
                        <a href={resume} download={'resume'}><Btn text='Download Resume'>
                        </Btn></a>
                    </div>

                </div>
            </Container>
        </>
    );
};

export default About;