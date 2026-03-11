import { useState } from "react";
import { BookOpen, ArrowRight, CheckCircle, Zap, Map, Calculator, Atom } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Ejemplo {
  elemento: string;
  simbolo: string;
  numElectrones: number;
  configuracion: string;
  explicacion: string;
  diagramaOrbitales?: string;
}

const ejemplos: Ejemplo[] = [
  {
    elemento: "Hidrógeno",
    simbolo: "H",
    numElectrones: 1,
    configuracion: "1s¹",
    explicacion: "El más simple: solo 1 electrón que va al primer orbital s.",
    diagramaOrbitales: "1s: ↑"
  },
  {
    elemento: "Helio",
    simbolo: "He",
    numElectrones: 2,
    configuracion: "1s²",
    explicacion: "2 electrones: el orbital 1s se completa con 2 electrones de espines opuestos.",
    diagramaOrbitales: "1s: ↑↓"
  },
  {
    elemento: "Carbono",
    simbolo: "C",
    numElectrones: 6,
    configuracion: "1s² 2s² 2p²",
    explicacion: "6 electrones: primero llenas 1s (2e⁻), luego 2s (2e⁻), y los últimos 2 van a 2p.",
    diagramaOrbitales: "1s: ↑↓  |  2s: ↑↓  |  2p: ↑ ↑ _"
  },
  {
    elemento: "Oxígeno",
    simbolo: "O",
    numElectrones: 8,
    configuracion: "1s² 2s² 2p⁴",
    explicacion: "8 electrones: igual que carbono pero con 2 electrones más en 2p.",
    diagramaOrbitales: "1s: ↑↓  |  2s: ↑↓  |  2p: ↑↓ ↑ ↑"
  },
  {
    elemento: "Neón",
    simbolo: "Ne",
    numElectrones: 10,
    configuracion: "1s² 2s² 2p⁶",
    explicacion: "10 electrones: nivel 2 completo. Gas noble muy estable.",
    diagramaOrbitales: "1s: ↑↓  |  2s: ↑↓  |  2p: ↑↓ ↑↓ ↑↓"
  },
  {
    elemento: "Sodio",
    simbolo: "Na",
    numElectrones: 11,
    configuracion: "1s² 2s² 2p⁶ 3s¹",
    explicacion: "11 electrones: llenas todo el nivel 2 y el último electrón va a 3s.",
    diagramaOrbitales: "1s: ↑↓  |  2s: ↑↓  |  2p: ↑↓ ↑↓ ↑↓  |  3s: ↑"
  },
  {
    elemento: "Cloro",
    simbolo: "Cl",
    numElectrones: 17,
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁵",
    explicacion: "17 electrones: niveles 1 y 2 llenos, en el nivel 3 tienes 2 en s y 5 en p.",
    diagramaOrbitales: "...  |  3s: ↑↓  |  3p: ↑↓ ↑↓ ↑"
  },
  {
    elemento: "Argón",
    simbolo: "Ar",
    numElectrones: 18,
    configuracion: "1s² 2s² 2p⁶ 3s² 3p⁶",
    explicacion: "18 electrones: nivel 3 completo. Otro gas noble estable.",
    diagramaOrbitales: "...  |  3s: ↑↓  |  3p: ↑↓ ↑↓ ↑↓"
  }
];

