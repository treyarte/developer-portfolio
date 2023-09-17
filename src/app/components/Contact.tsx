import ContactForm from "./forms/ContactForm";
import SectionTitle from "./utils/SectionTitle";

export default function Contact() {
    return (
        <section id="contact" className="py-28">
            <SectionTitle 
                backgroundText={"Contact"} 
                titleText={"05. Contact"}
            />
            <ContactForm/>
        </section>
    )
}