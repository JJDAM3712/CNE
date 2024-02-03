import { Sidebar } from 'flowbite-react';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import logoSide from './temas-pers';

function Side() {
	return (
		<Sidebar aria-label="Default sidebar example">
			<Sidebar.Logo href="#" img="favicon.ico" imgAlt="CNE Logo" theme={logoSide}>
        CNE App
      </Sidebar.Logo>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item icon={HiChartPie}> <Link to="/">Pagina Principal</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiInbox}>
						<Link to="/personal">Personal</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiUser}>
						<Link to="/asistencias">Asistencias</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiShoppingBag}>
						<Link to="/visitas">Visitas</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiArrowSmRight}>
						<Link to="/departamentos">Departamento</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiTable}>
						<Link to="/cargos">Cargo</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiViewBoards}>
						<Link to="/usuario" >Usuarios</Link>
					</Sidebar.Item>
					<Sidebar.Item>
						<Link to="/salir">Salir</Link>
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
			<hr />
			<Outlet />
		</Sidebar>

	);
}
export default Side;
