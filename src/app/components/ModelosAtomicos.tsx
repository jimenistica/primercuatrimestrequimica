import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb, User, Calendar, Sparkles, BookOpen, Atom as AtomIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ModeloAtomicoData {
  id: string;
  nombre: string;
  cientifico: string;
  año: string;
  icono: string;
  color: string;
  descripcionSimple: string;
  comoLoImaginaban: string;
  aportePrincipal: string;
  postuladosTeoria: string[];
  ejemploVida: string;
  limitacion: string;
  contextoHistorico: string;
}

const modelosAtomicos: ModeloAtomicoData[] = [
  {
    id: "dalton",
    nombre: "Modelo de Dalton",
    cientifico: "John Dalton",
    año: "1803",
    icono: "⚽",
    color: "blue",
    descripcionSimple: "Dalton imaginó los átomos como pequeñas bolitas sólidas e indivisibles, como pelotas de billar muy pequeñas.",
    comoLoImaginaban: "Piensa en los átomos como canicas o bolitas. Cada elemento tiene sus propias bolitas con diferente tamaño y peso. No se pueden romper ni dividir.",
    aportePrincipal: "Fue el primero en proponer una teoría atómica científica basada en evidencia experimental. Estableció que todo está hecho de átomos y que los átomos de un mismo elemento son iguales entre sí.",
    postuladosTeoria: [
      "Toda la materia está formada por partículas indivisibles llamadas átomos",
      "Los átomos de un mismo elemento son idénticos en masa y propiedades",
      "Los átomos de diferentes elementos tienen masas y propiedades diferentes",
      "Los átomos no se crean ni se destruyen en las reacciones químicas",
      "Los compuestos se forman cuando átomos de diferentes elementos se combinan en proporciones fijas"
    ],
    ejemploVida: "Es como si tuvieras diferentes tipos de LEGO: los rojos son todos iguales entre sí, los azules son todos iguales entre sí, pero los rojos son diferentes a los azules.",
    limitacion: "No explicaba por qué los átomos se comportan de manera eléctrica. ¡No sabía que había electrones adentro! Además, hoy sabemos que los átomos SÍ se pueden dividir.",
    contextoHistorico: "Dalton era maestro y químico inglés. Su teoría explicó por primera vez las leyes de las combinaciones químicas que se conocían en su época."
  },
  {
    id: "thomson",
    nombre: "Modelo de Thomson",
    cientifico: "J.J. Thomson",
    año: "1897",
    icono: "🍰",
    color: "purple",
    descripcionSimple: "Thomson descubrió el electrón y propuso que el átomo era como un budín de pasas: una esfera positiva con electrones negativos incrustados.",
    comoLoImaginaban: "Imagina un panqué de arándanos. La masa del panqué es positiva (+) y los arándanos son los electrones negativos (-) distribuidos por todas partes.",
    aportePrincipal: "¡Descubrió el electrón! Demostró que el átomo SÍ se puede dividir y que tiene partículas más pequeñas dentro. Introdujo el concepto de que los átomos contienen partículas con carga eléctrica.",
    postuladosTeoria: [
      "El átomo es divisible y contiene partículas subatómicas",
      "El átomo contiene electrones, que son partículas con carga negativa",
      "Los electrones están distribuidos uniformemente en una 'masa' de carga positiva",
      "La carga positiva y negativa se equilibran, haciendo al átomo neutro",
      "El átomo es una esfera homogénea de carga positiva con electrones incrustados"
    ],
    ejemploVida: "Como una sandía: la pulpa roja sería la carga positiva y las semillas negras serían los electrones esparcidos por todo el interior.",
    limitacion: "No explicaba cómo se distribuye realmente la masa del átomo. Resultó que casi toda la masa está concentrada en un lugar pequeño (el núcleo).",
    contextoHistorico: "Thomson descubrió el electrón experimentando con rayos catódicos en tubos de vacío. Por este descubrimiento ganó el Premio Nobel de Física en 1906."
  },
  {
    id: "rutherford",
    nombre: "Modelo de Rutherford",
    cientifico: "Ernest Rutherford",
    año: "1911",
    icono: "🌍",
    color: "green",
    descripcionSimple: "Rutherford descubrió que los átomos tienen un núcleo pequeño y pesado en el centro, con electrones girando alrededor en un espacio prácticamente vacío.",
    comoLoImaginaban: "Como el sistema solar: el Sol es el núcleo (pequeño y pesado) y los planetas son los electrones dando vueltas alrededor en órbitas.",
    aportePrincipal: "Descubrió el NÚCLEO atómico mediante su famoso experimento de la lámina de oro. Demostró que toda la carga positiva y casi toda la masa están concentradas en un espacio muy pequeño en el centro.",
    postuladosTeoria: [
      "El átomo tiene un núcleo central muy pequeño donde se concentra la carga positiva",
      "El núcleo contiene casi toda la masa del átomo",
      "Los electrones giran alrededor del núcleo en órbitas circulares",
      "El átomo es mayormente espacio vacío",
      "La atracción eléctrica entre el núcleo positivo y los electrones negativos mantiene al átomo unido"
    ],
    ejemploVida: "Si el átomo fuera un estadio de fútbol, el núcleo sería como una canica en el centro y los electrones estarían en las gradas dando vueltas.",
    limitacion: "Según la física clásica, los electrones girando deberían perder energía continuamente y caer al núcleo en espiral. ¡Pero esto no pasa! El átomo es estable.",
    contextoHistorico: "Rutherford bombardeó una lámina delgada de oro con partículas alfa. La mayoría pasaron de largo, pero algunas rebotaron, lo que demostró la existencia del núcleo."
  },
  {
    id: "bohr",
    nombre: "Modelo de Bohr",
    cientifico: "Niels Bohr",
    año: "1913",
    icono: "🎯",
    color: "orange",
    descripcionSimple: "Bohr propuso que los electrones giran en órbitas específicas y definidas alrededor del núcleo, como pistas de atletismo, cada una con un nivel de energía fijo.",
    comoLoImaginaban: "Como una pista de atletismo con varios carriles numerados. Los electrones solo pueden estar en ciertos carriles (niveles de energía) y no entre ellos.",
    aportePrincipal: "Introdujo el concepto de NIVELES DE ENERGÍA cuantizados. Los electrones solo pueden estar en ciertas órbitas permitidas y cuando saltan entre ellas absorben o emiten luz de energías específicas.",
    postuladosTeoria: [
      "Los electrones giran alrededor del núcleo en órbitas circulares permitidas sin radiar energía",
      "Cada órbita tiene un nivel de energía fijo y definido (cuantizado)",
      "Los electrones pueden saltar de una órbita a otra absorbiendo o emitiendo energía",
      "La energía absorbida o emitida se manifiesta como luz de una frecuencia específica",
      "Las órbitas están numeradas: n=1, n=2, n=3, etc. (números cuánticos principales)"
    ],
    ejemploVida: "Como los pisos de un edificio: puedes estar en el piso 1, 2 o 3, pero no entre el piso 1 y 2. Para subir necesitas energía (subir escaleras), y al bajar liberas energía.",
    limitacion: "Solo funcionaba bien para el hidrógeno (el átomo más simple con 1 electrón). Para átomos más complejos con muchos electrones no era tan preciso.",
    contextoHistorico: "Bohr desarrolló su modelo para explicar el espectro de emisión del hidrógeno. Ganó el Premio Nobel de Física en 1922 por sus contribuciones a la estructura atómica."
  },
  {
    id: "mecanocuantico",
    nombre: "Modelo Mecánico-Cuántico",
    cientifico: "Schrödinger, Heisenberg y otros",
    año: "1926",
    icono: "☁️",
    color: "pink",
    descripcionSimple: "El modelo actual dice que no podemos saber exactamente dónde está un electrón, solo la probabilidad de encontrarlo en una región del espacio.",
    comoLoImaginaban: "Los electrones no siguen órbitas definidas, sino que forman NUBES DE PROBABILIDAD alrededor del núcleo. Estas regiones se llaman orbitales.",
    aportePrincipal: "Es el modelo más preciso y completo que tenemos. Explica el comportamiento de todos los átomos y permite predecir sus propiedades químicas y físicas. Introdujo el concepto de orbital atómico.",
    postuladosTeoria: [
      "No se puede conocer simultáneamente la posición y velocidad exacta de un electrón (Principio de Incertidumbre)",
      "Los electrones se comportan como ondas y como partículas (dualidad onda-partícula)",
      "Los electrones ocupan regiones del espacio llamadas orbitales, no órbitas definidas",
      "Cada orbital puede contener máximo 2 electrones con espines opuestos",
      "Los orbitales tienen diferentes formas: s (esférica), p (de 8), d y f (más complejas)"
    ],
    ejemploVida: "Como un ventilador encendido: las aspas están en movimiento y forman una 'nube' circular borrosa. No puedes decir dónde está exactamente una aspa en un momento, pero sabes la región donde puede estar.",
    limitacion: "Es un modelo muy matemático y abstracto, difícil de visualizar. Sin embargo, hasta el momento es el más exacto.",
    contextoHistorico: "Desarrollado por varios científicos como Schrödinger, Heisenberg, Dirac y Pauli. Revolucionó la física y la química, permitiendo entender fenómenos que antes eran inexplicables."
  }
];

