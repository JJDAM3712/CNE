import { Sidebar } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import {logoSide, SideBg} from './temas-pers';

function Side() {
	return (
		
		<Sidebar aria-label="BARRA LATERAL CNE" className='bg-blue-500'>
			<Sidebar.Logo href="#" img="img/logo.png" imgAlt="CNE Logo" theme={logoSide}>
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
						<Link to="/Inventario">Inventario</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiArrowSmRight}>
						<Link to="/departamentos">Departamentos</Link>
					</Sidebar.Item>
					<Sidebar.Item icon={HiTable}>
						<Link to="/cargos">Cargos</Link>
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
