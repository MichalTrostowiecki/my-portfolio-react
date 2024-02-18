import Navbar from "../navbar";
import ContactForm from "./contactForm";
import Footer from "../footer"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '80px', margin: '5px' }}> {/* Adjusted padding-top */}
                <ContactForm />
            </div>
            <div style={{ marginTop: '200px' }}>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;