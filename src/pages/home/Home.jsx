import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import About from "./about/About";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Junayed Noman - Front-End Developer</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;