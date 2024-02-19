import Navbar from "../navbar";
import ContactForm from "./contactForm";
import Footer from "../footer"

const Contact = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ paddingTop: '80px', margin: '5px', flex: '1' }}> {/* Adjusted padding-top */}
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;