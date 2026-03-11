import { Link } from "react-router";
import { Atom, Zap, BookOpen, Rocket, Hash, Link as LinkIcon, Table } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block animate-bounce mb-4">
          <Atom className="w-24 h-24 text-purple-600" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
          ¡Bienvenido a Química Fácil!
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Descubre el fascinante mundo de los átomos de una manera súper divertida y fácil de entender. 
          ¡Prepárate para explorar desde los modelos atómicos hasta los enlaces químicos! 🚀
        </p>
      </div>

      {/* Main Image */}
      <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1673892139822-0aa1dc3cc433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG9tJTIwbW9sZWN1bGUlMjBzY2llbmNlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzczMDExOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Átomo colorido"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Link 
          to="/modelos-atomicos"
          className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105 border-4 border-purple-200 hover:border-purple-400"
        >
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 rounded-full p-3 mr-3 group-hover:bg-purple-200 transition-colors">
              <Atom className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-purple-700">Tema 1: Modelos Atómicos</h2>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Modelo de Dalton
            </li>
            <li className="flex items-center">
              <span className="mr-2">🍰</span>
              Modelo de Thomson
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌍</span>
              Modelo de Rutherford
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              Modelo de Bohr
            </li>
            <li className="flex items-center">
              <span className="mr-2">☁️</span>
              Modelo Mecano-Cuántico
            </li>
          </ul>
        </Link>

        <Link 
          to="/tabla-periodica"
          className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105 border-4 border-indigo-200 hover:border-indigo-400"
        >
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 rounded-full p-3 mr-3 group-hover:bg-indigo-200 transition-colors">
              <Table className="w-10 h-10 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-indigo-700">Tema 2: Tabla Periódica</h2>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center">
              <span className="mr-2">🧪</span>
              ¿Qué es un elemento?
            </li>
            <li className="flex items-center">
              <span className="mr-2">🗺️</span>
              Historia de Mendeleiev
            </li>
            <li className="flex items-center">
              <span className="mr-2">📊</span>
              Períodos y Grupos
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚙️</span>
              Metales y No Metales
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌟</span>
              Elementos en la Vida Cotidiana
            </li>
          </ul>
        </Link>

        <Link 
          to="/numero-atomico-masico"
          className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105 border-4 border-blue-200 hover:border-blue-400"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-full p-3 mr-3 group-hover:bg-blue-200 transition-colors">
              <Hash className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-blue-700">Tema 3: Número Atómico y Másico</h2>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center">
              <span className="mr-2">⚛️</span>
              Número Atómico (Z)
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚖️</span>
              Número Másico (A)
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔬</span>
              Protones, Neutrones y Electrones
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎮</span>
              Simulador PhET
            </li>
            <li className="flex items-center">
              <span className="mr-2">🧩</span>
              Isótopos
            </li>
          </ul>
        </Link>

        <Link 
          to="/configuracion-electronica"
          className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105 border-4 border-pink-200 hover:border-pink-400"
        >
          <div className="flex items-center mb-4">
            <div className="bg-pink-100 rounded-full p-3 mr-3 group-hover:bg-pink-200 transition-colors">
              <Zap className="w-10 h-10 text-pink-600" />
            </div>
            <h2 className="text-xl font-bold text-pink-700">Tema 4: Configuración Electrónica</h2>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center">
              <span className="mr-2">📚</span>
              Principios fundamentales
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Diagramas de orbitales
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔢</span>
              Cómo escribir configuraciones
            </li>
            <li className="flex items-center">
              <span className="mr-2">🗺️</span>
              Relación con la tabla periódica
            </li>
          </ul>
        </Link>

        <Link 
          to="/enlaces-quimicos"
          className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105 border-4 border-green-200 hover:border-green-400"
        >
          <div className="flex items-center mb-4">
            <div className="bg-green-100 rounded-full p-3 mr-3 group-hover:bg-green-200 transition-colors">
              <LinkIcon className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-green-700">Tema 5: Enlaces Químicos</h2>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Electrones de Valencia
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔗</span>
              Tipos de Enlaces
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚖️</span>
              Electronegatividad
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔬</span>
              Propiedades Macroscópicas
            </li>
          </ul>
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center shadow-lg">
          <BookOpen className="w-12 h-12 text-blue-700 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Explicaciones Claras</h3>
          <p className="text-blue-700">Sin términos complicados. Todo explicado de forma simple y divertida.</p>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center shadow-lg">
          <Rocket className="w-12 h-12 text-green-700 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-green-800 mb-2">Ejemplos Prácticos</h3>
          <p className="text-green-700">Aprende con ejemplos del mundo real que puedes entender fácilmente.</p>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center shadow-lg">
          <Zap className="w-12 h-12 text-orange-700 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-orange-800 mb-2">Contenido Dinámico</h3>
          <p className="text-orange-700">Videos, imágenes y explicaciones interactivas para que nunca te aburras.</p>
        </div>
      </div>
    </div>
  );
}