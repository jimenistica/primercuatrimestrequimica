import { Outlet, Link, useLocation } from "react-router";
import { Atom, Sparkles, GraduationCap } from "lucide-react";

export default function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b-4 border-purple-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
                <Atom className="w-8 h-8 text-purple-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ¡Química Fácil!
                </span>
              </Link>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                <span className="text-lg font-bold text-gray-800">Profesora Mailen Lucero</span>
              </div>
            </div>
            <div className="flex space-x-3 pb-3 overflow-x-auto">
              <Link
                to="/modelos-atomicos"
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  location.pathname === "/modelos-atomicos"
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                }`}
              >
                1. Modelos Atómicos
              </Link>
              <Link
                to="/tabla-periodica"
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  location.pathname === "/tabla-periodica"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
              >
                2. Tabla Periódica
              </Link>
              <Link
                to="/numero-atomico-masico"
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  location.pathname === "/numero-atomico-masico"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                3. Número Atómico y Másico
              </Link>
              <Link
                to="/configuracion-electronica"
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  location.pathname === "/configuracion-electronica"
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                }`}
              >
                4. Configuración Electrónica
              </Link>
              <Link
                to="/enlaces-quimicos"
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  location.pathname === "/enlaces-quimicos"
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                5. Enlaces Químicos
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <Outlet />
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5" />
            <p>¡Aprende química de forma divertida! 🧪✨</p>
          </div>
          <p className="text-base font-medium opacity-95">Profesora Mailen Lucero</p>
        </div>
      </footer>
    </div>
  );
}