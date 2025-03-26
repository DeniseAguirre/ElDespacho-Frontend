"use client";
import React, { useState } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { SplineIcon, Users, Utensils } from "lucide-react";
import { CheckoutFormValues } from "@/types/checkout";
import { CheckoutFormValidationSchema } from "@/validations/CheckoutFormValidationSchema";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/features/cart/cartSlice";
import showCustomModal from "../common/modals/CustomModal";
import { useRouter } from "next/navigation";

const CheckoutForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (
    values: CheckoutFormValues,
    { setSubmitting, resetForm }: FormikHelpers<CheckoutFormValues>
  ) => {
    setIsSubmitting(true);
    try {
      setTimeout(() => {
        resetForm();
      }, 1000);
      showCustomModal({
        title: "¡Gracias!",
        text: "Pedido realizado correctamente",
        imageUrl: "/gifs/success.gif",
        imageAlt: "Pedido realizado",
      });
      dispatch(clearCart());
      router.push("/products");
    } catch (error) {
      console.error("Error submitting form:", error);
      showCustomModal({
        title: "Error",
        text: "No se pudo completar el pedido",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:px-6 lg:px-8 lg:py-12">
      <div className="max-w-xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-lg shadow-lg rounded-md p-8 transition-all duration-300">
        <h2 className="text-xl font-bold text-left text-light mb-8">
          Información personal
        </h2>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            phone: "",
            numberOfGuests: 1,
            needCutlery: false,
            notes: "",
          }}
          validationSchema={CheckoutFormValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    id="name-field"
                    className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500 text-sm mt-1" role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <Field
                    type="text"
                    name="surname"
                    id="surname-field"
                    placeholder="Apellido"
                    className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Surname"
                  />
                  {errors.surname && touched.surname && (
                    <div className="text-red-500 text-sm mt-1" role="alert">
                      {errors.surname}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Email address"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <Field
                  type="tel"
                  name="phone"
                  id="phone-field"
                  placeholder="Teléfono"
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Phone number"
                />
                {errors.phone && touched.phone && (
                  <div className="text-red-500 text-sm mt-1" role="alert">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="numberOfGuests-field"
                    className="block text-sm font-medium text-primary flex gap-4 items-center"
                  >
                    <Users /> ¿Cuántos comenzales hay?
                  </label>
                  <Field
                    type="number"
                    name="numberOfGuests"
                    id="numberOfGuests-field"
                    min="1"
                    className="pl-2 w-12 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="¿Cuántos comenzales hay?"
                  />
                  {errors.numberOfGuests && touched.numberOfGuests && (
                    <div className="text-red-500 text-sm mt-1" role="alert">
                      {errors.numberOfGuests}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="needCutlery-field"
                    className="block text-sm text-primary flex gap-4 items-center"
                  >
                    <Utensils /> ¿Necesitas cubiertos?
                  </label>
                  <Field
                    type="checkbox"
                    name="needCutlery"
                    id="needCutlery-field"
                    className="h-4 w-4 accent-primary focus:ring-primary rounded"
                    aria-label="¿Necesitas cubiertos?"
                  />
                </div>
              </div>
              <div>
                <Field
                  as="textarea"
                  name="notes"
                  id="notes-field"
                  placeholder="Notas para este pedido"
                  maxLength={120}
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-sm"
                  aria-label="notes"
                />
                {errors.notes && touched.notes && (
                  <div className="text-red-500 text-sm mt-1" role="alert">
                    {errors.notes}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Submit form"
              >
                {isSubmitting ? (
                  <>
                    <SplineIcon className="animate-spin mr-2" />
                    Enviando pedido...
                  </>
                ) : (
                  "Pedir"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutForm;
