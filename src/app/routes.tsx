import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import ModelosAtomicos from "./components/ModelosAtomicos";
import TablaPeriodica from "./components/TablaPeriodica";
import NumeroAtomicoMasico from "./components/NumeroAtomicoMasico";
import ConfiguracionElectronica from "./components/ConfiguracionElectronica";
import EnlacesQuimicos from "./components/EnlacesQuimicos";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "modelos-atomicos", Component: ModelosAtomicos },
      { path: "tabla-periodica", Component: TablaPeriodica },
      { path: "numero-atomico-masico", Component: NumeroAtomicoMasico },
      { path: "configuracion-electronica", Component: ConfiguracionElectronica },
      { path: "enlaces-quimicos", Component: EnlacesQuimicos },
    ],
  },
]);