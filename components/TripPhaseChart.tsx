
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Disneyland Paris', nights: 3 },
  { name: 'Paris (Cidade)', nights: 10 },
];

const colors = ['#87CEEB', '#228B22']; // Light Sky Blue, Garden Green

const TripPhaseChart: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#A9A9A9" />
          <XAxis type="number" stroke="#2F2F2F"  label={{ value: 'Número de Noites', position: 'insideBottom', offset: -5, fill: '#2F2F2F' }}/>
          <YAxis dataKey="name" type="category" stroke="#2F2F2F" width={120} />
          <Tooltip wrapperStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
          <Bar dataKey="nights" barSize={35}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TripPhaseChart;