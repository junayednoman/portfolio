import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading, align }) => {
    return (
        <div style={{ textAlign: align ? align : "center", marginBottom: '40px' }}>
            <h4 className="text-3xl mb-2 md:text-[42px] font-bold">{heading}</h4>
            <p>{subHeading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    align: PropTypes.string,
}

export default SectionTitle;