
import Achievement from '../../components/Home/Achievement';
import Categorys from '../../components/Home/Categorys';
import Feedback from '../../components/Home/Feedback';
import Hero from '../../components/Home/Hero';
import Instructor from '../../components/Home/Instructor';
import Newslater from '../../components/Home/Newslater';
import PopularCourse from '../../components/Home/PopularCourse';

const Home = () => {
    return (
        <div>
        <Hero></Hero>
        <PopularCourse/>
        <Categorys/>
        <Instructor/>
        <Achievement/>
        <Feedback/>
        <Newslater/>


        </div>
    );
};

export default Home;