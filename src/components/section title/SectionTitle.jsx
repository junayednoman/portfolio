import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading, mb }) => {
    return (
        <div style={{ marginBottom: mb }}>
            <h4 className="text-3xl mb-2 md:text-[42px] font-bold">{heading}</h4>
            <p className='text-lg'>{subHeading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    align: PropTypes.string,
    mb: PropTypes.string,
}

export default SectionTitle;