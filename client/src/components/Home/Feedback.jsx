import Container from "../shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../style/swipers.css'
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import FeedbackCard from "../card/FeedbackCard";

const Feedback = () => {
 const feedback=   [
        {
            "name": "Alice Johnson",
            "image": "/in3.jpg",
            "department": "Marketing",
            "description": "Alice provided valuable insights that helped shape our latest marketing campaign. Alice provided valuable insights that helped shape our latest marketing campaign."
        },
        {
            "name": "David Lee",
            "image": "/in2.jpg",
            "department": "Product Development",
            "description": "David's feedback on product design was instrumental in improving user experience."
        },
        {
            "name": "Sophia Carter",
            "image": "/in1.jpg",
            "department": "Customer Support",
            "description": "Sophia received outstanding reviews from clients for her excellent service and quick response time."
        },
        {
            "name": "James White",
            "image": "/in4.jpg",
            "department": "Human Resources",
            "description": "James shared helpful suggestions on employee engagement initiatives that boosted team morale."
        },
        {
            "name": "Linda Brown",
            "image": "/in3.jpg",
            "department": "Finance",
            "description": "Linda provided crucial financial analysis and budget recommendations that supported strategic decisions."
        },
        {
            "name": "Michael Green",
            "image": "/in2.jpg",
            "department": "IT",
            "description": "Michael's feedback on network security enhancements helped prevent potential vulnerabilities."
        }
    ]
    
    return (
        <div className="my-[100px]">
            <Container>
            <div className=" ">
                    <h1 className=" text-[33px] font-semibold  text-[#06241B]">Student <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[85px] md:after:w-[155px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block px-2">Feedback</span>
                    </h1>
                    <p className=" text-[20px] font-normal leading-[28px] text-[#6D737A] mt-3">Various versions have evolved over the years, sometimes by accident,</p>
                </div>
                <div className="mt-[50px]">
                <Swiper
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            navigation={true}
                            pagination={true}
                            modules={[Autoplay,Navigation,Pagination]}
                            breakpoints={{
                             
                               
                                468: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                824: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                              
                            }}
                            spaceBetween={10}

                            className="mySwiper instructor"
                        >
                            {feedback.map((item, idx) => <SwiperSlide key={idx}>
                                <FeedbackCard item={item} />
                            </SwiperSlide>)}



                        </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Feedback;