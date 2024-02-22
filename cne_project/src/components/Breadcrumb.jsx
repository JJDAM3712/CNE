import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { routes } from '../routers/routes'; // Asegúrate de que la ruta de importación sea correcta

export function Migas({ activePath }) {
  // Filtra las rutas para obtener solo las que están activas
  const activeRoutes = routes.filter(route => activePath.includes(route.path));

  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {activeRoutes.map(({ path, name }, index) => (
        <Breadcrumb.Item key={index} href={path} icon={index === 0 ? HiHome : null}>
          {name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
