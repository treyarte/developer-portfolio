"use client";
import { displayReqErrMsg, displayMinCharErrMsg, displayMaxCharErrMsg } from "@/app/helpers/FormHelper";
import { ContactType } from "@/app/models/types/ContactType";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import CharacterLimit from "../utils/CharacterLimit";

const maxMsgLe = 2000;

/**
 * Renders the contact form
 * @returns 
 */
export default function ContactForm() {
    /**
     * The initial values of the form
     */
    const initialValues:ContactType = {        
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    /**
     * Schema validation for our form
     */
    const yupValidation = {
        name: Yup.string()
                .required(displayReqErrMsg("name"))
                .min(2, displayMinCharErrMsg("Name", 2))
                .max(32, displayMaxCharErrMsg("Name", 32)),
        email: Yup.string()
                .required(displayReqErrMsg("valid email address"))
                .matches(/(.+)@(.+){2,}\.(.+){2,}/, "Please enter a valid email address"), 
        subject: Yup.string()
                    .required(displayReqErrMsg("subject"))
                    .min(5, displayMinCharErrMsg("Subject", 5))
                    .max(130, displayMaxCharErrMsg("Subject", 130)),
        message:Yup.string()
                    .required(displayReqErrMsg("message"))
                    .max(maxMsgLe, displayMaxCharErrMsg("Message", maxMsgLe))
    }

    const validationSchema = Yup.object(yupValidation);

    const onSubmit = () => {

    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                errors, 
                handleChange, 
                handleSubmit, 
                handleBlur, 
                resetForm, 
                touched, 
                values}) => (
                <form 
                    className="my-0 mx-auto max-w-[900px] w-full border-solid border-2 border-zinc-800 rounded-md p-5 shadow-xl"
                    onSubmit={handleSubmit}>
                    <div className="min-h-[96px]">
                        <div className="flex flex-col">
                            <label 
                                htmlFor="name"
                                className="text-portfolio-orange text-lg font-semibold uppercase" 
                            >
                                Name
                            </label>
                            <input 
                                className="rounded-md p-2 text-black"
                                type="text" 
                                id="name"
                                name="name"
                                value={values.name}
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="text-red-400 min-h-[22px]">
                            <ErrorMessage name={"name"}/>
                        </div>
                    </div>
                    <div className="min-h-[96px]">
                        <div className="flex flex-col">
                            <label 
                                htmlFor="email"
                                className="text-portfolio-orange text-lg font-semibold uppercase" 
                            >
                                Email
                            </label>
                            <input 
                                className="rounded-md p-2 text-black"
                                type="text" 
                                id="email"
                                name="email"
                                value={values.email}
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="text-red-400 min-h-[22px]">
                            <ErrorMessage name={"email"}/>
                        </div>
                    </div>
                    <div className="min-h-[96px]">
                        <div className="flex flex-col">
                            <label 
                                htmlFor="subject"
                                className="text-portfolio-orange text-lg font-semibold uppercase" 
                            >
                                Subject
                            </label>
                            <input 
                                className="rounded-md p-2 text-black"
                                type="text" 
                                id="subject"
                                name="subject"
                                value={values.subject}
                                placeholder="Subject"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="text-red-400 min-h-[22px]">
                            <ErrorMessage name={"subject"}/>
                        </div>
                    </div>
                    <div className="min-h-[96px]">
                        <div className="flex flex-col">
                            <label 
                                htmlFor="descrimessageption"
                                className="text-portfolio-orange text-lg font-semibold uppercase" 
                            >
                                Message
                            </label>
                            <textarea 
                                className="rounded-md p-2 text-black min-h-[128px] max-h-[600px]"                              
                                id="message"
                                name="message"
                                value={values.message}
                                placeholder="Please enter a message here!"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rows={8}
                            />
                        </div>

                        <div className="text-red-400 min-h-[24px]">
                            <ErrorMessage name={"message"}/>
                        </div>
                        <div className="py-2">
                            Max message limit:{" "}
                            <CharacterLimit 
                                maxCharLimit={maxMsgLe} 
                                characters={values.message} 
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button className="px-6 py-2 hover:bg-portfolio-orange rounded-md bg-orange-600">Submit</button>
                    </div>
                </form>
            )}            
        </Formik>
    )
}