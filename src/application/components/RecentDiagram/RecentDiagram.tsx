import React from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";
import { DiagramItem } from "../types/types";
import recentExchangesStore from "../../stores/recentExchagesStore";
import { observer } from "mobx-react-lite";

const RecentDiagram = () => {
  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#f7f750",
    "#ff8042",
    "#8dd1e1",
  ];

  const transformDiagramData = (
    items: DiagramItem[] | undefined
  ): { name: string; value: number }[] => {
    if (!items) return [];
    return items.map((item) => ({
      name: item.name,
      value: Number(item.value),
    }));
  };

  const data = transformDiagramData(recentExchangesStore.diagramData?.diagram);

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, name } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={13}
        fill="#fff"
        fontWeight="normal"
      >
        {name}
      </text>
    );
  };

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={50}
        outerRadius={90}
        dataKey="value"
        label={({ name, percent }) => (percent > 0.05 ? name : "")} // показываем название сегмента
        labelLine={false} // убираем линии от сегмента к тексту
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default observer(RecentDiagram);
