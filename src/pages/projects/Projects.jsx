import { Container } from "@mui/material";
import SectionTitle from "../../components/section title/SectionTitle";
import quill from "../../assets/quill.png";
import shareABite from "../../assets/share a bite.png";
import foodie from "../../assets/sdf.png";

const Projects = () => {
  return (
    <Container>
      <div className="text-center md:pt-10 pt-8 md:pb-20 pb-10" id="projects">
        <SectionTitle
          heading="My Latest Works in Code"
          subHeading="A Showcase of Projects and Passion"
          mb="30px"
        ></SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">
          <a
            className="tooltip tooltip-bottom"
            data-tip="Click to see live preview"
            href="https://quill-academy.web.app/"
            target="_blank"
          >
            <img
              className="hover:shadow-md duration-300 shadow-sm hover:shadow-[#3871c156] rounded-lg shadow-[#3871c156] border-t border-[#3871c130]"
              src={quill}
              alt=""
            />
          </a>

          <a
            className="tooltip tooltip-bottom"
            data-tip="Click to see live preview"
            href="https://go-sportify.vercel.app/"
            target="_blank"
          >
            <img
              className="hover:shadow-md duration-300 shadow-sm hover:shadow-[#83b82868] rounded-lg shadow-[#a4e8895b] border-t border-[#a4e8895b]"
              src={foodie}
              alt=""
            />
          </a>
          
          <a
            className="tooltip tooltip-bottom"
            data-tip="Click to see live preview"
            href="https://shareabit-3aa8b.web.app/"
            target="_blank"
          >
            <img
              className="hover:shadow-md duration-300 shadow-sm hover:shadow-[#9dc02055] rounded-lg shadow-[#9dc02055] border-t border-[#9dc02035]"
              src={shareABite}
              alt=""
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
