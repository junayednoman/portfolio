import { Link } from "react-router-dom";
import notFound from '../../assets/404.png'
const ErrorPage = () => {
    return (
        <div className="text-center md:mt-24 mt-10">
            <img className="mx-auto w-[250px] md:w-[350px]" src={notFound} alt="" />
            <h3 className="md:text-6xl text-4xl mt-5 mb-3"><span className="text-[#3E6CD7]">Oops!</span> Page not found.</h3>
            <Link to={'/'} className="underline font-medium text-[#E5A528]">Back to home</Link>
        </div>
    );
};

export default ErrorPage;