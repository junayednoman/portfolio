import { Container } from "@mui/material";
import SectionTitle from "../../../components/section title/SectionTitle";

const Contact = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-5 lg:gap-12 items-center md:pb-20 pb-10 md:pt-12 pt-4">
                <div className="md:text-left text-center">
                    <SectionTitle mb='15px' heading='Get in Touch' subHeading='Contact Me for Collaboration.'></SectionTitle>
                    <p>Thank you for visiting my portfolio! I'm excited about the possibility of contributing to innovative projects. If you have opportunities that align with my skills and experience or if you'd like to discuss potential collaborations, I'd love to hear from you. Please feel free to reach out through the contact form or directly via email. </p>
                    <p className="mt-2"><span className="font-semibold">Email:</span> junayednoman05@gmail.com</p>
                </div>
                <div>
                    <form className="">
                        <div className="lg:flex block gap-4 items-center">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input h-[40px] input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" className="input h-[40px] input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input h-[40px] input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="input h-[80px] input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn hover:bg-[#3357ad] duration-200 text-white bg-[#406DD8] rounded-xl">Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;