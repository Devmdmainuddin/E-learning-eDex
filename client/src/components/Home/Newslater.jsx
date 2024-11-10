import React from 'react';
import Container from '../shared/Container';

const Newslater = () => {
    return (
        <div className='py-16 md:py-[164px] bg-[#EDF9F6]'>
            <Container>
                <div className='flex flex-wrap gap-[75px] justify-between items-center'>
                    <div className="image mx-auto">
                        <div className='w-[346px] md:w-[570px] h-[320px] relative  border border-[#20B486] rounded-[70px] '>
                            <img src="/StarFour.png" alt="newslater-image" className='roted absolute -left-5 top-0 z-20' />
                            <img src="/Vector 3.png" alt="newslater-image" className=' absolute -right-[92px] top-0 z-20' />
                            <div className='w-[346px] md:w-[570px] h-[320px] absolute -left-5 -bottom-5 z-20'>
                                <img src="/nn.jpg" alt="newslater-image" className='w-full h-full object-cover rounded-[70px] ' />
                            </div>
                            <div className='w-[30px] h-[30px] absolute -right-[15px] bg-[#6D39E9] bottom-12 z-30 rounded-full'></div>
                        </div>

                    </div>
                    <div className="content w-full md:w-[534px] mx-auto">
                    <h1 className="text-[40px] font-semibold leading-[48px]  text-[#06241B]">Join   <span className="text-[#20B486]">World{`'`}s largest</span>  
                    learning platform today </h1>
                        <p className="text-[16px] font-normal leading-[24px] text-[#6D737A] mt-6">Start learning by registering for free</p>
                        <button className="px-6 py-3 bg-[#20b486] text-white rounded-[8px] mt-[50px]">Sign up for Free</button>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Newslater;