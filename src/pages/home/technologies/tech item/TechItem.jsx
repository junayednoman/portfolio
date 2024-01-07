import { useState } from "react"
import PropTypes from "prop-types";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TechItem = ({ techItem }) => {

    const [tooltipText, setTooltipText] = useState('')
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const handleTooltip = (itemName) => {
        setTooltipText(itemName)
        setTooltipOpen(true)
    }
    const removeTooltip = () => {
        setTooltipOpen(false)
    }
    return (
        <div onMouseLeave={removeTooltip} onMouseEnter={() => handleTooltip(techItem.tooltipText)} className={`cursor-pointer p-5 min-h-[140px] rounded-[20px] text-center space-y-2 relative w-[150px] border-2 border-white duration-300`} style={{ background: techItem.bgColor, borderColor: tooltipOpen && techItem.borderCL}}>
            <img className='max-w-[70px] max-h-[70px] mx-auto' src={techItem.icon} alt="" />
            <h4 className='text-white text-sm font-semibold'>{techItem.name}</h4>
            <div className={`${tooltipOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none'} -left-[10%] duration-300 absolute top-[105%] p-3 rounded-xl text-xs w-[200px] text-white`} style={{ backgroundColor: techItem.bgColor }}>
                <PlayArrowIcon style={{ color: techItem.bgColor }} className="-rotate-90 absolute -top-[15px] left-[40%]"></PlayArrowIcon>
                {tooltipText}
            </div>
        </div>
    );
};

TechItem.propTypes = {
    techItem: PropTypes.object
}

export default TechItem;