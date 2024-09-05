import { Avatar, Col, Row } from "antd";

import "./style.css";
import CardsDetail from "./components/CardsDetail";
import UsersDashboardIcon from "@/assets/svgCustoms/UsersDashboardIcon";
import TrendingUpIcon from "@/assets/svgCustoms/TrendingUpIcon";
import BoxYellowIcon from "@/assets/svgCustoms/BoxYellowIcon";
import TrendIcon from "@/assets/svgCustoms/TrendIcon";
import TrendingDownIcon from "@/assets/svgCustoms/TrendingDownIcon";
import ReverseRedIcon from "@/assets/svgCustoms/ReverseRedIcon";
import PhoneIcon from "@/assets/svgCustoms/PhoneIcon";
import CustomTable from "@/insurtech/UI/customTable/CustomTable";
import { CardTitle } from "@/components/ui/card";
import { CustomChartLinear } from "@/insurtech/UI/customCharts/CustomChartLinear";

const DashboarPage = () => {
  const items = [
    {
      id: 1,
      titleCard: "Total Usuarios",
      numberCard: "40,689",
      percentage: "8,5%",
      time: " + desde ayer",
      icon: <UsersDashboardIcon />,
      trendIcon: <TrendingUpIcon />,
      isTrendUp: true,
    },
    {
      id: 2,
      titleCard: "Seguros Comprados",
      numberCard: "10293",
      percentage: "1,3%",
      time: "+ desde hace un mes",
      icon: <BoxYellowIcon />,
      trendIcon: <TrendingUpIcon />,
      isTrendUp: true,
    },
    {
      id: 3,
      titleCard: "Total Ventas",
      numberCard: "$89,000",
      percentage: "4,3%",
      time: "  -  hace 1 semana",
      icon: <TrendIcon />,
      trendIcon: <TrendingDownIcon />,
      isTrendUp: false,
    },
    {
      id: 4,
      titleCard: "Total Cancelaciones",
      numberCard: "2040",
      percentage: "1,8%",
      time: " Comenzó desde ayer",
      icon: <ReverseRedIcon />,
      trendIcon: <TrendingUpIcon />,
      isTrendUp: true,
    },
  ];

  const usersReports = [
    {
      id: 1,
      name: "Juliana Montoya",
      description: "Compró un seguro...",
      avatar: "/img-png/dasboard/avatar1.png",
    },
    {
      id: 2,
      name: "Victor Mandarín",
      description: "Compró un seguro...",
      avatar: "/img-png/dasboard/avatar2.png",
    },
    {
      id: 3,
      name: "Victor Mandarín",
      description: "Compró un seguro...",
      avatar: "/img-png/dasboard/avatar3.png",
    },
    {
      id: 4,
      name: "Victor Mandarín",
      description: "Compró un seguro...",
      avatar: "/img-png/dasboard/avatar4.png",
    },
    {
      id: 5,
      name: "Victor Mandarín",
      description: "Compró un seguro...",
      avatar: "/img-png/dasboard/avatar5.png",
    },
    {
      id: 6,
      name: "Victor Mandarín",
      description: "Compró un seguro...",
      avatar: "/img-png/dasboard/avatar6.png",
    },
    {
      id: 7,
      name: "Victor Mandarín",
      description: "Compró un seguro...",
      avatar: "/img-png/dasboard/avatar7.png",
    },
  ];

  return (
    <div className="max-w-[1800px]">
      <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
      <Row gutter={[20, 20]}>
        <Col span={18}>
          <div className="flex flex-col lg:flex-row gap-5">
            {items.map((item) => (
              <CardsDetail
                key={item.id}
                titleCard={item.titleCard}
                numberCard={item.numberCard}
                percentage={item.percentage}
                time={item.time}
                icon={item.icon}
                isTrendUp={item.isTrendUp}
                trendIcon={item.trendIcon}
              />
            ))}
          </div>
          <div className="w-full bg-white rounded-2xl mt-5 hidden lg:block">
            <CustomChartLinear />
          </div>
          <div className="w-full bg-white rounded-2xl mt-5 hidden lg:block ">
            <CardTitle className="p-7">Polizas Compradas</CardTitle>
            <CustomTable />
          </div>
        </Col>
        <Col span={6}>
          <div className="w-full min-h-[800px] hidden lg:block p-10 bg-white rounded-2xl">
            <h3 className="text-2xl mb-2 font-bold text-center">
              Reportes Siniestros
            </h3>
            <div className="max-h-[1200px] overflow-y-auto custom-scrollbar">
              {usersReports.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center p-5 rounded-lg border-b-2 border-gray-200 "
                >
                  <Avatar size={50} src={user.avatar} alt="Juliana Montoya" />
                  <div className="ml-4 flex-1">
                    <p className="text-green-700 text-lg font-semibold">
                      {user.name}
                    </p>
                    <p className="text-gray-500">{user.description}</p>
                  </div>
                  <div className="ml-4 bg-[#D4D4D4] p-2 rounded-xl">
                    <PhoneIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboarPage;
