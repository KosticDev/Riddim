import About from './About';
import Brand from './Brand';
import FAG from './FAG';
import Footer from './Footer';
import Join from './Join';
import Path from './Path';
import Reward from './Reward';
import Riddim from './Riddim';
import Roadmap from './Roadmap';
import Sign from './Sign';
import Slider from './Slider';
import Team from './Team';
import Vision from './Vision';

export default function Main() {
    return (
        <div>
            <Slider />
            <Sign />
            <Vision />
            <Riddim />
            <Reward />
            <Path />
            <Roadmap />
            <About />
            <Team />
            <Brand />
            <FAG />
            <Join />
            <Footer />
        </div>
    )
}