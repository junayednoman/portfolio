import { Container } from "@mui/material";
import Btn from "../../../components/btn/Btn";
import certificate from "../../../assets/Programming Hero certificate.pdf"

const Cta = () => {
    return (
        <Container>
            <div className="md:p-10 p-4 py-7 bg-[#39698a] rounded-md lg:flex-row flex-col flex items-center gap-4 md:gap-8 md:mb-0 mb-5">
                <div className="md:text-left text-center">
                    <h3 className="capitalize text-white text-2xl md:text-4xl">ready to hire the right talent <br className="lg:block hidden" /> for your company?</h3>
                    <p className="text-white mt-3 md:text-base text-[15px]">Hire a developer who is always eager to learn new technologies. My curiosity drives me to be consistent and patient in my learning journey, ensuring I stay updated and relevant in the ever-evolving tech industry.</p>
                </div>
                <div className="lg:w-[60%] w-full lg:text-right md:text-left text-center">
                    <a href={certificate} download={'certificate of Junayed Noman'}><Btn text='Download Certificate'>
                    </Btn></a>
                </div>
            </div>
        </Container>
    );
};

export default Cta;