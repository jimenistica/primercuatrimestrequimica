import { Table, User, Lightbulb, Boxes, FlaskConical, Sparkles, Coffee, Home, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function TablaPeriodica() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          🧪 La Tabla Periódica 🧪
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          ¡El mapa del universo químico! Descubre cómo se organizan los elementos y por qué 
          están en tu vida cotidiana. 🌟
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1711185898441-f493426390cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJpb2RpYyUyMHRhYmxlJTIwZWxlbWVudHMlMjBjaGVtaXN0cnl8ZW58MXx8fHwxNzczMDcxMjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tabla Periódica"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* ¿Qué es un elemento? */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 flex items-center">
          <Sparkles className="mr-3" />
          ¿Qué es un Elemento Químico?
        </h2>

        <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Definición</h3>
          <p className="text-lg text-gray-700 mb-4">
            Un <span className="font-bold text-blue-700">elemento químico</span> es una sustancia pura 
            que NO se puede descomponer en sustancias más simples por métodos químicos. Está formado 
            por átomos que tienen el mismo número atómico (Z).
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="font-bold text-blue-700 mb-2 text-lg">📚 Para tu carpeta:</p>
            <p className="text-gray-700 italic">
              "Un elemento químico es una sustancia constituida por átomos con el mismo número de protones 
              en su núcleo. Cada elemento tiene propiedades únicas y está representado por un símbolo químico."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-4 text-blue-800">🎯 Características de los elementos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Símbolo químico</p>
              <p className="text-gray-700 text-sm">
                Cada elemento tiene un símbolo de 1 o 2 letras. Ejemplos: H (hidrógeno), 
                O (oxígeno), Na (sodio), Cl (cloro)
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Número atómico único</p>
              <p className="text-gray-700 text-sm">
                Cada elemento tiene un número atómico diferente que lo identifica. 
                Por ejemplo, todos los átomos de carbono tienen Z=6.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Propiedades únicas</p>
              <p className="text-gray-700 text-sm">
                Cada elemento tiene su propio conjunto de propiedades físicas y químicas: 
                color, densidad, punto de fusión, reactividad, etc.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">No se pueden descomponer</p>
              <p className="text-gray-700 text-sm">
                Un elemento no se puede separar en sustancias más simples mediante 
                reacciones químicas ordinarias.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold mb-3 text-yellow-800">💡 Importante:</h3>
          <p className="text-gray-700">
            <span className="font-bold">Elemento vs Compuesto:</span> Un elemento está formado por un solo 
            tipo de átomo (como el oxígeno O₂), mientras que un compuesto está formado por dos o más 
            elementos combinados (como el agua H₂O, que tiene hidrógeno y oxígeno).
          </p>
        </div>
      </div>

      {/* ¿Qué es la Tabla Periódica? */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-purple-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center">
          <Table className="mr-3" />
          ¿Qué es la Tabla Periódica?
        </h2>

        <div className="bg-purple-50 p-6 rounded-xl mb-6 border-l-4 border-purple-500">
          <p className="text-lg text-gray-700 mb-4">
            La <span className="font-bold text-purple-700">Tabla Periódica</span> es una herramienta que 
            organiza todos los elementos químicos conocidos según sus propiedades y características. 
            Es como un "mapa" del mundo de los elementos.
          </p>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="font-bold text-purple-700 mb-2">📚 Definición para copiar:</p>
            <p className="text-gray-700 italic">
              "La Tabla Periódica es un esquema que clasifica, organiza y distribuye los elementos químicos 
              en orden creciente de número atómico, agrupándolos según sus propiedades y características similares."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-purple-800">🎯 ¿Por qué es periódica?</h3>
          <p className="text-gray-700 mb-3">
            Se llama "periódica" porque las propiedades de los elementos se REPITEN de manera regular 
            (periódica). Los elementos de una misma columna tienen propiedades químicas similares.
          </p>
          <div className="bg-white p-4 rounded-lg mt-3">
            <p className="font-bold text-purple-700 mb-2">Ejemplo:</p>
            <p className="text-gray-700 text-sm">
              El litio (Li), sodio (Na) y potasio (K) están en la misma columna (Grupo 1) y todos son 
              metales muy reactivos que reaccionan violentamente con el agua. ¡Tienen comportamientos similares!
            </p>
          </div>
        </div>
      </div>

      {/* Historia - Mendeleiev */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-green-700 flex items-center">
          <User className="mr-3" />
          Historia: Dmitri Mendeleiev
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-3 text-green-800">El Padre de la Tabla Periódica</h3>
            <p className="text-gray-700 mb-3">
              <span className="font-bold text-green-700">Dmitri Mendeleiev</span>, un químico ruso, 
              creó la primera versión de la Tabla Periódica en <span className="font-bold">1869</span>.
            </p>
            <p className="text-gray-700 mb-3">
              Ordenó los elementos conocidos (63 en ese momento) por masa atómica y los agrupó según 
              sus propiedades similares.
            </p>
            <div className="bg-white p-4 rounded-lg mt-3">
              <p className="font-bold text-green-700 mb-2">🎓 Su genialidad:</p>
              <p className="text-gray-700 text-sm">
                Dejó espacios vacíos en su tabla y PREDIJO que existían elementos aún no descubiertos. 
                ¡Incluso describió sus propiedades! Años después, esos elementos fueron descubiertos 
                tal como él los había predicho.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-green-800">La Tabla Moderna</h3>
            <p className="text-gray-700 mb-3">
              La tabla actual fue perfeccionada por <span className="font-bold">Henry Moseley</span> en 
              1913, quien la reordenó por número atómico en lugar de masa atómica.
            </p>
            <div className="bg-white p-4 rounded-lg space-y-2 text-sm text-gray-700">
              <p>• Actualmente tiene <span className="font-bold text-green-700">118 elementos</span> confirmados</p>
              <p>• Los primeros 98 existen naturalmente en la Tierra</p>
              <p>• Los elementos 99-118 son sintéticos (creados en laboratorios)</p>
              <p>• Se siguen buscando nuevos elementos</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
          <p className="font-bold text-yellow-800 mb-2">📝 Para tu carpeta:</p>
          <p className="text-gray-700">
            Dmitri Mendeleiev (1834-1907) organizó los elementos en 1869 creando la primera Tabla Periódica. 
            Su trabajo revolucionó la química y permitió predecir la existencia de elementos desconocidos.
          </p>
        </div>
      </div>

      {/* Estructura de la Tabla */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-orange-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-orange-700 flex items-center">
          <Boxes className="mr-3" />
          Principales Aspectos de la Tabla Periódica
        </h2>

        <div className="space-y-6">
          {/* Períodos */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-2 border-orange-300">
            <h3 className="text-2xl font-bold mb-4 text-orange-800">1. Períodos (Filas Horizontales)</h3>
            <div className="bg-white p-5 rounded-lg mb-4">
              <p className="text-gray-700 mb-3">
                Son las <span className="font-bold text-orange-700">7 filas horizontales</span> de la tabla. 
                El número del período indica cuántos niveles de energía (capas electrónicas) tiene el átomo.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">Ejemplo:</p>
                <p className="text-gray-700 text-sm">
                  • Sodio (Na) está en el período 3 → tiene 3 niveles de energía<br />
                  • Cloro (Cl) también está en el período 3 → tiene 3 niveles de energía
                </p>
              </div>
            </div>
          </div>

          {/* Grupos */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">2. Grupos (Columnas Verticales)</h3>
            <div className="bg-white p-5 rounded-lg mb-4">
              <p className="text-gray-700 mb-3">
                Son las <span className="font-bold text-blue-700">18 columnas verticales</span>. Los elementos 
                del mismo grupo tienen propiedades químicas similares porque tienen el mismo número de 
                electrones de valencia.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-bold text-blue-700 mb-1">Grupo 1: Metales Alcalinos</p>
                  <p className="text-xs text-gray-700">Li, Na, K - Muy reactivos, brillantes</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-bold text-blue-700 mb-1">Grupo 17: Halógenos</p>
                  <p className="text-xs text-gray-700">F, Cl, Br - Muy reactivos, forman sales</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-bold text-blue-700 mb-1">Grupo 18: Gases Nobles</p>
                  <p className="text-xs text-gray-700">He, Ne, Ar - Muy estables, no reactivos</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-bold text-blue-700 mb-1">Grupos 3-12: Metales de Transición</p>
                  <p className="text-xs text-gray-700">Fe, Cu, Ag, Au - Conductores, maleables</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clasificación: Metales, No metales, Metaloides */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-800">3. Clasificación: Metales, No Metales y Metaloides</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-yellow-700 mb-3 text-lg">⚙️ METALES</h4>
                <p className="text-sm text-gray-700 mb-2">Ubicación: Izquierda y centro de la tabla</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Conducen electricidad y calor</li>
                  <li>✓ Brillantes y maleables</li>
                  <li>✓ Sólidos (excepto Hg)</li>
                  <li>✓ Pierden electrones fácilmente</li>
                </ul>
                <p className="text-xs text-yellow-700 mt-2 font-bold">Ej: Fe, Cu, Au, Al, Na</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-green-700 mb-3 text-lg">🌿 NO METALES</h4>
                <p className="text-sm text-gray-700 mb-2">Ubicación: Derecha de la tabla</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ No conducen electricidad</li>
                  <li>✓ Opacos y frágiles</li>
                  <li>✓ Gases o sólidos (excepto Br)</li>
                  <li>✓ Ganan electrones fácilmente</li>
                </ul>
                <p className="text-xs text-green-700 mt-2 font-bold">Ej: O, N, C, S, Cl</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-3 text-lg">⚡ METALOIDES</h4>
                <p className="text-sm text-gray-700 mb-2">Ubicación: Entre metales y no metales</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Propiedades intermedias</li>
                  <li>✓ Semiconductores</li>
                  <li>✓ Importantes en electrónica</li>
                  <li>✓ Solo hay 7-8 metaloides</li>
                </ul>
                <p className="text-xs text-purple-700 mt-2 font-bold">Ej: Si, Ge, As, B</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Utilidades en la Vida Cotidiana */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-teal-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 flex items-center">
          <FlaskConical className="mr-3" />
          Elementos y Compuestos en Tu Vida Cotidiana
        </h2>

        <div className="bg-teal-50 p-6 rounded-xl mb-6 border-l-4 border-teal-500">
          <p className="text-lg text-gray-700 mb-3">
            ¡Los elementos químicos están en TODAS PARTES! Desde el aire que respiras hasta tu teléfono celular. 
            Veamos algunos ejemplos fascinantes:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* En tu casa */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-blue-800 mb-4 text-xl flex items-center">
              <Home className="mr-2" /> En Tu Casa
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-blue-700">🧂 Sal de cocina (NaCl)</p>
                <p className="text-xs">Sodio + Cloro - Esencial para la vida, sazona tus comidas</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-blue-700">💧 Agua (H₂O)</p>
                <p className="text-xs">Hidrógeno + Oxígeno - Bebes, cocinas, te bañas con ella</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-blue-700">🍬 Azúcar (C₁₂H₂₂O₁₁)</p>
                <p className="text-xs">Carbono + Hidrógeno + Oxígeno - Endulza tus alimentos</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-blue-700">🔋 Pilas</p>
                <p className="text-xs">Zinc (Zn) y Manganeso (Mn) - Energía para controles y juguetes</p>
              </div>
            </div>
          </div>

          {/* En tu cuerpo */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-pink-800 mb-4 text-xl flex items-center">
              <Sparkles className="mr-2" /> En Tu Cuerpo
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-pink-700">🦴 Calcio (Ca)</p>
                <p className="text-xs">En huesos y dientes - Te mantiene fuerte</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-pink-700">🩸 Hierro (Fe)</p>
                <p className="text-xs">En la sangre (hemoglobina) - Transporta oxígeno</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-pink-700">💪 Sodio y Potasio (Na, K)</p>
                <p className="text-xs">En músculos y nervios - Transmiten impulsos nerviosos</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-pink-700">🧠 Carbono (C)</p>
                <p className="text-xs">Base de la vida - Todo tu cuerpo está formado por compuestos de carbono</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* En la tecnología */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-purple-800 mb-4 text-xl flex items-center">
              <Zap className="mr-2" /> En la Tecnología
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-purple-700">📱 Silicio (Si)</p>
                <p className="text-xs">En chips y procesadores - Cerebro de computadoras y celulares</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-purple-700">💡 Tungsteno (W)</p>
                <p className="text-xs">En focos incandescentes - Punto de fusión altísimo</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-purple-700">🔌 Cobre (Cu)</p>
                <p className="text-xs">En cables eléctricos - Excelente conductor</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-purple-700">💎 Carbono (C)</p>
                <p className="text-xs">Como grafito en lápices y diamante en joyería</p>
              </div>
            </div>
          </div>

          {/* En alimentos */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-green-800 mb-4 text-xl flex items-center">
              <Coffee className="mr-2" /> En Alimentos y Bebidas
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-green-700">🥤 Dióxido de carbono (CO₂)</p>
                <p className="text-xs">En bebidas gaseosas - Las hace burbujeantes</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-green-700">🧈 Yodo (I)</p>
                <p className="text-xs">En sal yodada - Previene problemas de tiroides</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-green-700">🥛 Calcio (Ca)</p>
                <p className="text-xs">En leche y queso - Fortalece huesos</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-bold text-green-700">🍌 Potasio (K)</p>
                <p className="text-xs">En plátanos - Importante para músculos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información de la tabla */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-indigo-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center">
          <Lightbulb className="mr-3" />
          ¿Qué Información nos da cada casilla?
        </h2>

        <div className="bg-indigo-50 p-6 rounded-xl mb-6">
          <p className="text-gray-700 mb-4">
            Cada elemento en la tabla periódica tiene su propia "casilla" que contiene información importante:
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="inline-block border-4 border-indigo-400 rounded-lg p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="text-sm text-indigo-600 font-bold">6</div>
                <div className="text-5xl font-bold text-indigo-800 my-2">C</div>
                <div className="text-lg font-medium text-gray-700">Carbono</div>
                <div className="text-sm text-gray-600 mt-1">12.01</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-700 mb-1">Número arriba: Número Atómico (Z)</p>
                <p className="text-sm text-gray-700">Indica cuántos protones tiene (y electrones en átomo neutro)</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-700 mb-1">Letra(s) grande(s): Símbolo</p>
                <p className="text-sm text-gray-700">Abreviatura internacional del elemento</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-700 mb-1">Palabra: Nombre</p>
                <p className="text-sm text-gray-700">Nombre completo del elemento</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-700 mb-1">Número abajo: Masa Atómica</p>
                <p className="text-sm text-gray-700">Masa promedio del átomo (en uma)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Educativo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-red-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
          🎬 Video Explicativo - La Tabla Periódica
        </h2>
        
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/60go-4haeXw"
            title="Tabla Periódica Explicada"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-medium text-gray-800 text-center">
            La Tabla Periódica Explicada Fácilmente
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">📚 Resumen de la Tabla Periódica</h2>
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-3">
            <p>✅ Un <span className="font-bold">elemento</span> es una sustancia pura que no se puede descomponer</p>
            <p>✅ La <span className="font-bold">Tabla Periódica</span> organiza los 118 elementos conocidos</p>
            <p>✅ Fue creada por <span className="font-bold">Mendeleiev en 1869</span></p>
            <p>✅ Los <span className="font-bold">períodos</span> (filas) indican niveles de energía</p>
            <p>✅ Los <span className="font-bold">grupos</span> (columnas) agrupan elementos con propiedades similares</p>
            <p>✅ Se clasifica en <span className="font-bold">metales, no metales y metaloides</span></p>
            <p className="pt-3 border-t border-white/40 mt-4">
              💡 <span className="font-bold">Importante:</span> Los elementos están en TODO lo que te rodea: 
              tu cuerpo, tu casa, tu comida, tu celular. ¡La química es parte de tu vida diaria!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
