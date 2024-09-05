import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  TooltipProps,
} from "recharts";

import { Dropdown, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Definición del tipo para los datos del gráfico
interface ChartData {
  month: string;
  desktop: number;
}

const chartData: ChartData[] = [
  { month: "5k", desktop: 20 },
  { month: "10k", desktop: 40 },
  { month: "15k", desktop: 30 },
  { month: "20k", desktop: 60 },
  { month: "25k", desktop: 50 },
  { month: "30k", desktop: 70 },
  { month: "35k", desktop: 40 },
  { month: "40k", desktop: 50 },
  { month: "45k", desktop: 60 },
  { month: "50k", desktop: 40 },
  { month: "55k", desktop: 50 },
  { month: "60k", desktop: 60 },
];

const items = [
  {
    label: "Septiembre",
    key: "0",
  },
  {
    label: "Octubre",
    key: "1",
  },
  {
    label: "Noviembre",
    key: "2",
  },
];

// Definición del tipo para las props del tooltip personalizado
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: {
    value: number;
  }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#2a9d8f",
          borderColor: "#2a9d8f",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p className="label">{`${label} : ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

export function CustomChartLinear() {
  return (
    <Card>
      <CardHeader>
        <Row justify="space-between">
          <CardTitle>Detalle de ventas</CardTitle>
          <Dropdown
            className="border-2 bg-slate-200 px-3 py-2 rounded-md"
            menu={{ items }}
            trigger={["click"]}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Septiembre <DownOutlined />
            </a>
          </Dropdown>
        </Row>
      </CardHeader>
      <CardContent>
        <AreaChart data={chartData} height={450} width={1150}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey="desktop"
            type="linear"
            fill="#C0FFD9"
            fillOpacity={0.1}
            stroke="#2a9d8f"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
}
