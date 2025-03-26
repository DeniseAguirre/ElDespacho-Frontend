"use client";

import React from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { ContactFormValidationSchema } from "@/validations/ContactFormValidationSchema";
import TitleSection from "../common/headers/TitleSection";

import { ContactForm } from "@/types/contact";
import showCustomModal from "../common/modals/CustomModal";

const Contact: React.FC = () => {
  const handleSubmit = (
    values: ContactForm,
    { setSubmitting, resetForm }: FormikHelpers<ContactForm>
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);

    showCustomModal({
      title: "¡Gracias!",
      text: "Hemos recibido tu mensaje correctamente",
      icon: "success",
    });
  };

  return (
    <div className="mx-auto bg-gray-100 py-20" id="contact">
      <div className="flex flex-wrap lg:flex-nowrap" data-aos="fade-up">
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.7926508563516!2d-65.11524492537755!3d-24.3824344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f1a2a54be7f%3A0x5e1e8d6d9d7d7f7a!2sAv.%20Italia%2010%2C%20Y4608%20Perico%2C%20Jujuy%2C%20Argentina!5e0!3m2!1sen!2sus!4v1698089147959!5m2!1sen!2sus"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 px-4 bg-gray-900 flex items-center justify-center">
          <div className="p-8 w-full max-w-lg" data-aos="fade-up">
            <TitleSection
              section="Contáctanos"
              title="Envianos un mensaje"
              className="text-center"
              titleClass="text-white"
            />

            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={ContactFormValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="w-full sm:w-1/2">
                      <div className="relative">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Nombre"
                          className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm"
                        />
                        {errors.name && touched.name && (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="relative">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm"
                        />
                        {errors.email && touched.email && (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Asunto"
                      className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm"
                    />
                    {errors.subject && touched.subject && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Deja un mensaje aquí"
                      className="w-full px-6 py-4 bg-white text-gray-900 h-32 resize-none rounded-sm"
                    />
                    {errors.message && touched.message && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 hover:bg-primary-dark transition duration-300 uppercase rounded-sm"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
