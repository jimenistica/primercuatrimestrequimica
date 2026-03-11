import { Hash, AtomIcon, Scale, Users, Calculator, ExternalLink, Microscope, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function NumeroAtomicoMasico() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          ⚛️ Número Atómico y Número Másico ⚛️
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Aprende a identificar los elementos químicos y comprender la estructura interna del átomo. 
          ¡Es fundamental para entender la configuración electrónica! 🔬
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761058239857-d866c603fafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG9tJTIwc3RydWN0dXJlJTIwZGlhZ3JhbSUyMHBhcnRpY2xlc3xlbnwxfHx8fDE3NzMwNzA0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Estructura atómica"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Introducción */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 flex items-center">
          <BookOpen className="mr-3" />
          Conceptos Fundamentales
        </h2>
        
        <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">¿Qué hay dentro de un átomo?</h3>
          <p className="text-lg text-gray-700 mb-4">
            Como vimos en los modelos atómicos, el átomo tiene una estructura compleja. En su interior 
            encontramos tres tipos de partículas subatómicas fundamentales:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-5 rounded-lg shadow-md border-2 border-red-300">
              <div className="text-4xl mb-2 text-center">⊕</div>
              <h4 className="font-bold text-red-700 text-xl mb-2 text-center">PROTONES</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Carga: POSITIVA (+1)</li>
                <li>• Ubicación: NÚCLEO</li>
                <li>• Masa: 1 uma</li>
                <li>• Símbolo: p⁺</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border-2 border-gray-400">
              <div className="text-4xl mb-2 text-center">⊙</div>
              <h4 className="font-bold text-gray-700 text-xl mb-2 text-center">NEUTRONES</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Carga: NEUTRA (0)</li>
                <li>• Ubicación: NÚCLEO</li>
                <li>• Masa: 1 uma</li>
                <li>• Símbolo: n⁰</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border-2 border-blue-300">
              <div className="text-4xl mb-2 text-center">⊖</div>
              <h4 className="font-bold text-blue-700 text-xl mb-2 text-center">ELECTRONES</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Carga: NEGATIVA (-1)</li>
                <li>• Ubicación: ORBITALES</li>
                <li>• Masa: despreciable</li>
                <li>• Símbolo: e⁻</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold mb-3 text-yellow-800">📝 Para tu carpeta:</h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-bold">Átomo neutro:</span> Un átomo en estado neutro tiene la misma cantidad 
              de protones que de electrones, por lo que su carga total es cero.
            </p>
            <p className="bg-white p-4 rounded-lg font-mono text-center text-lg">
              Número de PROTONES = Número de ELECTRONES (en átomo neutro)
            </p>
            <p>
              <span className="font-bold">Núcleo atómico:</span> Es la región central del átomo donde se 
              concentran los protones y neutrones. Contiene prácticamente toda la masa del átomo pero 
              ocupa un espacio muy pequeño.
            </p>
          </div>
        </div>
      </div>

      {/* Número Atómico (Z) */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-purple-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center">
          <Hash className="mr-3" />
          Número Atómico (Z)
        </h2>

        <div className="bg-purple-50 p-6 rounded-xl mb-6 border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold mb-4 text-purple-800">Definición</h3>
          <p className="text-lg text-gray-700 mb-4">
            El <span className="font-bold text-purple-700">número atómico (Z)</span> es el número de 
            PROTONES que tiene un átomo en su núcleo. Este número es único para cada elemento químico 
            y lo identifica.
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-xl font-bold text-center text-purple-700 mb-3">Z = Número de Protones</p>
            <p className="text-gray-700 text-center">
              (En un átomo neutro también indica el número de electrones)
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-4 text-purple-800">🎯 Importancia del Número Atómico</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold text-purple-600 mr-2 mt-1">1.</span>
              <div>
                <span className="font-bold">Identifica al elemento:</span> Cada elemento tiene un número 
                atómico diferente. Por ejemplo, todos los átomos de carbono tienen Z=6, todos los de oxígeno 
                tienen Z=8.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-purple-600 mr-2 mt-1">2.</span>
              <div>
                <span className="font-bold">Ordena la tabla periódica:</span> Los elementos están ordenados 
                en la tabla periódica según su número atómico, de menor a mayor.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-purple-600 mr-2 mt-1">3.</span>
              <div>
                <span className="font-bold">Determina el número de electrones:</span> En un átomo neutro, 
                el número atómico nos dice cuántos electrones tiene, lo cual es fundamental para escribir 
                la configuración electrónica.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-purple-800">📚 Ejemplos para tu carpeta:</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-bold text-purple-700 mb-2">Hidrógeno (H)</p>
              <p className="text-gray-700">Z = 1 → Tiene 1 protón (y 1 electrón en átomo neutro)</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-bold text-purple-700 mb-2">Carbono (C)</p>
              <p className="text-gray-700">Z = 6 → Tiene 6 protones (y 6 electrones en átomo neutro)</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-bold text-purple-700 mb-2">Sodio (Na)</p>
              <p className="text-gray-700">Z = 11 → Tiene 11 protones (y 11 electrones en átomo neutro)</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-bold text-purple-700 mb-2">Cloro (Cl)</p>
              <p className="text-gray-700">Z = 17 → Tiene 17 protones (y 17 electrones en átomo neutro)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Número Másico (A) */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-green-700 flex items-center">
          <Scale className="mr-3" />
          Número Másico (A)
        </h2>

        <div className="bg-green-50 p-6 rounded-xl mb-6 border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-800">Definición</h3>
          <p className="text-lg text-gray-700 mb-4">
            El <span className="font-bold text-green-700">número másico (A)</span> es la suma del número 
            de PROTONES y NEUTRONES que tiene un átomo en su núcleo. Representa aproximadamente la masa 
            del átomo.
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-2xl font-bold text-center text-green-700 mb-2">A = Z + N</p>
            <p className="text-lg text-center text-gray-700">A = Protones + Neutrones</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-4 text-green-800">🔍 ¿Por qué es importante?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold text-green-600 mr-2">•</span>
              <div>
                Nos permite calcular el número de neutrones de un átomo usando la fórmula: 
                <span className="font-bold"> N = A - Z</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-green-600 mr-2">•</span>
              <div>
                Indica la masa aproximada del átomo (en unidades de masa atómica, uma)
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-green-600 mr-2">•</span>
              <div>
                Permite distinguir entre isótopos de un mismo elemento
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-green-800">📝 Ejemplos resueltos:</h3>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="font-bold text-green-700 mb-3 text-lg">Ejemplo 1: Carbono-12</p>
              <div className="space-y-2 text-gray-700">
                <p>• Dato: A = 12 y Z = 6</p>
                <p>• Protones = 6 (porque Z = 6)</p>
                <p>• Electrones = 6 (átomo neutro)</p>
                <p className="font-bold text-green-600">• Neutrones = A - Z = 12 - 6 = 6</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="font-bold text-green-700 mb-3 text-lg">Ejemplo 2: Oxígeno-16</p>
              <div className="space-y-2 text-gray-700">
                <p>• Dato: A = 16 y Z = 8</p>
                <p>• Protones = 8</p>
                <p>• Electrones = 8</p>
                <p className="font-bold text-green-600">• Neutrones = 16 - 8 = 8</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="font-bold text-green-700 mb-3 text-lg">Ejemplo 3: Sodio-23</p>
              <div className="space-y-2 text-gray-700">
                <p>• Dato: A = 23 y Z = 11</p>
                <p>• Protones = 11</p>
                <p>• Electrones = 11</p>
                <p className="font-bold text-green-600">• Neutrones = 23 - 11 = 12</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notación Química */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-orange-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-orange-700 flex items-center">
          <Calculator className="mr-3" />
          Notación Química
        </h2>

        <div className="bg-orange-50 p-6 rounded-xl mb-6 border-l-4 border-orange-500">
          <h3 className="text-2xl font-bold mb-4 text-orange-800">¿Cómo se representa un átomo?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Los átomos se representan usando una notación especial que incluye el símbolo del elemento, 
            el número atómico y el número másico:
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-6">
            <div className="text-center mb-4">
              <div className="inline-block relative">
                <span className="text-6xl font-bold text-orange-700">X</span>
                <span className="absolute top-0 -right-8 text-2xl font-bold text-red-600">A</span>
                <span className="absolute bottom-0 -right-8 text-2xl font-bold text-blue-600">Z</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="font-bold text-gray-800 mb-1">X</p>
                <p className="text-sm text-gray-600">Símbolo del elemento</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-red-600 mb-1">A (arriba)</p>
                <p className="text-sm text-gray-600">Número másico</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-blue-600 mb-1">Z (abajo)</p>
                <p className="text-sm text-gray-600">Número atómico</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border-2 border-orange-300">
              <p className="font-bold text-orange-700 mb-2 text-lg">Ejemplo 1:</p>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">
                  <span className="relative">
                    C
                    <span className="absolute -top-2 -right-6 text-2xl text-red-600">12</span>
                    <span className="absolute -bottom-2 -right-6 text-2xl text-blue-600">6</span>
                  </span>
                </div>
                <div className="text-gray-700">
                  <p>Carbono-12</p>
                  <p className="text-sm">6 protones, 6 neutrones, 6 electrones</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-orange-300">
              <p className="font-bold text-orange-700 mb-2 text-lg">Ejemplo 2:</p>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">
                  <span className="relative">
                    Na
                    <span className="absolute -top-2 -right-8 text-2xl text-red-600">23</span>
                    <span className="absolute -bottom-2 -right-8 text-2xl text-blue-600">11</span>
                  </span>
                </div>
                <div className="text-gray-700">
                  <p>Sodio-23</p>
                  <p className="text-sm">11 protones, 12 neutrones, 11 electrones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Isótopos */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-indigo-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center">
          <Microscope className="mr-3" />
          Isótopos
        </h2>

        <div className="bg-indigo-50 p-6 rounded-xl mb-6 border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">¿Qué son los isótopos?</h3>
          <p className="text-lg text-gray-700 mb-4">
            Los <span className="font-bold text-indigo-700">isótopos</span> son átomos del mismo elemento 
            (mismo Z) que tienen diferente número de neutrones (diferente A).
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-center text-lg mb-2">
              <span className="font-bold text-indigo-700">Mismo número atómico (Z)</span> = Mismo elemento
            </p>
            <p className="text-center text-lg">
              <span className="font-bold text-indigo-700">Diferente número másico (A)</span> = Diferentes isótopos
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-4 text-indigo-800">📚 Ejemplo: Isótopos del Carbono</h3>
          <p className="text-gray-700 mb-4">
            El carbono tiene varios isótopos. Los más importantes son:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md border-2 border-indigo-300">
              <h4 className="font-bold text-indigo-700 mb-3 text-center text-lg">Carbono-12</h4>
              <div className="text-center text-3xl font-bold mb-3">
                <span className="relative">
                  C
                  <span className="absolute -top-2 -right-6 text-xl text-red-600">12</span>
                  <span className="absolute -bottom-2 -right-6 text-xl text-blue-600">6</span>
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 6 protones</li>
                <li>• 6 neutrones</li>
                <li>• 6 electrones</li>
                <li className="text-green-600 font-bold">• Más abundante</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-2 border-indigo-300">
              <h4 className="font-bold text-indigo-700 mb-3 text-center text-lg">Carbono-13</h4>
              <div className="text-center text-3xl font-bold mb-3">
                <span className="relative">
                  C
                  <span className="absolute -top-2 -right-6 text-xl text-red-600">13</span>
                  <span className="absolute -bottom-2 -right-6 text-xl text-blue-600">6</span>
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 6 protones</li>
                <li>• 7 neutrones</li>
                <li>• 6 electrones</li>
                <li className="text-blue-600 font-bold">• Poco abundante</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-2 border-indigo-300">
              <h4 className="font-bold text-indigo-700 mb-3 text-center text-lg">Carbono-14</h4>
              <div className="text-center text-3xl font-bold mb-3">
                <span className="relative">
                  C
                  <span className="absolute -top-2 -right-6 text-xl text-red-600">14</span>
                  <span className="absolute -bottom-2 -right-6 text-xl text-blue-600">6</span>
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 6 protones</li>
                <li>• 8 neutrones</li>
                <li>• 6 electrones</li>
                <li className="text-orange-600 font-bold">• Radiactivo</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold">Observación importante:</span> Los tres tienen Z=6 (son carbono), 
              pero diferente número de neutrones, por eso tienen diferente número másico A.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
          <h3 className="text-lg font-bold mb-3 text-yellow-800">💡 Aplicación práctica:</h3>
          <p className="text-gray-700">
            El carbono-14 es radiactivo y se usa para datar fósiles y objetos arqueológicos (datación por 
            radiocarbono). Esta técnica permite determinar la edad de restos orgánicos de hasta 50,000 años.
          </p>
        </div>
      </div>

      {/* Simulador PhET */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
          <ExternalLink className="mr-3" />
          🎮 Simulador Interactivo PhET
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold mb-4">Construye un Átomo</h3>
          <p className="text-lg mb-4">
            ¡Experimenta construyendo tus propios átomos! Este simulador te permite agregar protones, 
            neutrones y electrones para crear diferentes elementos e isótopos.
          </p>
          <p className="mb-4">
            Podrás visualizar cómo cambia el elemento cuando agregas protones, y cómo se forman los 
            isótopos cuando modificas el número de neutrones.
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_es.html"
            width="100%"
            height="600"
            allowFullScreen
            title="Construye un Átomo - PhET"
            className="w-full"
          ></iframe>
        </div>

        <div className="mt-6 bg-white/10 backdrop-blur-sm p-5 rounded-xl">
          <h4 className="font-bold text-xl mb-3">📝 Actividades sugeridas con el simulador:</h4>
          <ol className="space-y-2">
            <li>1. Construye un átomo de oxígeno (Z=8) y observa cuántos electrones tiene</li>
            <li>2. Crea los isótopos carbono-12, carbono-13 y carbono-14</li>
            <li>3. Experimenta qué pasa cuando agregas o quitas electrones (iones)</li>
            <li>4. Construye los primeros 10 elementos de la tabla periódica</li>
          </ol>
        </div>
      </div>

      {/* Video educativo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-red-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
          🎬 Video Explicativo - AL FIN ENTENDÍ
        </h2>
        
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/hPFo76sGX0k"
            title="Número Atómico y Másico - AL FIN ENTENDÍ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-medium text-gray-800 text-center">
            Número Atómico y Número Másico Explicados - Canal: AL FIN ENTENDÍ
          </p>
        </div>
      </div>

      {/* Ejercicios para practicar */}
      <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">📝 Ejercicios para tu Carpeta</h2>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
          <p className="text-lg mb-4">
            Copia estos ejercicios en tu carpeta y resuélvelos. ¡Recuerda mostrar el procedimiento!
          </p>
          
          <div className="space-y-4">
            <div className="bg-white/30 p-4 rounded-lg">
              <p className="font-bold mb-2">Ejercicio 1:</p>
              <p>Un átomo tiene Z=8 y A=16. Determina el número de protones, neutrones y electrones.</p>
            </div>
            
            <div className="bg-white/30 p-4 rounded-lg">
              <p className="font-bold mb-2">Ejercicio 2:</p>
              <p>¿Cuántos neutrones tiene el cloro-35 si su número atómico es 17?</p>
            </div>
            
            <div className="bg-white/30 p-4 rounded-lg">
              <p className="font-bold mb-2">Ejercicio 3:</p>
              <p>Completa la siguiente tabla en tu carpeta:</p>
              <div className="mt-2 bg-white/40 p-3 rounded text-sm">
                <p>Elemento | Z | A | Protones | Neutrones | Electrones</p>
                <p>Nitrógeno-14 | 7 | ? | ? | ? | ?</p>
                <p>Aluminio-27 | ? | 27 | ? | 14 | ?</p>
              </div>
            </div>

            <div className="bg-white/30 p-4 rounded-lg">
              <p className="font-bold mb-2">Ejercicio 4:</p>
              <p>Explica con tus palabras: ¿Qué son los isótopos? Da un ejemplo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}