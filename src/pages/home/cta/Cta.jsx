import { Container } from "@mui/material";
import Btn from "../../../components/btn/Btn";
import resume from '../../../assets/Junayed Noman.pdf'

const Cta = () => {
    return (
        <Container>
            <div className="md:p-10 p-4 py-7 bg-[#3e6cd7bb] rounded-md lg:flex-row flex-col flex items-center gap-4 md:gap-8 md:mb-0 mb-5">
                <div className="md:text-left text-center">
                    <h3 className="capitalize text-white text-2xl md:text-4xl">ready to hire the right talent <br className="lg:block hidden" /> for your company?</h3>
                    <p className="text-white mt-3 md:text-base text-[15px]">Applied expertise in Front-end to deliver top-notch solutions during a one-year freelance for diverse clients over the world. Collaborated closely with clients to understand and fulfill their unique design requirements. Aiming to contribute to innovative projects at a company making waves.</p>
                </div>
                <div className="lg:w-[60%] w-full lg:text-right text-center">
                    <a href={resume} download={'resume'}><Btn text='Download My Resume'>
                    </Btn></a>
                </div>
            </div>
        </Container>
    );
};

export default Cta;