import Container from "../shared/Container";


const Achievement = () => {
    return (
        <div className="mt-[100px]">
            <Container>
                <div className=" ">
                    <h1 className=" text-[33px] font-semibold  text-[#06241B]">Our <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[85px] md:after:w-[155px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block px-2">Achievement</span>
                    </h1>
                    <p className=" text-[20px] font-normal leading-[28px] text-[#6D737A] mt-3">Various versions have evolved over the years, sometimes by accident,</p>
                </div>
                <div className="mt-[50px] flex flex-wrap items-center justify-center  md:justify-between">
                    <div className="content max-w-[512px]  flex flex-wrap justify-between gap-6 ">
                        <div className="flex  gap-6 items-center max-w-[240px] p-3 transition-all duration-500 hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
                            <div>
                                <div className="bg-[#E3F5F0] w-[64px] h-[64px] p-2.5 rounded-[8px]">
                                    <img src="/GraduationCap.png" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>


                            <div>
                                <h2 className="text-[32px] font-semibold leading-[40px] text-[#000000] tracking-[0.75%]">300</h2>
                                <p className="text-[20px] font-normal leading-[28px] text-[#6D737A] mt-2">instructor</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center max-w-[240px] p-3 transition-all duration-500 hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
                            <div>
                                <div className="bg-[#FFFAF5] w-[64px] h-[64px] p-2.5 rounded-[8px]">
                                    <img src="/VideoCamera.png" alt="" />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[32px] font-semibold leading-[40px] text-[#000000] tracking-[0.75%]">10000+</h2>
                                <p className="text-[20px] font-normal leading-[28px] text-[#6D737A] mt-2">Video</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center max-w-[240px] p-3 transition-all duration-500 hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
                            <div>
                                <div className="bg-[#FFEEF0] w-[64px] h-[64px] p-2.5 rounded-[8px]">
                                    <img src="/GraduationCap.png" alt="" />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[32px] font-semibold leading-[40px] text-[#000000] tracking-[0.75%]">20000+</h2>
                                <p className="text-[20px] font-normal leading-[28px] text-[#6D737A] mt-2">Student</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center max-w-[240px] p-3 transition-all duration-500 hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
                            <div>
                                <div className="bg-[#EEF7FF] w-[64px] h-[64px] p-2.5 rounded-[8px]">
                                    <img src="UsersThree.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-[32px] font-semibold leading-[40px] text-[#000000] tracking-[0.75%]">100000+</h2>
                                <p className="text-[20px] font-normal leading-[28px] text-[#6D737A] mt-2">User{`'`}s</p>
                            </div>
                        </div>
                    </div>
                    <div className="image w-[322px] mx-auto">
                        <img src="/acv.png" alt="" className="w-full h-full object-cover" />
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Achievement;