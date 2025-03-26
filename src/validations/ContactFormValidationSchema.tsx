import * as Yup from "yup";

export const ContactFormValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email(
        "El correo electrónico debe tener un formato válido (name@example.com)"
      )
      .required("El correo electrónico es obligatorio")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "El formato del email debe ser name@example.com"
      ),
    subject: Yup.string().required("El asunto es obligatorio"),
    message: Yup.string().required("El mensaje es obligatorio"),
  });
};
