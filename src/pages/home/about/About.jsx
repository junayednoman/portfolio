import SectionTitle from "../../../components/section title/SectionTitle";
import Technologies from "../technologies/Technologies";
import { Container } from "@mui/material";
import Btn from "../../../components/btn/Btn";
import aboutImg from '../../../assets/junayed.png'

const About = () => {
    const skills = [
        { type: 'HTML', level: 90 },
        { type: 'CSS', level: 87 },
        { type: 'Javascript', level: 80 },
        { type: 'React.js', level: 83 },
        { type: 'Node.js', level: 67 },
        { type: 'Express.js', level: 65 },
        { type: 'Mongodb', level: 50 },
    ];
    const barColors = {
        bar: '#406DD8',
        title: {
            text: '#fff',
            background: '#406DD8',
        },
    };
    return (
        <>
            <Technologies></Technologies>
            <Container>
                <div className="grid grid-cols-5 gap-8 items-center md:py-20 py-4">
                    <div className="col-span-5 lg:col-span-3 md:text-left text-center">
                        <SectionTitle tex heading='Meet Junayed Noman' subHeading='Front-End Developer | Curious Learner | Constantly Improving 🔥' align='left'></SectionTitle>
                        <p className="-mt-5">Greetings! I'm Junayed Noman, a junior front-end developer with a passion for creating seamless digital experiences. 💻 My meticulous and intuitive approach enables me to design user interfaces that balance functionality with a touch of creativity.
                        </p>
                        <p className="mt-3 mb-5">🛠️ Proficient in front-end technologies, I navigate coding challenges with a commitment to constant improvement. My adaptability ensures a quick grasp of emerging technologies, contributing to efficient project outcomes.</p>
                        <Btn text='Download Resume'></Btn>
                    </div>
                    <div className="col-span-2 lg:block hidden">
                        <img className="rounded-[30px]" src={aboutImg} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default About;