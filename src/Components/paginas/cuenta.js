import React from 'react'
import './cuenta.css'
import imagen1 from './dino.png'
import imagen2 from './mundo.png'
import { useNavigate } from 'react-router-dom'

export const Cuenta = (props) => {
    const navigate = useNavigate();
  return (
    <div>
      <body>

        <section>
          <div className="izquierda">
              <div className="imagenizq">
                  <center><img src={imagen2} alt="Mundo" className="imagen2" ></img></center>
              </div>
          </div>
          <div className="contenedor">
              <div className="formulario">
                  <div className="imagen">
                      <center><img src={imagen1} alt="Dinosaurio" className="imagen1"></img></center>
                  </div>
                  <form action="#">
                      <h2 className="Texto">Sistema Punto de Ventas</h2>
                  </form>
                  <div>
                      <div className="inicio_sesion">
                          <button onClick={() => navigate("/iniciosesion") } className="IS">Iniciar Sesión</button>
                      </div>
                      <div className="no_cuenta">
                          <p>Si aún no tienes una cuenta, click aquí abajo</p>
                      </div>
                      <div className="registrarme">
                          <button onClick={() => navigate("/registrate") } className="R">Registrarme</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="derecha">
              <div className="imagender">
                  <center><img src={imagen2} alt="Mundo" className="imagen3"></img></center>
              </div>
          </div>
      </section>

</body>
    </div>
  )
}
export default Cuenta;
