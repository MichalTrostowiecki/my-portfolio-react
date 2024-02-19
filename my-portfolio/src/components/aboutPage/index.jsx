import AboutMe from "./aboutMe"
import Navbar from "../navbar"
import Footer from "../footer"

const AboutPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ paddingTop: '80px', margin: '5px', flex: '1' }} >
                <AboutMe />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;