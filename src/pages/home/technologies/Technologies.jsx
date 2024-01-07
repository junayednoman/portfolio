import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import jsIcon from '../../../assets/js.png'
import tailwindIcon from '../../../assets/Tailwind CSS.png'
import nodeIcon from '../../../assets/node-js.png'
import mongoIcon from '../../../assets/mongo.png'
import reactIcon from '../../../assets/react.png'
import fireBaseIcon from '../../../assets/firebase.png'
import SectionTitle from '../../../components/section title/SectionTitle';
import TechItem from './tech item/TechItem';

const Technologies = () => {
    const techItems = [
        { borderCL: "#38BDF9", icon: tailwindIcon, name: "Tailwind", bgColor: "#11394b", tooltipText: 'Tailwind: Utility-first CSS framework and Daisy ui: The most popular component library for Tailwind CSS ' },
        { borderCL: "#FFDF00", icon: jsIcon, name: "JavaScript", bgColor: "#4c4300", tooltipText: 'JavaScript With Core Concepts. JS For DOM Manipulations, Event Handling To Make Websites Interactive. Load Data Using API. ES6 Features, Dev Tool, Browser API, Etc.' },
        { borderCL: "#00D8FF", icon: reactIcon, name: "ReactJS", bgColor: "#002b33", tooltipText: 'React Core Concepts, Most Popular Hooks, Custom Hooks, Virtual DOM, Context API, React Router, Recharts, Payment Gateway, Etc.' },
        { borderCL: "#6CAD46", icon: mongoIcon, name: "MongoDB", bgColor: "#203415", tooltipText: 'Find, Insert, Update, Delete, Operators, Pagination, Aggregate, Pipeline, Role Based Access, Etc.' },
        { borderCL: "#5FB148", icon: nodeIcon, name: "NodeJS", bgColor: "#1d3616", tooltipText: 'API, CRUD(get, post, update, delete), Express, JWT, Cors, Node Mailer, Server Hosting, etc.' },
        { borderCL: "#FFCA28", icon: fireBaseIcon, name: "Firebase", bgColor: "#4c3000", tooltipText: 'Complete Authentication And Authorization System.  Email/Password Based Authentication And Social Media Login Systems Like Google, Facebook, Github, Twitter, Etc.' },
    ]

    // API, CRUD(get, post, update, delete), Express, JWT, Cors, Node Mailer, Server Hosting, etc.



    return (
        <div className="py-10" id='techs'>
            <div className='text-center'>
                <SectionTitle heading='Technologies I am expert in' subHeading='Unlocking Possibilities with Proficiency in Front-End Technologies' mb='45px'></SectionTitle>
            </div>


            <div className='lg:hidden block'>
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={20}
                    className="mySwiper techSwiper justify-center"
                >
                    {
                        techItems.map(techItem =>
                            <SwiperSlide key={techItem.name} className="p-5 min-h-[140px] w-[100px] text-center space-y-2 relative" style={{ background: techItem.bgColor }}>
                                <img className='max-w-[70px] max-h-[70px] mx-auto' src={techItem.icon} alt="" />
                                <h4 className='text-white font-semibold'>{techItem.name}</h4>

                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <div className='justify-center items-center gap-3 lg:flex hidden'>
                {
                    techItems.map(techItem =>
                        <TechItem key={techItem.name} techItem={techItem}></TechItem>
                    )
                }
            </div>
        </div>
    );
};



export default Technologies;