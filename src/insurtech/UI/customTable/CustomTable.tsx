import React from "react";
import { Table, Tag, Pagination } from "antd";
import CarIcon from "../../../assets/svgCustoms/CarIcon";

// Definición de la interfaz para las columnas de la tabla
interface DataType {
  key: string;
  name: string;
  icon: React.ReactNode;
  country: string;
  date: string;
  id: string;
  price: string;
  status: string;
}

const CustomTable: React.FC = () => {
  const columns = [
    {
      title: "Nombre Producto",
      align: "center" as const,
      dataIndex: "name",
      key: "name",
      render: (text: string, record: DataType) => (
        <div className="flex items-center gap-x-3">
          {record.icon}
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "País",
      align: "center" as const,
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Fecha",
      align: "center" as const,
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ID",
      align: "center" as const,
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Precio",
      align: "center" as const,
      dataIndex: "price",
      key: "price",
      render: (text: string) => <span>${text}</span>,
    },
    {
      title: "Opciones",
      align: "center" as const,
      key: "options",
      render: () => (
        <div className="flex justify-between w-full">
          <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
          <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
          <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
        </div>
      ),
    },
    {
      title: "Estado",
      dataIndex: "status",
      align: "center" as const,
      key: "status",
      render: (status: string) => (
        <Tag color="#00B69B" className="text-white px-5">
          {status}
        </Tag>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Póliza Vehicular",
      icon: <CarIcon />,
      country: "Ecuador, Guayaquil",
      date: "12.09.2019",
      id: "423",
      price: "34,295",
      status: "Pagado",
    },
    {
      key: "2",
      name: "Póliza Tecnología",
      icon: <CarIcon />,
      country: "Ecuador, Guayaquil",
      date: "12.09.2019",
      id: "423",
      price: "34,295",
      status: "Pagado",
    },
    {
      key: "3",
      name: "Póliza Medica",
      icon: <CarIcon />,
      country: "Ecuador, Guayaquil",
      date: "12.09.2019",
      id: "423",
      price: "34,295",
      status: "Pagado",
    },
    {
      key: "4",
      name: "Póliza Familia",
      icon: <CarIcon />,
      country: "Ecuador, Guayaquil",
      date: "12.09.2019",
      id: "423",
      price: "34,295",
      status: "Pagado",
    },
  ];

  return (
    <div className="p-7">
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName={(record, index) => (index % 2 === 0 ? "bg-green-50" : "")}
      />
      <div className="mt-4 flex justify-center">
        <Pagination
          defaultCurrent={1}
          total={50}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === "prev") {
              return <a>«</a>;
            }
            if (type === "next") {
              return <a>»</a>;
            }
            return originalElement;
          }}
        />
      </div>
    </div>
  );
};

export default CustomTable;
