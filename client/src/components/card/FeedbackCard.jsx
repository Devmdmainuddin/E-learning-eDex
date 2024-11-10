
import PropTypes from 'prop-types';
const FeedbackCard = ({ item }) => {
    const { name, image, department, description } = item;
    return (
        <div className="p-8 rounded-[30px] h-[294px] border border-gray-200 transition-all duration-500 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_32px_rgba(17,17,26,0.05)]">
            <div className="image">
                <div className="flex gap-2 relative">
                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                        <img src={image} alt="feedback" className=" w-full h-full object-cover rounded-full hover:scale-110 transition-all duration-500" />
                   
                    </div>

                    <div>
                        <h3 className="text-black  text-2xl font-semibold leading-8 tracking-[0.002em]">{name}</h3>
                        <p className="text-black  text-base font-normal leading-6 mt-2">{department}</p>
                    </div>
                    <img src="/qt.png" alt=""  className="absolute top-3 right-3"/>
                </div>
            </div>
            <div className="content mt-6">
                <p className="text-[#363A3D]  text-base font-normal leading-6">{description}</p>
            </div>
        </div>
    );
};
FeedbackCard.propTypes = {
    item: PropTypes.object,
}
export default FeedbackCard;