export default function ConfiguracionElectronica() {
  const [pasoActual, setPasoActual] = useState(0);

  const pasos = [
    "Entender los principios básicos",
    "Conocer el orden de llenado",
    "Practicar con ejemplos",
    "Conectar con la tabla periódica"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          ⚡ Configuración Electrónica ⚡
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Aprende a organizar los electrones de cualquier elemento como un experto. 
          Esto te permitirá comprender las propiedades químicas de los elementos. 🎯
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1711185898441-f493426390cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJpb2RpYyUyMHRhYmxlJTIwY2hlbWlzdHJ5fGVufDF8fHx8MTc3Mjk5MTg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tabla periódica"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Introducción */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-purple-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center">
          <Atom className="mr-3" />
          ¿Qué es la Configuración Electrónica?
        </h2>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-lg bg-purple-50 p-4 rounded-lg">
            La <span className="font-bold text-purple-700">configuración electrónica</span> es la forma 
            en que se distribuyen los electrones de un átomo en sus diferentes niveles y subniveles de energía.
          </p>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-lg">
            <h3 className="font-bold text-purple-800 mb-3 text-lg">📝 Para tu carpeta:</h3>
            <p className="mb-3">
              Conocer la configuración electrónica de un elemento es fundamental porque:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Nos permite predecir el comportamiento químico del elemento</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Explica la ubicación del elemento en la tabla periódica</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Determina qué tipo de enlaces puede formar</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Indica cuántos electrones tiene en su última capa (electrones de valencia)</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-3">Conceptos importantes que debes recordar:</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-blue-700">Nivel de energía (n):</p>
                <p>Es la "capa" donde se encuentran los electrones. Se numeran: 1, 2, 3, 4, 5, 6, 7...</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-blue-700">Subnivel de energía:</p>
                <p>Dentro de cada nivel hay subniveles identificados con las letras: s, p, d, f</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-blue-700">Orbital:</p>
                <p>Es la región del espacio donde hay mayor probabilidad de encontrar un electrón. Cada orbital puede contener máximo 2 electrones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mb-12 bg-white rounded-2xl shadow-xl p-6 border-4 border-purple-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Tu Camino de Aprendizaje</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {pasos.map((paso, index) => (
            <button
              key={index}
              onClick={() => setPasoActual(index)}
              className={`p-4 rounded-lg transition-all ${
                pasoActual === index
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="text-2xl mb-2">{index + 1}</div>
              <div className="text-sm font-medium">{paso}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Paso 1: Principios Básicos */}
      {pasoActual === 0 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-200">
            <h2 className="text-3xl font-bold mb-6 text-blue-700 flex items-center">
              <BookOpen className="mr-3" />
              Los 3 Principios Fundamentales
            </h2>

            <div className="space-y-6">
              {/* Principio de Aufbau */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-3 text-blue-800">1️⃣ Principio de Aufbau (Construcción Progresiva)</h3>
                <p className="text-lg text-gray-700 mb-3">
                  Los electrones llenan los orbitales desde el nivel de energía MÁS BAJO al MÁS ALTO.
                </p>
                <div className="bg-white p-5 rounded-lg mb-3">
                  <p className="font-bold text-blue-700 mb-2">📚 Definición para copiar:</p>
                  <p className="text-gray-700 italic">
                    "El Principio de Aufbau establece que los electrones ocupan primero los orbitales 
                    de menor energía disponibles antes de pasar a orbitales de mayor energía."
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-blue-700 mb-2">🎯 Analogía:</p>
                  <p className="text-gray-700">
                    Es como llenar las gradas de un estadio: primero se llenan las filas de abajo 
                    (más cerca de la cancha = menos energía) y luego las de arriba. Nadie se sienta 
                    arriba si hay lugares abajo.
                  </p>
                </div>
              </div>

              {/* Principio de Exclusión de Pauli */}
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold mb-3 text-purple-800">2️⃣ Principio de Exclusión de Pauli</h3>
                <p className="text-lg text-gray-700 mb-3">
                  En un orbital solo pueden caber MÁXIMO 2 ELECTRONES, y deben tener espines opuestos (↑↓).
                </p>
                <div className="bg-white p-5 rounded-lg mb-3">
                  <p className="font-bold text-purple-700 mb-2">📚 Definición para copiar:</p>
                  <p className="text-gray-700 italic">
                    "El Principio de Exclusión de Pauli establece que en un mismo orbital no pueden 
                    existir dos electrones con los mismos números cuánticos. Por ello, un orbital 
                    admite como máximo 2 electrones con espines opuestos."
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-2">🎯 Analogía:</p>
                  <p className="text-gray-700">
                    Un orbital es como una habitación de hotel: solo pueden hospedarse 2 personas máximo, 
                    y deben tener espines opuestos (representado con flechas ↑↓).
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg mt-3">
                  <p className="font-bold text-purple-700 mb-2">Representación gráfica:</p>
                  <div className="flex items-center justify-center space-x-8 my-3">
                    <div className="text-center">
                      <div className="border-2 border-purple-400 p-3 rounded mb-1 font-mono text-xl">↑↓</div>
                      <p className="text-sm text-gray-600">Orbital completo</p>
                    </div>
                    <div className="text-center">
                      <div className="border-2 border-purple-400 p-3 rounded mb-1 font-mono text-xl">↑ _</div>
                      <p className="text-sm text-gray-600">Orbital con 1 electrón</p>
                    </div>
                    <div className="text-center">
                      <div className="border-2 border-purple-400 p-3 rounded mb-1 font-mono text-xl">_ _</div>
                      <p className="text-sm text-gray-600">Orbital vacío</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regla de Hund */}
              <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold mb-3 text-pink-800">3️⃣ Regla de Hund (Máxima Multiplicidad)</h3>
                <p className="text-lg text-gray-700 mb-3">
                  Cuando hay varios orbitales del mismo tipo (p, d, f), primero se coloca UN electrón en cada uno 
                  con el mismo espín, antes de empezar a poner el segundo.
                </p>
                <div className="bg-white p-5 rounded-lg mb-3">
                  <p className="font-bold text-pink-700 mb-2">📚 Definición para copiar:</p>
                  <p className="text-gray-700 italic">
                    "La Regla de Hund establece que cuando se llenan orbitales de igual energía (orbitales 
                    degenerados), los electrones se distribuyen uno por uno con espines paralelos antes de 
                    aparearlos."
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <p className="font-bold text-pink-700 mb-2">🎯 Analogía:</p>
                  <p className="text-gray-700">
                    Es como un autobús: la gente prefiere sentarse sola primero (un pasajero por asiento), 
                    y solo cuando no quedan asientos vacíos empiezan a sentarse de a dos.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-pink-700 mb-2">Ejemplo: Llenado de orbitales 2p</p>
                  <div className="space-y-3 mt-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Con 1 electrón en 2p:</p>
                      <div className="flex space-x-2">
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">_ _</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">_ _</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Con 2 electrones en 2p:</p>
                      <div className="flex space-x-2">
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">_ _</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Con 3 electrones en 2p:</p>
                      <div className="flex space-x-2">
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Con 4 electrones en 2p:</p>
                      <div className="flex space-x-2">
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑↓</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                        <div className="border-2 border-pink-400 p-2 rounded font-mono">↑ _</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Paso 2: Orden de Llenado */}
      {pasoActual === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200">
            <h2 className="text-3xl font-bold mb-6 text-green-700 flex items-center">
              <ArrowRight className="mr-3" />
              El Orden de Llenado de Orbitales
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
              <p className="text-lg font-bold text-gray-800 mb-3">📋 Orden que debes memorizar y copiar en tu carpeta:</p>
              <div className="bg-white p-4 rounded-lg mb-3">
                <p className="text-2xl font-mono font-bold text-gray-700 leading-loose">
                  1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p
                </p>
              </div>
              <p className="text-gray-700 italic mt-3">
                Este orden NO sigue un patrón simple de números, por eso es importante aprenderlo bien.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold mb-4 text-green-800">🎯 Método de las Diagonales (Diagrama de Moeller)</h3>
              <p className="text-gray-700 mb-4">
                Para recordar el orden, dibuja el siguiente diagrama en tu carpeta y sigue las flechas diagonales:
              </p>
              <div className="bg-white p-8 rounded-lg">
                <pre className="text-lg font-mono overflow-x-auto leading-loose">
{`    1s
      ↙
    2s    2p
      ↙     ↙
    3s    3p    3d
      ↙     ↙     ↙
    4s    4p    4d    4f
      ↙     ↙     ↙     ↙
    5s    5p    5d    5f
      ↙     ↙     ↙
    6s    6p    6d
      ↙     ↙
    7s    7p

Sigue las flechas diagonales desde arriba`}
                </pre>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="font-bold text-yellow-800 mb-2">💡 Cómo usarlo:</p>
                <p className="text-gray-700">
                  Comienza en 1s y sigue las diagonales de derecha a izquierda y de arriba hacia abajo.
                  Por ejemplo: primera diagonal (1s), segunda diagonal (2s), tercera diagonal (2p, 3s), 
                  cuarta diagonal (3p, 4s), etc.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">📊 Capacidad de cada tipo de orbital</h3>
              <p className="text-gray-700 mb-4">Es fundamental que sepas cuántos electrones caben en cada subnivel:</p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-lg text-center shadow-md border-2 border-blue-300">
                  <div className="text-4xl mb-2 font-bold text-blue-600">s</div>
                  <div className="font-bold text-blue-700 text-lg mb-1">Máx. 2e⁻</div>
                  <div className="text-sm text-gray-600 mb-2">1 orbital</div>
                  <div className="text-xs text-gray-500">1 × 2 = 2</div>
                </div>
                <div className="bg-white p-5 rounded-lg text-center shadow-md border-2 border-purple-300">
                  <div className="text-4xl mb-2 font-bold text-purple-600">p</div>
                  <div className="font-bold text-purple-700 text-lg mb-1">Máx. 6e⁻</div>
                  <div className="text-sm text-gray-600 mb-2">3 orbitales</div>
                  <div className="text-xs text-gray-500">3 × 2 = 6</div>
                </div>
                <div className="bg-white p-5 rounded-lg text-center shadow-md border-2 border-pink-300">
                  <div className="text-4xl mb-2 font-bold text-pink-600">d</div>
                  <div className="font-bold text-pink-700 text-lg mb-1">Máx. 10e⁻</div>
                  <div className="text-sm text-gray-600 mb-2">5 orbitales</div>
                  <div className="text-xs text-gray-500">5 × 2 = 10</div>
                </div>
                <div className="bg-white p-5 rounded-lg text-center shadow-md border-2 border-orange-300">
                  <div className="text-4xl mb-2 font-bold text-orange-600">f</div>
                  <div className="font-bold text-orange-700 text-lg mb-1">Máx. 14e⁻</div>
                  <div className="text-sm text-gray-600 mb-2">7 orbitales</div>
                  <div className="text-xs text-gray-500">7 × 2 = 14</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-green-800">✍️ Resumen para tu carpeta:</h3>
              <div className="bg-white p-5 rounded-lg space-y-2 text-gray-700">
                <p>• El subnivel <span className="font-bold">s</span> tiene 1 orbital → caben 2 electrones</p>
                <p>• El subnivel <span className="font-bold">p</span> tiene 3 orbitales → caben 6 electrones</p>
                <p>• El subnivel <span className="font-bold">d</span> tiene 5 orbitales → caben 10 electrones</p>
                <p>• El subnivel <span className="font-bold">f</span> tiene 7 orbitales → caben 14 electrones</p>
                <p className="mt-3 pt-3 border-t border-gray-300 font-medium">
                  Cada orbital admite máximo 2 electrones con espines opuestos (↑↓)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Paso 3: Ejemplos Prácticos */}
      {pasoActual === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-orange-200">
            <h2 className="text-3xl font-bold mb-6 text-orange-700 flex items-center">
              <CheckCircle className="mr-3" />
              Ejemplos Paso a Paso
            </h2>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-orange-800">🔍 Procedimiento para escribir una configuración electrónica:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2 min-w-[30px]">Paso 1:</span>
                  <span>Identifica el número atómico (Z) del elemento. Este número te indica cuántos electrones debes distribuir.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2 min-w-[30px]">Paso 2:</span>
                  <span>Sigue el orden de llenado: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s...</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2 min-w-[30px]">Paso 3:</span>
                  <span>Llena cada orbital hasta completar el número total de electrones. Recuerda: s→2, p→6, d→10, f→14 electrones máximo.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2 min-w-[30px]">Paso 4:</span>
                  <span>Escribe la configuración sumando todos los exponentes para verificar que coincida con Z.</span>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              {ejemplos.map((ejemplo, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-800">
                        {ejemplo.elemento} ({ejemplo.simbolo})
                      </h3>
                      <p className="text-gray-600">Z = {ejemplo.numElectrones} → {ejemplo.numElectrones} electrones</p>
                    </div>
                    <div className="text-4xl">
                      {index === 0 ? '🎈' : index === 1 ? '🎪' : index === 2 ? '💎' : index === 3 ? '🌊' : index === 4 ? '💫' : index === 5 ? '🧂' : index === 6 ? '☢️' : '🌟'}
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg mb-4 shadow">
                    <p className="font-bold text-purple-700 mb-2">Configuración Electrónica:</p>
                    <p className="text-2xl font-mono font-bold text-purple-700">{ejemplo.configuracion}</p>
                  </div>
                  
                  {ejemplo.diagramaOrbitales && (
                    <div className="bg-white p-5 rounded-lg mb-4 shadow">
                      <p className="font-bold text-purple-700 mb-2">Diagrama de Orbitales:</p>
                      <p className="text-lg font-mono text-gray-700">{ejemplo.diagramaOrbitales}</p>
                    </div>
                  )}
                  
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-bold text-purple-700">💡 Explicación:</span> {ejemplo.explicacion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-2 border-green-400">
              <h3 className="text-xl font-bold mb-4 text-green-800">🏆 Ejercicios para practicar en tu carpeta:</h3>
              <p className="text-gray-700 mb-4">
                Copia estos ejercicios en tu carpeta y resuélvelos mostrando el procedimiento:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700">1. Nitrógeno (N) - Z = 7</p>
                  <p className="text-sm text-gray-600">Escribe su configuración electrónica y dibuja el diagrama de orbitales.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700">2. Magnesio (Mg) - Z = 12</p>
                  <p className="text-sm text-gray-600">Escribe su configuración electrónica completa.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700">3. Calcio (Ca) - Z = 20</p>
                  <p className="text-sm text-gray-600">¿Cuántos electrones tiene en su última capa?</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-green-700">4. Hierro (Fe) - Z = 26</p>
                  <p className="text-sm text-gray-600">Escribe su configuración y señala los electrones en orbitales d.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Paso 4: Tabla Periódica */}
      {pasoActual === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-indigo-200">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center">
              <Map className="mr-3" />
              Conexión con la Tabla Periódica
            </h2>

            <div className="bg-indigo-50 p-6 rounded-xl mb-6 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold mb-4 text-indigo-800">🗺️ La Tabla Periódica como Mapa de Configuraciones</h3>
              <p className="text-lg text-gray-700 mb-4">
                ¡La tabla periódica está organizada según la configuración electrónica! 
                Su estructura refleja cómo se llenan los orbitales atómicos.
              </p>
              <div className="bg-white p-5 rounded-lg">
                <p className="font-bold text-indigo-700 mb-2">📚 Para copiar en tu carpeta:</p>
                <p className="text-gray-700">
                  La tabla periódica se divide en bloques según el último subnivel que se está llenando. 
                  Conocer estos bloques te permite escribir configuraciones electrónicas rápidamente usando 
                  la tabla como guía.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl border-2 border-blue-400 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-blue-800">📍 Los 4 Bloques de la Tabla Periódica</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-blue-700">Bloque s (izquierda):</p>
                    <p className="text-sm">• Grupos 1 y 2</p>
                    <p className="text-sm">• Se están llenando orbitales s</p>
                    <p className="text-sm">• Ejemplos: H, Li, Na, Ca</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-purple-700">Bloque p (derecha):</p>
                    <p className="text-sm">• Grupos 13 a 18</p>
                    <p className="text-sm">• Se están llenando orbitales p</p>
                    <p className="text-sm">• Ejemplos: C, N, O, Cl</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-pink-700">Bloque d (centro):</p>
                    <p className="text-sm">• Grupos 3 a 12</p>
                    <p className="text-sm">• Metales de transición</p>
                    <p className="text-sm">• Ejemplos: Fe, Cu, Zn</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-orange-700">Bloque f (abajo):</p>
                    <p className="text-sm">• Lantánidos y Actínidos</p>
                    <p className="text-sm">• Tierras raras</p>
                    <p className="text-sm">• Ejemplos: Ce, Th, U</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl border-2 border-green-400 shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-green-800">🔑 Información que te da la Tabla</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-green-700 mb-2">Periodo (fila horizontal):</p>
                    <p className="text-gray-700 text-sm">
                      Indica el nivel de energía más alto ocupado. Por ejemplo, si un elemento está en el 
                      periodo 3, su última capa es n=3.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-green-700 mb-2">Grupo (columna vertical):</p>
                    <p className="text-gray-700 text-sm">
                      Los elementos del mismo grupo tienen la misma cantidad de electrones de valencia 
                      (última capa), por eso tienen propiedades químicas similares.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-green-700 mb-2">Electrones de valencia:</p>
                    <p className="text-gray-700 text-sm">
                      Son los electrones de la última capa. Determinan el comportamiento químico del elemento 
                      y cómo se enlaza con otros átomos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-400 mb-6">
              <h4 className="text-xl font-bold mb-4 text-yellow-800">💡 Ejemplos Prácticos con la Tabla Periódica</h4>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-yellow-700 mb-2">Ejemplo 1: Sodio (Na)</p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Periodo 3 → tiene 3 niveles de energía</li>
                    <li>• Grupo 1 → tiene 1 electrón de valencia</li>
                    <li>• Bloque s → termina en s¹</li>
                    <li>• Configuración: 1s² 2s² 2p⁶ 3s¹</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-yellow-700 mb-2">Ejemplo 2: Cloro (Cl)</p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Periodo 3 → tiene 3 niveles de energía</li>
                    <li>• Grupo 17 → tiene 7 electrones de valencia</li>
                    <li>• Bloque p → termina en p⁵</li>
                    <li>• Configuración: 1s² 2s² 2p⁶ 3s² 3p⁵</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-indigo-800">📝 Método rápido usando la tabla periódica:</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">1.</span>
                  <span>Localiza el elemento en la tabla periódica</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">2.</span>
                  <span>Comienza desde el hidrógeno (H) y sigue el orden de la tabla</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">3.</span>
                  <span>Ve anotando cada bloque que atraviesas hasta llegar al elemento</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">4.</span>
                  <span>El exponente indica cuántos elementos has recorrido en ese subnivel</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Videos Section - Solo 2 videos esenciales */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-red-200 mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
          🎬 Videos Educativos - AL FIN ENTENDÍ
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Estos videos complementan lo aprendido. Míralos después de estudiar la teoría 🎓
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/QRUZUQLDEM4"
              title="Configuración Electrónica - AL FIN ENTENDÍ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
            <div className="bg-red-50 p-4">
              <p className="font-medium text-gray-800">Configuración Electrónica Explicada</p>
              <p className="text-sm text-gray-600">Canal: AL FIN ENTENDÍ</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/05IVwcJE6ao"
              title="Diagrama de Orbitales"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
            <div className="bg-red-50 p-4">
              <p className="font-medium text-gray-800">Configuración Electrónica - Ejemplos</p>
              <p className="text-sm text-gray-600">Complementario</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resumen Final */}
      <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
          <Calculator className="mr-3" />
          Resumen para Estudiar
        </h2>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-xl mb-2">✅ Lo que debes saber:</p>
              <ul className="space-y-2 ml-4">
                <li>• Los 3 principios: Aufbau, Pauli y Hund</li>
                <li>• El orden de llenado de orbitales (Diagrama de Moeller)</li>
                <li>• Capacidad de cada subnivel: s=2, p=6, d=10, f=14</li>
                <li>• Cómo escribir configuraciones electrónicas paso a paso</li>
                <li>• Relación entre configuración y tabla periódica</li>
                <li>• Qué son los electrones de valencia</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/40">
              <p className="font-bold text-xl mb-2">📚 Para practicar:</p>
              <p>Escribe configuraciones de los primeros 20 elementos y verifica con la tabla periódica.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
