import PropTypes from 'prop-types';

const InstructorCard = ({item}) => {
    const {name,department,image}=item;
    return (
        <div className=" p-4 bg-white rounded-[16px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
            <div className="image w-full ">
                <img src={image} alt="instructor" className="rounded-[8px] w-full h-full  object-cover"/>
            </div>
            <div className="contant my-4">
                <h2 className="text-[20px] font-normal leading-[28px] text-[#1B1D1F]  text-center">{name}</h2>
                <p className="text-[16px] font-normal leading-[24px] text-[#6D737A] text-center">{department }</p>
            </div>
        </div>
    );
};
InstructorCard.propTypes = {
    item: PropTypes.object,
}
export default InstructorCard;