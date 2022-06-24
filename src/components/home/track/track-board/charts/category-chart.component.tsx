import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface Props {
  chartData: any;
}

const CategoryChart = ({ chartData }: Props) => {
  const [data, setData] = useState(chartData);
  const [countedData, setCountedData] = useState<any[]>([]);
  console.log(
    '🚀 ~ file: category-chart.component.tsx ~ line 22 ~ CategoryChart ~ countedData',
    countedData
  );

  const category = data.map((item: any) => {
    return item.category;
  });

  const countCat = category.reduce((acc: any, curr: any) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  const countedCat = Object.keys(countCat).map((key: any) => {
    return { category: key, value: countCat[key] };
  });

  useEffect(() => {
    setData(chartData);
    setCountedData(countedCat);
  }, [chartData]);

  return (
    <div className='flex h-80 justify-center items-center'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={countedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey='category' />
          <Radar
            dataKey='value'
            stroke='#957FF9'
            fill='#957FF9'
            fillOpacity={0.75}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
