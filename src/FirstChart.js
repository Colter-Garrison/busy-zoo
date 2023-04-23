import React from 'react';
import { VictoryChart, VictoryPolarAxis, VictoryLine } from 'victory';

export default function FirstChart() {
  return (
    <VictoryChart polar
      domain={{ y: [0, 10] }}
    >
      <VictoryPolarAxis dependentAxis
        style={{ axis: { stroke: 'none' } }}
        tickFormat={() => ''}
      />
      <VictoryPolarAxis
        tickValues={[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2]}
        tickFormat={['2π', 'π/2', 'π', '3π/2']}
        labelPlacement="vertical"
      />
      { [5, 4, 3, 2, 1].map((val, i) => {
        return (
          <VictoryLine
            key={i}
            samples={100}
            y={(d) => val * (1 - Math.cos(d.x))}
          />
        );
      })}
    </VictoryChart>
  );
}