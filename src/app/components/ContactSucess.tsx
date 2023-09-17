"use client";
type ContactSuccessProps = {
    toggleContact:() => void;
}

/**
 * Component for display success message in the contact form
 */
export default function ContactSuccess(props:ContactSuccessProps) {
    const {toggleContact} = props;
    return (
        <div className=" w-full flex items-center flex-col">
            <h4 className=" text-2xl mb-3">Thank you for the message!</h4>
            <p className="mb-3">I will reach out to you as soon as possible</p>
            <div>
                <button className=" underline text-portfolio-orange hover:text-orange-600" onClick={toggleContact}>Back to contact</button>
            </div>
        </div>
    )
}