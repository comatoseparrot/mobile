import React from 'react';
import FormCSS from './Form.module.css';

function Tabla({ data }) {
  return (
    <>
      <table className={FormCSS.demTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.lastname1}</td>
              <td>{item.lastname2}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tabla;
