import * as Yup from "yup";

export const CheckoutFormValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .required("El nombre es obligatorio"),
    surname: Yup.string()
      .min(2, "El apellido debe tener al menos 2 caracteres")
      .required("El apellido es obligatorio"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "El formato del email debe ser name@example.com"
      )
      .email("Por favor ingrese una dirección de correo electrónico válida")
      .required("El correo electrónico es obligatorio"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "El número de teléfono debe contener solo dígitos")
      .min(10, "El número de teléfono debe tener al menos 10 dígitos")
      .required("El número de teléfono es obligatorio"),
    numberOfGuests: Yup.number()
      .positive("El número de invitados debe ser un número positivo")
      .integer("El número de invitados debe ser un número entero")
      .required("El número de invitados es obligatorio"),
    needCutlery: Yup.boolean().nullable(),
    notes: Yup.string().max(120, "No puede exceder 120 caracteres").nullable(),
  });
};
