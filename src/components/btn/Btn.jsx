import PropTypes from 'prop-types';

const Btn = ({ text }) => {
    return (
        <div>
            <button className="py-3 px-7 hover:bg-[#3357ad] duration-200 text-white bg-[#406DD8] rounded-xl">{text}</button>
        </div>
    );
};

Btn.propTypes = {
    text: PropTypes.string
}

export default Btn;