import React, { useState } from 'react';
import '../css/inventario.css'; // Estilos CSS

const Inventario = ({}) => {
  const [editingRow, setEditingRow] = useState(null);

  const handleEdit = (row) => {
    setEditingRow(row);
  };

  const handleDelete = (id) => {
    // Implementa la lógica para borrar un elemento
    console.log(`Borrar elemento con ID ${id}`);
  };

  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Código</th>
          <th>Departamento</th>
          <th>Estado</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.marca}</td>
            <td>{item.codigo}</td>
            <td>{item.departamento}</td>
            <td>{item.estado}</td>
            <td>
              <button onClick={() => handleEdit(item)}>Editar</button>
            </td>
            <td>
              <button onClick={() => handleDelete(item.id)}>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Inventario;