function ModelCard({ modelo, isOpen, onToggle }: { modelo: ModeloAtomicoData; isOpen: boolean; onToggle: () => void }) {
  const colorClasses = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    pink: "from-pink-400 to-pink-600"
  };

  const bgColorClasses = {
    blue: "bg-blue-50 border-blue-300",
    purple: "bg-purple-50 border-purple-300",
    green: "bg-green-50 border-green-300",
    orange: "bg-orange-50 border-orange-300",
    pink: "bg-pink-50 border-pink-300"
  };

  return (
    <div className={`${bgColorClasses[modelo.color as keyof typeof bgColorClasses]} border-4 rounded-2xl shadow-lg overflow-hidden transition-all`}>
      <button
        onClick={onToggle}
        className={`w-full p-6 flex items-center justify-between bg-gradient-to-r ${colorClasses[modelo.color as keyof typeof colorClasses]} text-white hover:opacity-90 transition-opacity`}
      >
        <div className="flex items-center space-x-4">
          <span className="text-5xl">{modelo.icono}</span>
          <div className="text-left">
            <h3 className="text-2xl font-bold">{modelo.nombre}</h3>
            <div className="flex items-center space-x-4 mt-1 text-sm opacity-90">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {modelo.cientifico}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {modelo.año}
              </span>
            </div>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-8 h-8" /> : <ChevronDown className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="p-6 space-y-6 bg-white">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-lg text-gray-800">{modelo.descripcionSimple}</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
              Contexto Histórico
            </h4>
            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{modelo.contextoHistorico}</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
              ¿Cómo lo imaginaban?
            </h4>
            <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">{modelo.comoLoImaginaban}</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              Postulados de la Teoría
            </h4>
            <div className="bg-green-50 p-5 rounded-lg">
              <p className="font-medium text-green-800 mb-3">Aporte Principal: {modelo.aportePrincipal}</p>
              <div className="bg-white p-4 rounded-lg mt-3">
                <p className="font-bold text-gray-800 mb-2">📚 Para copiar en tu carpeta:</p>
                <ul className="space-y-2 text-gray-700">
                  {modelo.postuladosTeoria.map((postulado, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-bold text-green-600 mr-2">{index + 1}.</span>
                      <span>{postulado}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">💡 Ejemplo de la vida real</h4>
            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{modelo.ejemploVida}</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">⚠️ Limitación del Modelo</h4>
            <p className="text-gray-700 bg-orange-50 p-4 rounded-lg italic">{modelo.limitacion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ModelosAtomicos() {
  const [openModelo, setOpenModelo] = useState<string | null>("dalton");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          ✨ La Evolución de los Modelos Atómicos ✨
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          ¡Descubre cómo los científicos fueron desentrañando el misterio del átomo a lo largo de la historia! 
          Cada modelo fue un paso importante hacia entender la materia. 🚀
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1633294539238-d0000b227c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhcnRpY2xlcyUyMGVsZWN0cm9uc3xlbnwxfHx8fDE3NzMwMTE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Partículas atómicas"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Introducción teórica */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-indigo-200 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center">
          <AtomIcon className="mr-3" />
          ¿Qué es un Modelo Atómico?
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg bg-indigo-50 p-4 rounded-lg">
            Un <span className="font-bold text-indigo-700">modelo atómico</span> es una representación 
            conceptual de la estructura del átomo. Como no podemos ver los átomos directamente (son 
            demasiado pequeños), los científicos crearon modelos para explicar su comportamiento basándose 
            en experimentos.
          </p>
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-5 rounded-lg">
            <h3 className="font-bold text-indigo-800 mb-3 text-lg">📝 Importante para tu carpeta:</h3>
            <p className="mb-3">
              Los modelos atómicos han evolucionado a lo largo del tiempo porque cada nuevo descubrimiento 
              permitió comprender mejor la estructura del átomo. Ningún modelo anterior fue "malo", 
              simplemente fue incompleto con el conocimiento de su época.
            </p>
            <p className="font-medium text-indigo-700">
              Cada modelo intentó responder: ¿Cómo está formado el átomo? ¿Cómo se distribuyen sus partículas?
            </p>
          </div>
        </div>
      </div>

      {/* Timeline indicator */}
      <div className="mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-lg">
        <div className="bg-white p-4 rounded-md">
          <p className="text-center text-lg font-medium text-gray-700">
            📚 Haz clic en cada modelo para explorar su historia, postulados y aportes 👇
          </p>
        </div>
      </div>

      {/* Models List */}
      <div className="space-y-6 mb-12">
        {modelosAtomicos.map((modelo) => (
          <ModelCard
            key={modelo.id}
            modelo={modelo}
            isOpen={openModelo === modelo.id}
            onToggle={() => setOpenModelo(openModelo === modelo.id ? null : modelo.id)}
          />
        ))}
      </div>

      {/* Video Section - Solo 1 video esencial */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-indigo-200 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          🎬 Video Explicativo Complementario
        </h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/za-nxN1QCrk"
            title="Modelos Atómicos - Historia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg mt-4">
          <p className="font-medium text-gray-800 text-center">Historia Completa de los Modelos Atómicos</p>
        </div>
      </div>

      {/* Cuadro comparativo para copiar */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
          📊 Cuadro Comparativo para tu Carpeta
        </h2>
        <div className="bg-green-50 p-6 rounded-xl">
          <p className="text-gray-700 mb-4 font-medium">
            Copia este cuadro en tu carpeta y complétalo con la información de cada modelo:
          </p>
          <div className="bg-white p-6 rounded-lg overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="border border-green-700 p-3">Modelo</th>
                  <th className="border border-green-700 p-3">Científico</th>
                  <th className="border border-green-700 p-3">Año</th>
                  <th className="border border-green-700 p-3">Característica Principal</th>
                  <th className="border border-green-700 p-3">Aporte</th>
                  <th className="border border-green-700 p-3">Limitación</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 p-3">Dalton</td>
                  <td className="border border-gray-300 p-3">John Dalton</td>
                  <td className="border border-gray-300 p-3">1803</td>
                  <td className="border border-gray-300 p-3">Esfera sólida e indivisible</td>
                  <td className="border border-gray-300 p-3">Primera teoría atómica científica</td>
                  <td className="border border-gray-300 p-3">No explica la electricidad</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Thomson</td>
                  <td className="border border-gray-300 p-3">J.J. Thomson</td>
                  <td className="border border-gray-300 p-3">1897</td>
                  <td className="border border-gray-300 p-3">Budín de pasas</td>
                  <td className="border border-gray-300 p-3">Descubrió el electrón</td>
                  <td className="border border-gray-300 p-3">No explica el núcleo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Rutherford</td>
                  <td className="border border-gray-300 p-3">Ernest Rutherford</td>
                  <td className="border border-gray-300 p-3">1911</td>
                  <td className="border border-gray-300 p-3">Núcleo central positivo</td>
                  <td className="border border-gray-300 p-3">Descubrió el núcleo</td>
                  <td className="border border-gray-300 p-3">No explica estabilidad atómica</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Bohr</td>
                  <td className="border border-gray-300 p-3">Niels Bohr</td>
                  <td className="border border-gray-300 p-3">1913</td>
                  <td className="border border-gray-300 p-3">Órbitas cuantizadas</td>
                  <td className="border border-gray-300 p-3">Niveles de energía</td>
                  <td className="border border-gray-300 p-3">Solo funciona para hidrógeno</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Mecano-Cuántico</td>
                  <td className="border border-gray-300 p-3">Varios científicos</td>
                  <td className="border border-gray-300 p-3">1926</td>
                  <td className="border border-gray-300 p-3">Orbitales (nubes de probabilidad)</td>
                  <td className="border border-gray-300 p-3">Modelo actual más completo</td>
                  <td className="border border-gray-300 p-3">Muy abstracto y matemático</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-lg">
          <div className="text-4xl mb-3">🔬</div>
          <h3 className="font-bold text-lg mb-2">Dato Curioso 1</h3>
          <p className="text-sm text-gray-700">Un átomo es tan pequeño que 1 millón de átomos puestos en fila medirían menos que el grosor de un cabello humano.</p>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-lg">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="font-bold text-lg mb-2">Dato Curioso 2</h3>
          <p className="text-sm text-gray-700">Los electrones se mueven a velocidades increíbles: ¡pueden dar millones de vueltas alrededor del núcleo en solo un segundo!</p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg">
          <div className="text-4xl mb-3">🌟</div>
          <h3 className="font-bold text-lg mb-2">Dato Curioso 3</h3>
          <p className="text-sm text-gray-700">Si el núcleo de un átomo fuera del tamaño de una pelota de tenis, los electrones estarían a más de 1 kilómetro de distancia.</p>
        </div>
      </div>
    </div>
  );
}
