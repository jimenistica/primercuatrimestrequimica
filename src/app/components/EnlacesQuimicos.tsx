import { Link as LinkIcon, Zap, Scale, Atom, Boxes, FlaskConical, Youtube } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function EnlacesQuimicos() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
          🔗 Enlaces Químicos 🔗
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Descubre cómo los átomos se unen para formar moléculas y compuestos. 
          ¡Aprende por qué la sal se disuelve en agua y el aceite no! 🧪
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596088359637-8d614753fb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xlY3VsYXIlMjBib25kcyUyMGNoZW1pc3RyeSUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzczMDcwNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Enlaces moleculares"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Electrones de Valencia */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-purple-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center">
          <Zap className="mr-3" />
          Electrones de Valencia
        </h2>

        <div className="bg-purple-50 p-6 rounded-xl mb-6 border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold mb-4 text-purple-800">¿Qué son los electrones de valencia?</h3>
          <p className="text-lg text-gray-700 mb-4">
            Los <span className="font-bold text-purple-700">electrones de valencia</span> son los electrones 
            que se encuentran en la última capa o nivel de energía de un átomo. Son los electrones más 
            externos y los que participan en la formación de enlaces químicos.
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="font-bold text-purple-700 mb-2 text-lg">📚 Para tu carpeta:</p>
            <p className="text-gray-700 italic">
              "Los electrones de valencia son los responsables del comportamiento químico de un elemento. 
              Determinan con qué otros elementos puede combinarse y qué tipo de enlace formará."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-4 text-purple-800">🎯 ¿Cómo identificar los electrones de valencia?</h3>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg">
              <p className="font-bold text-purple-700 mb-3">Método 1: Usando la configuración electrónica</p>
              <p className="text-gray-700 mb-2">
                Los electrones de valencia son los que están en el nivel de energía más alto (el número mayor).
              </p>
              <div className="bg-purple-50 p-3 rounded mt-2">
                <p className="font-mono text-sm">Ejemplo: Oxígeno (O): 1s² 2s² 2p⁴</p>
                <p className="text-sm text-gray-700 mt-1">
                  El nivel más alto es n=2, entonces los electrones de valencia son: 2s² 2p⁴ = 
                  <span className="font-bold text-purple-700"> 6 electrones de valencia</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg">
              <p className="font-bold text-purple-700 mb-3">Método 2: Usando la tabla periódica</p>
              <p className="text-gray-700 mb-2">
                El número del grupo (columna) te indica los electrones de valencia:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mt-2">
                <li>• Grupo 1 → 1 electrón de valencia</li>
                <li>• Grupo 2 → 2 electrones de valencia</li>
                <li>• Grupos 13-18 → resta 10 al número del grupo (Grupo 17 → 7 electrones)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-blue-800">📝 Ejemplos para copiar:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-700">Sodio (Na) - Grupo 1</p>
              <p className="text-sm text-gray-700">Configuración: 1s² 2s² 2p⁶ 3s¹</p>
              <p className="text-sm font-bold text-blue-600">Electrones de valencia: 1</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-700">Cloro (Cl) - Grupo 17</p>
              <p className="text-sm text-gray-700">Configuración: [Ne] 3s² 3p⁵</p>
              <p className="text-sm font-bold text-blue-600">Electrones de valencia: 7</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-700">Carbono (C) - Grupo 14</p>
              <p className="text-sm text-gray-700">Configuración: 1s² 2s² 2p²</p>
              <p className="text-sm font-bold text-blue-600">Electrones de valencia: 4</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-700">Neón (Ne) - Grupo 18</p>
              <p className="text-sm text-gray-700">Configuración: 1s² 2s² 2p⁶</p>
              <p className="text-sm font-bold text-blue-600">Electrones de valencia: 8 (capa completa)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Definición de Enlace Químico */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-green-700 flex items-center">
          <LinkIcon className="mr-3" />
          ¿Qué es un Enlace Químico?
        </h2>

        <div className="bg-green-50 p-6 rounded-xl mb-6 border-l-4 border-green-500">
          <p className="text-lg text-gray-700 mb-4">
            Un <span className="font-bold text-green-700">enlace químico</span> es la fuerza de atracción 
            que mantiene unidos a dos o más átomos para formar moléculas o compuestos.
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="font-bold text-green-700 mb-2">📚 Definición formal para tu carpeta:</p>
            <p className="text-gray-700 italic">
              "Un enlace químico es la fuerza electrostática que mantiene unidos a los átomos en una molécula 
              o compuesto, resultado de la interacción entre sus electrones de valencia."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-green-800">🎯 ¿Por qué se forman los enlaces?</h3>
          <div className="bg-white p-5 rounded-lg space-y-3 text-gray-700">
            <p>
              <span className="font-bold text-green-700">Regla del Octeto:</span> Los átomos tienden a 
              ganar, perder o compartir electrones para completar 8 electrones en su última capa 
              (como los gases nobles), alcanzando así mayor estabilidad.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mt-3">
              <p className="font-bold text-green-700 mb-2">Excepción:</p>
              <p className="text-sm">
                El hidrógeno y el helio solo necesitan 2 electrones para ser estables (regla del dueto).
              </p>
            </div>
            <p className="mt-3">
              <span className="font-bold text-green-700">Importante:</span> Los átomos se enlazan porque 
              en ese estado tienen menor energía y son más estables que cuando están separados.
            </p>
          </div>
        </div>
      </div>

      {/* Electronegatividad */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-orange-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-orange-700 flex items-center">
          <Scale className="mr-3" />
          Electronegatividad
        </h2>

        <div className="bg-orange-50 p-6 rounded-xl mb-6 border-l-4 border-orange-500">
          <h3 className="text-2xl font-bold mb-4 text-orange-800">Definición</h3>
          <p className="text-lg text-gray-700 mb-4">
            La <span className="font-bold text-orange-700">electronegatividad</span> es la capacidad de un 
            átomo para atraer hacia sí los electrones de un enlace químico.
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="font-bold text-orange-700 mb-2">📚 Para copiar en tu carpeta:</p>
            <p className="text-gray-700">
              La escala de electronegatividad más usada es la de Linus Pauling, donde el flúor (F) es el 
              elemento más electronegativo con un valor de 4.0, y el francio (Fr) es el menos electronegativo.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-4 text-orange-800">📊 Tendencias en la Tabla Periódica</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg">
              <p className="font-bold text-orange-700 mb-2">↑ En un grupo (hacia arriba):</p>
              <p className="text-gray-700 text-sm">
                La electronegatividad AUMENTA al subir en un grupo. Los átomos más pequeños atraen más 
                fuertemente los electrones.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <p className="font-bold text-orange-700 mb-2">→ En un periodo (hacia la derecha):</p>
              <p className="text-gray-700 text-sm">
                La electronegatividad AUMENTA de izquierda a derecha. El flúor (esquina superior derecha) 
                es el más electronegativo.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-blue-800">🎯 Importancia de la Electronegatividad</h3>
          <p className="text-gray-700 mb-3">
            La <span className="font-bold">diferencia de electronegatividad</span> entre dos átomos nos 
            permite predecir qué tipo de enlace formarán:
          </p>
          <div className="bg-white p-5 rounded-lg space-y-2 text-gray-700">
            <p>• <span className="font-bold text-blue-700">Diferencia pequeña (0 - 0.4):</span> Enlace covalente no polar</p>
            <p>• <span className="font-bold text-purple-700">Diferencia media (0.4 - 1.7):</span> Enlace covalente polar</p>
            <p>• <span className="font-bold text-pink-700">Diferencia grande (&gt; 1.7):</span> Enlace iónico</p>
          </div>
        </div>
      </div>

      {/* Tipos de Enlaces */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-indigo-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center">
          <Atom className="mr-3" />
          Tipos de Enlaces Químicos
        </h2>

        <div className="space-y-6">
          {/* Enlace Iónico */}
          <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl border-2 border-pink-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-700">1. Enlace Iónico</h3>
            <div className="bg-white p-5 rounded-lg mb-4">
              <p className="font-bold text-pink-700 mb-2">Definición:</p>
              <p className="text-gray-700">
                Se forma por la <span className="font-bold">transferencia de electrones</span> de un átomo 
                a otro. Ocurre entre un metal (que cede electrones) y un no metal (que gana electrones).
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-2">Características:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Se forman iones (cationes + y aniones -)</li>
                  <li>• Gran diferencia de electronegatividad (&gt;1.7)</li>
                  <li>• Atracción electrostática muy fuerte</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-2">Ejemplo:</p>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-bold text-gray-800">NaCl (Cloruro de sodio - Sal)</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Na pierde 1e⁻ → Na⁺<br />
                    Cl gana 1e⁻ → Cl⁻<br />
                    Se atraen: Na⁺Cl⁻
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlace Covalente */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">2. Enlace Covalente</h3>
            <div className="bg-white p-5 rounded-lg mb-4">
              <p className="font-bold text-blue-700 mb-2">Definición:</p>
              <p className="text-gray-700">
                Se forma cuando dos átomos <span className="font-bold">comparten electrones</span>. 
                Ocurre generalmente entre no metales con electronegatividades similares.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">2a) Enlace Covalente No Polar</p>
                <p className="text-gray-700 text-sm mb-2">
                  Los electrones se comparten por igual. Ocurre entre átomos iguales o con 
                  electronegatividades muy similares.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-gray-800">Ejemplo: H₂, O₂, N₂</p>
                  <p className="text-sm text-gray-700">Moléculas diatómicas (dos átomos iguales)</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">2b) Enlace Covalente Polar</p>
                <p className="text-gray-700 text-sm mb-2">
                  Los electrones se comparten de manera desigual. El átomo más electronegativo atrae 
                  más los electrones, generando polos (δ+ y δ-).
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-gray-800">Ejemplo: H₂O (Agua)</p>
                  <p className="text-sm text-gray-700">
                    El oxígeno es más electronegativo que el hidrógeno, por eso atrae más 
                    los electrones compartidos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlace Metálico */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
            <h3 className="text-2xl font-bold mb-4 text-yellow-700">3. Enlace Metálico</h3>
            <div className="bg-white p-5 rounded-lg mb-4">
              <p className="font-bold text-yellow-700 mb-2">Definición:</p>
              <p className="text-gray-700">
                Se forma entre átomos de metales. Los electrones de valencia se mueven libremente formando 
                un "mar de electrones" que rodea a los cationes metálicos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-yellow-700 mb-2">Características:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Electrones deslocalizados (libres)</li>
                  <li>• Ocurre solo entre metales</li>
                  <li>• Explica propiedades metálicas</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-yellow-700 mb-2">Ejemplos:</p>
                <p className="text-sm text-gray-700">
                  Fe (hierro), Cu (cobre), Au (oro), Al (aluminio), Ag (plata)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Propiedades Macroscópicas */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-teal-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 flex items-center">
          <Boxes className="mr-3" />
          Propiedades Macroscópicas según el Tipo de Enlace
        </h2>

        <div className="bg-teal-50 p-6 rounded-xl mb-6 border-l-4 border-teal-500">
          <p className="text-lg text-gray-700 mb-3">
            El tipo de enlace determina las propiedades físicas y químicas que observamos en las 
            sustancias a simple vista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Compuestos Iónicos */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-pink-800 mb-4 text-xl text-center">Compuestos Iónicos</h3>
            <div className="bg-white p-4 rounded-lg space-y-2 text-sm text-gray-700">
              <p>✓ <span className="font-bold">Puntos de fusión y ebullición altos</span></p>
              <p>✓ <span className="font-bold">Sólidos a temperatura ambiente</span></p>
              <p>✓ <span className="font-bold">Duros pero frágiles</span> (se rompen fácilmente)</p>
              <p>✓ <span className="font-bold">Conducen electricidad cuando están fundidos o disueltos</span> en agua</p>
              <p>✓ <span className="font-bold">Solubles en agua</span> (generalmente)</p>
            </div>
            <div className="mt-3 bg-pink-50 p-3 rounded">
              <p className="text-xs font-bold text-pink-800">Ejemplos:</p>
              <p className="text-xs text-gray-700">NaCl (sal), CaCO₃ (mármol), KBr</p>
            </div>
          </div>

          {/* Compuestos Covalentes */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-blue-800 mb-4 text-xl text-center">Compuestos Covalentes</h3>
            <div className="bg-white p-4 rounded-lg space-y-2 text-sm text-gray-700">
              <p>✓ <span className="font-bold">Puntos de fusión y ebullición bajos</span></p>
              <p>✓ <span className="font-bold">Pueden ser gases, líquidos o sólidos</span> a temp. ambiente</p>
              <p>✓ <span className="font-bold">Blandos</span> (si son sólidos)</p>
              <p>✓ <span className="font-bold">No conducen electricidad</span> (generalmente)</p>
              <p>✓ <span className="font-bold">Insolubles en agua</span> pero solubles en solventes orgánicos</p>
            </div>
            <div className="mt-3 bg-blue-50 p-3 rounded">
              <p className="text-xs font-bold text-blue-800">Ejemplos:</p>
              <p className="text-xs text-gray-700">H₂O, CO₂, CH₄ (metano), azúcar</p>
            </div>
          </div>

          {/* Metales */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-yellow-800 mb-4 text-xl text-center">Metales</h3>
            <div className="bg-white p-4 rounded-lg space-y-2 text-sm text-gray-700">
              <p>✓ <span className="font-bold">Puntos de fusión variables</span> (algunos altos, otros bajos)</p>
              <p>✓ <span className="font-bold">Sólidos</span> a temp. ambiente (excepto Hg)</p>
              <p>✓ <span className="font-bold">Maleables y dúctiles</span> (se pueden deformar)</p>
              <p>✓ <span className="font-bold">Conducen electricidad y calor</span> muy bien</p>
              <p>✓ <span className="font-bold">Brillo metálico</span></p>
            </div>
            <div className="mt-3 bg-yellow-50 p-3 rounded">
              <p className="text-xs font-bold text-yellow-800">Ejemplos:</p>
              <p className="text-xs text-gray-700">Fe, Cu, Al, Ag, Au</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cuadro Comparativo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-green-700 flex items-center">
          <FlaskConical className="mr-3" />
          Cuadro Comparativo - Para copiar en tu carpeta
        </h2>

        <div className="bg-green-50 p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                  <th className="border border-green-700 p-4 text-left">Característica</th>
                  <th className="border border-green-700 p-4">Enlace Iónico</th>
                  <th className="border border-green-700 p-4">Enlace Covalente</th>
                  <th className="border border-green-700 p-4">Enlace Metálico</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-bold">¿Entre qué átomos?</td>
                  <td className="border border-gray-300 p-3">Metal + No metal</td>
                  <td className="border border-gray-300 p-3">No metal + No metal</td>
                  <td className="border border-gray-300 p-3">Metal + Metal</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">¿Cómo se unen?</td>
                  <td className="border border-gray-300 p-3">Transferencia de e⁻</td>
                  <td className="border border-gray-300 p-3">Compartición de e⁻</td>
                  <td className="border border-gray-300 p-3">Mar de e⁻ deslocalizados</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-bold">Diferencia de electroneg.</td>
                  <td className="border border-gray-300 p-3">&gt; 1.7 (grande)</td>
                  <td className="border border-gray-300 p-3">0 - 1.7 (pequeña/media)</td>
                  <td className="border border-gray-300 p-3">0 (átomos iguales)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">Estado físico común</td>
                  <td className="border border-gray-300 p-3">Sólido cristalino</td>
                  <td className="border border-gray-300 p-3">Gas, líquido o sólido</td>
                  <td className="border border-gray-300 p-3">Sólido</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-bold">Punto de fusión</td>
                  <td className="border border-gray-300 p-3">Alto</td>
                  <td className="border border-gray-300 p-3">Bajo</td>
                  <td className="border border-gray-300 p-3">Variable</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">Conductividad eléctrica</td>
                  <td className="border border-gray-300 p-3">Sí (fundido o disuelto)</td>
                  <td className="border border-gray-300 p-3">No</td>
                  <td className="border border-gray-300 p-3">Sí (siempre)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-bold">Solubilidad en agua</td>
                  <td className="border border-gray-300 p-3">Alta (generalmente)</td>
                  <td className="border border-gray-300 p-3">Baja</td>
                  <td className="border border-gray-300 p-3">Insolubles</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">Ejemplos</td>
                  <td className="border border-gray-300 p-3">NaCl, CaO, MgBr₂</td>
                  <td className="border border-gray-300 p-3">H₂O, CO₂, CH₄</td>
                  <td className="border border-gray-300 p-3">Fe, Cu, Au, Al</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Video educativo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-red-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700 flex items-center justify-center">
          <Youtube className="mr-3 w-10 h-10" />
          Video Explicativo - AL FIN ENTENDÍ
        </h2>
        
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/79b-Lx3fT_k"
            title="Enlaces Químicos - AL FIN ENTENDÍ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-medium text-gray-800 text-center">
            Enlaces Químicos Explicados Fácilmente - Canal: AL FIN ENTENDÍ
          </p>
        </div>
      </div>

      {/* Resumen Final */}
      <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">📚 Resumen de Enlaces Químicos</h2>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-3">
            <p>✅ Los <span className="font-bold">electrones de valencia</span> son los responsables de formar enlaces</p>
            <p>✅ Los átomos se enlazan para alcanzar <span className="font-bold">mayor estabilidad</span> (regla del octeto)</p>
            <p>✅ La <span className="font-bold">electronegatividad</span> nos ayuda a predecir el tipo de enlace</p>
            <p>✅ Existen tres tipos principales: <span className="font-bold">Iónico, Covalente y Metálico</span></p>
            <p>✅ El tipo de enlace determina las <span className="font-bold">propiedades</span> de las sustancias</p>
            <p className="pt-3 border-t border-white/40 mt-4">
              💡 <span className="font-bold">Tip:</span> Para saber qué enlace forma, mira en la tabla periódica: 
              metal + no metal = iónico, no metal + no metal = covalente, metal + metal = metálico
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}