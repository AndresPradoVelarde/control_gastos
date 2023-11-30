import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscipciones from "../img/icono_suscripciones.svg";
const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripcion: IconoSuscipciones,
};
function Gasto({ setGastoEditar, gasto, eliminarGasto }) {
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(gasto.id)}
        destructive = {true}
        >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        trailingActions={trailingActions()}
        leadingActions={leadingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[gasto.categoria]} alt="icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{gasto.categoria}</p>
              <p className="nombre-gasto">{gasto.nombre}</p>
              <p className="fecha-gasto">
                agregado el: <span>{formatearFecha(gasto.fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${gasto.cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Gasto;