"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-light">
        <div className="text-center">
          <h1 className="text-dark text-9xl font-extrabold">404</h1>
          <p className="text-dark text-xl mt-4">¡Oops! Página no encontrada</p>
          <p className="text-dark mt-2">
            Parece que esta página no existe o fue movida.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark hover:text-light transition"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
