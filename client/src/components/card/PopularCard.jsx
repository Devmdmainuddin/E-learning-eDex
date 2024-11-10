import Image from "../shared/Image";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
const PopularCard = ({item}) => {
    const{image,title,price,rating,category}= item;
    return (
        <div className="p-4 bg-white rounded-[8px] ">
            <div className="image relative  h-[207px]">
                <Image src={image} className=' rounded-[8px]' />
                <span className="text-[#1b1d1f] bg-white absolute top-3 left-3 font-sans text-base font-medium leading-6 py-[6px] px-[13px] rounded-[6px]">{category}</span>
            </div>
            <div className="content">
                <h3 className="text-[#363a3d] font-sans text-lg font-medium leading-7 my-4">{title}</h3>
               <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-2">
                <span><FaStar className="text-[#FFC27A] text-lg"/></span> 
                <span><FaStar className="text-[#FFC27A] text-lg"/></span>
                <span><FaStar className="text-[#FFC27A] text-lg"/></span>
                <span><FaStar className="text-[#FFC27A] text-lg"/></span>
                <span><FaStar className="text-[#FFC27A] text-lg"/></span>
                </div>
                <span className="text-[#52565c] font-sans text-lg font-normal leading-7">({rating})</span>
                
               </div>

            </div>
            <hr className="my-4"/>
            <p>${price}</p>
            
        </div>
    );
};
PopularCard.propTypes = {
    item: PropTypes.object,
}
export default PopularCard;