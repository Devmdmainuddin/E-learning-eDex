import Container from "../shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import PopularCard from "../card/PopularCard";
import InstructorCard from "../card/InstructorCard";

const Instructor = () => {
    const instructor = [
        {
            name: 'John Doe',
            image: '/in1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pulvinar dolor. Curabitur auctor, enim vitae condimentum finibus, lectus justo tempor ex, sed iaculis lectus est id turpis.',
            courses: 10,
            reviews: 4,
            ratings: 4.5,
            department: 'UI-UX Design Expart',
        },
        {
            name: 'Jane Doe',
            image: '/in2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pulvinar dolor. Curabitur auctor, enim vitae condimentum finibus, lectus justo tempor ex, sed iaculis lectus est id turpis.',
            courses: 15,
            reviews: 5,
            ratings: 4.8,
            department: 'Social Media Expart',
        },
        {
            name: 'David Doe',
            image: '/in3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pulvinar dolor. Curabitur auctor, enim vitae condimentum finibus, lectus justo tempor ex, sed iaculis lectus est id turpis.',
            courses: 20,
            reviews: 3,
            ratings: 4.3,
            department: 'Business Idea Expart',
        },
        {
            name: 'Emma Doe',
            image: '/in4.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pulvinar dolor. Curabitur auctor, enim vitae condimentum finibus, lectus justo tempor ex, sed iaculis lectus est id turpis.',
            courses: 12,
            reviews: 2,
            ratings: 4.7,
            department: 'Photograpy Expart',
        },
        {
            name: 'Michael Doe',
            image: '/in3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pulvinar dolor. Curabitur auctor, enim vitae condimentum finibus, lectus justo tempor ex, sed iaculis lectus est id turpis.',
            courses: 18,
            reviews: 1,
            ratings: 4.9,
            department: 'Photograpy Expart',
        }
    ];
    
    return (
        <div>
            <Container>
            <div className=" ">
                    <h1 className=" text-[33px] font-semibold  text-[#06241B]">Our Best  <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[85px] md:after:w-[155px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block px-2">Popular</span>
                    instructor</h1>
                    <p className=" text-[20px] font-normal leading-[28px] text-[#6D737A] mt-3">Various versions have evolved over the years, sometimes by accident,</p>
                </div>
                <div className="w-full  p-6 pb-[100px] sm:py-[100px] overflow-hidden">

                    <Swiper
                            loop={true}
                            autoplay={true}
                            navigation={true}
                            pagination={true}
                            modules={[Navigation,Pagination]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                               
                                568: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                                824: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                },
                                1324: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 1,
                                },
                                // 1624: {
                                //     slidesPerView: 4,
                                //     slidesPerGroup: 1,
                                // },
                            }}
                            spaceBetween={10}

                            className="mySwiper featured-products "
                        >
                            {instructor.map((item, idx) => <SwiperSlide key={idx}>
                                <InstructorCard item={item} />
                            </SwiperSlide>)}



                        </Swiper>

                    </div>
            </Container>
        </div>
    );
};

export default Instructor;