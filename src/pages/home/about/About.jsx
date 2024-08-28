import SectionTitle from "../../../components/section title/SectionTitle";
import Technologies from "../technologies/Technologies";
import { Container } from "@mui/material";
import Btn from "../../../components/btn/Btn";
import aboutImg from "../../../assets/junayed noman.jpg";
import resume from "../../../assets/Junayed Noman Resume.pdf";

const About = () => {
  return (
    <>
      <Technologies></Technologies>
      <Container>
        <div
          className="grid grid-cols-5 gap-14 items-center md:py-20 py-4"
          id="about"
        >
          <div className="col-span-2 lg:block hidden">
            <img className="rounded-[30px]" src={aboutImg} />
          </div>

          <div className="col-span-5 lg:col-span-3 md:text-left text-center">
            <SectionTitle
              tex
              heading="Meet Junayed Noman"
              subHeading="Front-End Developer | Curious Learner | Constantly Improving 🔥"
              mb="20px"
            ></SectionTitle>
            <p className="">
              At the end of 2021, I began my journey with HTML and CSS,
              expanding into Bootstrap, PHP, and MySQL(basic). I freelanced with these
              skills until June 2023. During the freelance period, I have worked
              with raw HTML and CSS. Then I started learning JavaScript-based
              front-end and basic back-end development in July 2023.
            </p>
            <p className="mt-3 mb-5">
              Afterward, I collaborated on some contractual projects. In
              particular, I got an opportunity to develop a ‘data collection
              system’ for around 200 primary schools that won first place in a
              divisional competition of the primary education department. That
              significantly enhanced my skills. These projects were a
              blessing for me. I have learned such knowledge that I couldn’t
              learn without working on such real-world projects.
            </p>
            <p className="mt-3 mb-5">
              Currently, I am learning new technologies to become a proficient
              MERN stack developer.
            </p>
            <a href={resume} download={"resume of Junayed Noaman"}>
              <Btn text="Download Resume"></Btn>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
