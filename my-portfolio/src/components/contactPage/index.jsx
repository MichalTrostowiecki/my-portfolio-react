import Navbar from "../navbar";
import ContactForm from "./contactForm";
import Footer from "../footer"

// Define Contact component
const Contact = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ paddingTop: '80px', margin: '5px', flex: '1' }}>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;