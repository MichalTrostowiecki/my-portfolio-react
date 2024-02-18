import backgroundUrl from "../../assets/images/background-hero.jpg"
import TypingEffect from "./TypingEffect";


const Hero = () => {

    return (
        <div className="bg-cover bg-center h-screen py-72 px-4 mb-10 mx-auto rounded" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <h1 className="animate-fadeDown ml-3 text-4xl lg:text-6xl xl:ml-32 font-bold text-white mb-4">
                <span className="text-cyan-500">
                    Michal
                </span> Trostowiecki
            </h1>
            <TypingEffect text="Passionate Frontend Developer Crafting Engaging Web Experiences" speed={50} />
            <button className="animate-fadeDown ml-3 xl:ml-32  bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">My Work</button>
        </div>
    )
}

export default Hero;