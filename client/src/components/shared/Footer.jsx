import { Link } from "react-router-dom";
import Container from "./Container";
import { FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-[100px] mb-[50px]">
            <Container>
                <div className="flex justify-between flex-wrap gap-6">


                    <div className="max-w-[312px]">
                        <img src="logo.png" alt="eDex logo" />
                        <h3 className="text-[#1B1D1F]  text-2xl font-semibold leading-8 tracking-[0.2%] mt-6">Contact Us</h3>
                      
                        <ul>
                            <li className="text-[#6D737A]  text-base font-normal leading-6 mt-4">Call : +123 400 123</li>
                            <li className="text-[#6D737A]  text-base font-normal leading-6 my-3">Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</li>
                            <li className="text-[#363A3D]  text-base font-normal leading-6">Email:  support@edex.com</li>
                        </ul>
                        <div className=" flex gap-2 items-center mt-4">
                                <Link to="#" className="bg-[#E9F8F3] text-[#4DC39E] hover:bg-[#b8f6e2] w-12 h-12 rounded-[8px] flex justify-center items-center group transition-all duration-500"><FaFacebookF className="group-hover:scale-110 transition-all duration-500"/></Link>
                            <Link to="#" className="bg-[#E9F8F3] text-[#4DC39E] hover:bg-[#b8f6e2] w-12 h-12 rounded-[8px] flex justify-center items-center group transition-all duration-500"><FaTwitter className="group-hover:scale-110 transition-all duration-500"/></Link>
                            <Link to="#" className="bg-[#E9F8F3] text-[#4DC39E] hover:bg-[#b8f6e2] w-12 h-12 rounded-[8px] flex justify-center items-center group transition-all duration-500"><FaInstagramSquare className="group-hover:scale-110 transition-all duration-500"/></Link>
                            <Link to="#" className="bg-[#E9F8F3] text-[#4DC39E] hover:bg-[#b8f6e2]  w-12 h-12 rounded-[8px] flex justify-center items-center group transition-all duration-500"><FaLinkedin className="group-hover:scale-110 transition-all duration-500"/></Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#1B1D1F]  text-2xl font-semibold leading-8 tracking-[0.2%] mt-6">Explore</h4>
                        <ul>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">Home</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">About</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">course</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">Blog</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#1B1D1F]  text-2xl font-semibold leading-8 tracking-[0.2%] mt-6">Category</h4>
                        <ul>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6  ">Design</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6">Development</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">Marketing</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">Business</Link></li>
                            <li className="mt-4"><Link to="#" className="text-[#6D737A]  text-base font-normal leading-6 ">Lifestyle</Link></li>
                        </ul>
                    </div>
                    <div className="max-w-[297px]">
                        <h4 className="text-[#1B1D1F]  text-2xl font-semibold leading-8 tracking-[0.2%] mt-6">Subscribe</h4>
                        <p className="text-[#6D737A]  text-base font-normal leading-6 my-4"> Lorem Ipsum has been them an industry printer took a galley make book.</p>
                    <input type="text" name="" id="" placeholder="Email here" className="bg-[#E7E9EB80] p-4 w-full rounded-[8px] outline-0"/>
                    <button className="px-6 py-3 bg-[#20b486] text-white hover:text-[#20b486] border border-[#20b486] hover:bg-white rounded-[8px] mt-6 transition-all duration-500">Sign up for Free</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;