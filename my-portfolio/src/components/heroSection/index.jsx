import backgroundUrl from "../../assets/images/background-hero.jpg"


const Hero = () => {

    return (
        <div className="bg-cover bg-center h-screen py-72 px-4 text-center mb-10 mx-auto rounded" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <h1 className="text-4xl font-bold text-white mb-4">
                Welcome to my website
            </h1>
            <p className="text-xl text-white mb-8">Discover amazing things here</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">My Work</button>
        </div>
    )
}

export default Hero;