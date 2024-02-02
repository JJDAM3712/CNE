import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () =>{
	return <div>
      <section>
        <ul>
          <li className="">
            <Link to="/">Pagina Principal</Link>
          </li>
          <li>
            <Link to="personal">Personal</Link>
          </li>
          <li>
            <Link to="/asistencias">Asistencias</Link>
          </li>
          <li>
            <Link to="/visitas">Visitas</Link>
          </li>
          <li>
            <Link to="/departamentos">Departamento</Link>
          </li>
          <li>
            <Link to="/cargos">Cargo</Link>
          </li>
          <li>
            <Link to="/usuario">Usuarios</Link>
          </li>
          <li>
            <Link to="/salir">Salir</Link>
          </li>
        </ul>
      </section>
			<hr />
			<Outlet />
    </div>;
}

export default Sidebar;