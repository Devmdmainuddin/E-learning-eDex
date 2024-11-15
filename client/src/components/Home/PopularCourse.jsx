import PopularCard from "../card/PopularCard";
import Container from "../shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../../style/popularCourse.css'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';


const PopularCourse = () => {
    const Popular = [
        {
            "id": 1,
            "title": "JavaScript for Beginners",
            "description": "Learn the fundamentals of JavaScript programming with hands-on examples.",
            "instructor": "John Doe",
            "category": "Programming",
            "duration": "5 hours",
            "rating": 4.8,
            "price": 29.99,
            "image": "/h1.jpeg",
            "studentsEnrolled": 1200
        },
        {
            "id": 2,
            "title": "Mastering React",
            "description": "Advanced React concepts and state management with Redux and Context API.",
            "instructor": "Jane Smith",
            "category": "Web Development",
            "duration": "8 hours",
            "rating": 4.9,
            "price": 49.99,
            "image": "/h2.jpeg",
            "studentsEnrolled": 2500
        },
        {
            "id": 3,
            "title": "Python for Data Science",
            "description": "Learn Python programming and data science tools like Pandas, NumPy, and Matplotlib.",
            "instructor": "Alice Johnson",
            "category": "Data Science",
            "duration": "7 hours",
            "rating": 4.7,
            "price": 39.99,
            "image": "/h3.jpeg",
            "studentsEnrolled": 1800
        },
        {
            "id": 4,
            "title": "UI/UX Design Principles",
            "description": "Learn the fundamentals of designing great user interfaces and user experiences.",
            "instructor": "Michael Brown",
            "category": "Design",
            "duration": "6 hours",
            "rating": 4.6,
            "price": 34.99,
            "image": "/h4.jpeg",
            "studentsEnrolled": 900
        },
        {
            "id": 5,
            "title": "Web Development Bootcamp",
            "description": "Full-stack web development with HTML, CSS, JavaScript, Node.js, and MongoDB.",
            "instructor": "Sarah Lee",
            "category": "Web Development",
            "duration": "12 hours",
            "rating": 5.0,
            "price": 59.99,
            "image": "/h1.jpeg",
            "studentsEnrolled": 3200
        },
        
    ]

    return (
        <div className=" bg-[#EDF9F6] py-[100px]">
            <Container>
                <div className="flex gap-6 justify-between items-center flex-col sm:flex-row">
                    <div className="w-full sm:w-1/4  mx-auto">
                        <h1 className="text-center text-[33px] font-semibold  text-[#06241B]">Most  <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[85px] md:after:w-[155px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block px-2">Popular</span>  
                        Course</h1>
                        <p className="text-center text-[20px] font-normal leading-[28px] text-[#6D737A] mt-3">Various versions have evolved over the years, sometimes by accident,</p>
                    </div>
                    <div className=" w-full sm:w-3/4 ">

                    <Swiper
                            loop={true}
                            navigation={true}
                            pagination={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            modules={[Navigation,Pagination,Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                               
                                895: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                                1324: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                },
                            }}
                            spaceBetween={10}

                            className="mySwiper Popular"
                        >
                            {Popular.map((item, idx) => <SwiperSlide key={idx}>
                                <PopularCard item={item} />
                            </SwiperSlide>)}



                        </Swiper>

                    </div>
                </div>
            </Container>
        </div>


    );
};

export default PopularCourse;