import Swal, { SweetAlertIcon } from "sweetalert2";

interface ModalParamsProps {
  title?: string;
  text?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  icon?: SweetAlertIcon;
  confirmButtonText?: string;
  color?: string;
  background?: string;
  backdropColor?: string;
  backdropBlur?: string;
}

const showCustomModal = ({
  title = "¡Título predeterminado!",
  text = "Descripción predeterminada",
  imageUrl,
  imageWidth = 100,
  imageHeight = 100,
  imageAlt = "Imagen predeterminada",
  icon,
  confirmButtonText = "Aceptar",
  color = "#ffffff",
  background = "#0F172B",
  backdropColor = "rgba(0, 0, 0, 0.1)",
  backdropBlur = "10px",
}: ModalParamsProps) => {
  return Swal.fire({
    title: `<strong>${title}</strong>`,
    text,
    imageUrl,
    imageWidth,
    imageHeight,
    imageAlt,
    icon,
    confirmButtonText,
    color,
    background,
    customClass: {
      confirmButton: "swal-confirm-button",
    },
    backdrop: `
      ${backdropColor}
      left top
      no-repeat
    `,
    willOpen: () => {
      const backdrop = document.querySelector(
        ".swal2-container"
      ) as HTMLElement;
      if (backdrop) {
        backdrop.style.backdropFilter = `blur(${backdropBlur})`;
        backdrop.style.backgroundColor = backdropColor;
      }
    },
  });
};

export default showCustomModal;
