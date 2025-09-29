
import React from 'react';
import type { PainPoint } from '../types';

const painPointsData: PainPoint[] = [
  {
    id: 1,
    painPoint: 'Pérdida de dinero',
    solution: 'Permite un seguimiento exacto para evitar sobrecompras y controlar el stock mínimo.',
  },
  {
    id: 2,
    painPoint: 'Incertidumbre y Desconfianza',
    solution: 'La función "Ver Inventario" proporciona datos de stock en tiempo real, eliminando la necesidad de adivinar.',
  },
  {
    id: 3,
    painPoint: 'Estrés y Frustración',
    solution: 'Simplifica y acelera el proceso de registro, liberando tiempo valioso para el dueño del negocio.',
  },
];

const PainPointTable: React.FC = () => {
  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-800 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-4 w-1/3 font-semibold">
              Punto de Dolor Identificado
            </th>
            <th scope="col" className="px-6 py-4 w-2/3 font-semibold">
              Cómo lo Aborda Nuestro MVP "Smart Control Stock"
            </th>
          </tr>
        </thead>
        <tbody>
          {painPointsData.map((item, index) => (
            <tr key={item.id} className={`bg-white ${index !== painPointsData.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50 transition-colors duration-200`}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item.painPoint}
              </th>
              <td className="px-6 py-4 text-gray-600">
                {item.solution}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PainPointTable;
