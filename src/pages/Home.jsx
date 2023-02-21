import Hero from "../components/Hero/Hero";
import Heropanel from "../components/HeroPanel/Heropanel";



function Home() {
    return (<>
        <Hero 
            title="Bringing happiness to your doorstep!!!"
            tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi. Temporibus, nam."/>
        <Heropanel />
    </>);
}

export default Home;