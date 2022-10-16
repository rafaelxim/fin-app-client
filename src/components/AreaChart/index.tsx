import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  // Tooltip,
  ResponsiveContainer,
  // TooltipProps,
} from 'recharts';
// import {
//   ValueType,
//   NameType,
// } from 'recharts/src/component/DefaultTooltipContent';
// import * as S from './styles';

type ChartAreaProps = {
  data: any;
  dataKeyX: string;
  dataKeyY: string;
};

export const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChartCustom = ({ data, dataKeyX, dataKeyY }: ChartAreaProps) => {
  // const CustomTooltip = ({
  //   active,
  //   payload,
  //   label,
  // }: TooltipProps<ValueType, NameType>) => {
  //   // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  //   if (active && payload && payload.length) {
  //     return (
  //       <S.CustomTooltip>
  //         <p className="desc">Anything you want can be displayed here.</p>
  //       </S.CustomTooltip>
  //     );
  //   }

  //   return null;
  // };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: -10,
          bottom: 0,
        }}
      >
        <XAxis stroke="#f2f2f2" dataKey={dataKeyX} />
        <YAxis stroke="#f2f2f2" />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        <Area
          type="monotone"
          dataKey={dataKeyY}
          stroke="#f2f2f2"
          fill="#f2f2f2"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartCustom;
