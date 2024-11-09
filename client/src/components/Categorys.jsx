import Container from "./shared/Container";
import { MdOutlineArrowOutward } from "react-icons/md";

const Categorys = () => {
    const categories = [
        {
            id: 1,
            name: "design",
            image: "/PenNib.png",
            description: "Web development courses cover various aspects of web design and development, including HTML, CSS, JavaScript, and more."
        },
        {
            id: 2,
            name: "Development",
            image: "/FileHtml.png",

        },
        {
            id: 3,
            name: "Marketing",
            image: "/MicrophoneStage.png",

        },
        {
            id: 4,
            name: "Business",
            image: "/Briefcase.png",

        },
        {
            id: 5,
            name: "Lifestyle",
            image: "/SunHorizon.png",

        },
        {
            id: 6,
            name: "Photography",
            image: "Camera.png",

        },
        {
            id: 7,
            name: "Music",
            image: "/MusicNote.png",

        },
        {
            id: 8,
            name: "Data Science",
            image: "/Database.png",

        },
        {
            id: 9,
            name: "Personal Develop",
            image: "/Lightbulb.png",

        },
        {
            id: 10,
            name: "Helth & Fitness",
            image: "/Heartbeat.png",

        },
        {
            id: 11,
            name: "Finance",
            image: "/Graph.png",

        },
        {
            id: 12,
            name: "Teaching",
            image: "/Detective.png",

        }
    ]
    return (
        <div>
            <Container>

                <div className=" py-6">
                    <h1 className="text-[33px] font-semibold  text-[#20B486]"><span className="text-[#06241B]">Most</span>  <span className="text-[#20B486] relative after:content-[''] after:bg-[url('/Vector.png')] after:absolute after:w-[85px] md:after:w-[155px] after:h-[6px] after:left-0 after:-bottom-2 after:inline-block">Popular</span>
                        Course</h1>
                    <p className=" text-[20px] font-normal leading-[28px] text-[#6D737A] mt-3">Various versions have evolved over the years, sometimes by accident,</p>
                </div>
                <div className="flex flex-wrap mt-[50px] gap-6">
                    {
                        categories.map((item, idx) => <div key={idx} className="text-[#6D737A] bg-white p-6 flex items-center justify-between w-[312px] rounded-lg shadow-[0px_3px_12px_0px_rgba(75,75,75,0.08)]">
                            <div className="flex gap-2 items-center">
                                <img src={item.image} alt="" />
                                <p className="text-[20px] font-medium leading-[28px] text-[#1B1D1F]">{item.name}</p>
                            </div>
                            <span><MdOutlineArrowOutward className="text-[#20B486] text-2xl"/></span>
                        </div>)
                    }
                   
                </div>
            </Container>
        </div>
    );
};

export default Categorys;