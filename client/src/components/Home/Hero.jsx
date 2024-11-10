import { CiSearch } from "react-icons/ci";
import Container from "../shared/Container";
import Image from "../shared/Image";
import { FaStar } from "react-icons/fa";
const Hero = () => {
    return (
        <div className="md:my-[150px] mt-16">
            <Container>
                <div className="flex gap-[50px] flex-col lg:flex-row items-center justify-center">
                    <div className="content relative">
                        <h3 className="capitalize text-xl md:text-2xl font-semibold leading-[32px] tracking-[0.2%] text-[#20b486]">start to success</h3>
                        <h2 className="text-3xl md:text-[56px] font-semibold  md:leading-[72px] max-w-[677px] my-6">Access To <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[85px] md:after:w-[155px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block">5000+</span> Courses
                            from <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[65px] md:after:w-[95px]  after:h-[6px] after:left-0 after:-bottom-2 after:inline-block">
                                300
                            </span>  Instructors
                            & Institutions</h2>
                        <p className="text-[20px] font-normal leading-[28px] text-[#6d737a] ">Various versions have evolved over the years, sometimes by accident,</p>
                        <div className="flex justify-between relative">
                            <input type="text" name="" id="" placeholder="What do want to learn?" className=" p-3 md:p-6 text-[20px] font-normal leading-[28px] text-[#6d737a] w-full rounded-[8px] mt-8 outline-0" style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }} />
                            <span className="absolute right-6 top-1/2 translate-y-1/2"><CiSearch /></span>
                        </div>
                        <img src='/Sparkle.png' className='roted absolute -top-10 md:-top-[25px] -left-4 md:-left-[50px] w-[36px] h-[36px]'></img>
                    </div>
                    <div className="image w-full lg:w-[600px] h-[418px] ">

                        {/* <div className="w-[176px] md:w-[292px] lg:w-[312px] lg:h-[418px] relative">
                            <Image src='h1.jpg' className='skew-x-[5deg]'></Image>
                            <Image src='h2.jpg' className='lg:w-[302px] lg:h-[418px]  -skew-x-[5deg] rounded-[8px]  absolute -right-[260px] lg:-right-[282px] bottom-0'></Image>
                        </div> */}
                        <div className="w-[360px] h-[275px] mx-auto sm:h-[375px] md:w-[600px] md:h-[418px] relative">
                            <img src='/StarFour.png' className='roted w-[42px] h-[42px] origin-top-left rotate-[5deg]  rounded-[8px]  absolute -top-[15px] -left-[45px]'></img>
                            <img src='/h1.jpg' className='w-[175px] md:w-[295px] h-[275px] md:h-[418px] origin-top-right -rotate-[5deg] rounded-[8px]'></img>
                            <img src='/h2.jpg' className='w-[175px] md:w-[295px] h-[275px] md:h-[418px] origin-top-left rotate-[5deg]  rounded-[8px]  absolute top-0 right-0 z-10'></img>
                            <img src='/Vector 3.png' className='w-[119px] h-[125px] origin-top-left rotate-[5deg]  rounded-[8px]  absolute top-[25px] -right-[115px]'></img>
                            <div className="bg-white rounded-lg p-2 md:p-6 mt-5  flex gap-1 md:gap-3 items-center absolute bottom-[26px] md:bottom-[55px] -right-9 md:-right-[86px] z-30" style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}>
                                <span className="bg-[#E9F8F3] md:w-[44px] md:h-[44px] flex justify-center items-center rounded-[6px]"><FaStar className="text-[#20B486] roted" /></span>
                                <p className="flex gap-1 md:gap-3 items-center"><span>5.0</span>Rating</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;