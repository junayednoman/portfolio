import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import About from "./about/About";
import Projects from "../projects/projects";
import Contact from "./contact/Contact";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Junayed Noman - Front-End Developer</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;