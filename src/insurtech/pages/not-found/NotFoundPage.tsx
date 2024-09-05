import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#08A262]">404</h1>
        <p className="text-xl text-gray-600 my-10">Página no encontrada</p>
        <Link
          to="/"
          className="mt-5 inline-block px-6 py-3 text-lg font-semibold text-white bg-[#08A262] rounded-md hover:bg-[#067d4f]"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
