import HomeCards from '../components/HomeCards.tsx'
import HomeHeader from "../components/HomeHeader.tsx";
import HomeHistory from "../components/HomeHistory.tsx";


const HomePage = () => {
    return (
        <>
            <HomeHeader />
            <HomeCards />
            <HomeHistory/>
        </>
    );
};

export default HomePage;