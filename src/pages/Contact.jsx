import { Outlet } from "react-router-dom"
import ContactForm from "../components/contactForm"

const Contact = () => {
    return(
        <>
            <h1 className="text-center mt-4 mb-4">Contato</h1>
            <ContactForm/>
            <Outlet/>
        </>
    )
}

export default Contact