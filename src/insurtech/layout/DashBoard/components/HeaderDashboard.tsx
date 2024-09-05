import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Layout, Row } from "antd";

interface HeaderDashboardProps {
  setCollapsed: (collapsed: boolean) => void;
  collapsed: boolean;
  deviceType: "mobile" | "desktop" | "tablet" | undefined;
}

const HeaderDashboard: React.FC<HeaderDashboardProps> = ({
  setCollapsed,
  collapsed,
  deviceType,
}) => {
  const { Header } = Layout;
  // const onSearch = (
  //   value: string,
  //   event?:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.MouseEvent<HTMLElement>
  //     | React.KeyboardEvent<HTMLInputElement>,
  //   info?: { source: string }
  // ) => {
  //   console.log(info?.source, value);
  // };

  const { Search } = Input;
  return (
    <Header
      className="header-custom flex justify-between items-center"
      style={{
        padding: 0,
      }}
    >
      <Row align="middle" className="flex items-center">
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "#fff" }} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Search
          className={`${
            !collapsed && deviceType === "mobile" ? "hidden" : "block"
          }`}
          placeholder="search"
          // onSearch={onSearch}
          style={{
            width: deviceType === "mobile" ? 100 : 400,
          }}
        />
      </Row>
      <div className="pr-9">
        <div className="flex items-center rounded-lg gap-x-3 cursor-pointer">
          <Avatar
            size={50}
            src="/img-png/home/avatar.jpeg"
            alt="Michael Wells"
          />
          <div className="hidden lg:block">
            <p className="text-white text-lg">Michael Wells</p>
            <p className="text-gray-200 text-sm">Broker Comercial</p>
          </div>
          <DownOutlined className="text-white text-lg border-2 border-white rounded-full p-1" />
        </div>
      </div>
    </Header>
  );
};

export default HeaderDashboard;
