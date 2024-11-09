
import Categorys from '../../components/Home/Categorys';
import Hero from '../../components/Home/Hero';
import Instructor from '../../components/Home/Instructor';
import PopularCourse from '../../components/Home/PopularCourse';

const Home = () => {
    return (
        <div>
        <Hero></Hero>
        <PopularCourse></PopularCourse>
        <Categorys></Categorys>
        <Instructor/>
        </div>
    );
};

export default Home;