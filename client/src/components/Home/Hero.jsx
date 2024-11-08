import { CiSearch } from "react-icons/ci";
import Container from "../shared/Container";


const Hero = () => {
    return (
        <div className="mt-[150px]">
            <Container>
                <div>
                    <div className="content">
                        <h3 className="capitalize text-[24px] font-semibold leading-[32px] tracking-[0.2%] text-[#20b486]">start to success</h3>
                        <h2 className="text-[56px] font-semibold leading-[72px] max-w-[677px] my-6">Access To <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[155px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block">5000+</span> Courses
                            from <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[95px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block">
                                300
                            </span>  Instructors
                            & Institutions</h2>
                            <p className="text-[20px] font-normal leading-[28px] text-[#6d737a] ">Various versions have evolved over the years, sometimes by accident,</p>
                   <div className="flex justify-between relative">
                    <input type="text" name="" id="" placeholder="What do want to learn?" className="p-6 text-[20px] font-normal leading-[28px] text-[#6d737a] w-full rounded-[8px] mt-8" style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}/>
                  <span className="absolute right-6 top-1/2 translate-y-1/2"><CiSearch /></span>
                   </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;