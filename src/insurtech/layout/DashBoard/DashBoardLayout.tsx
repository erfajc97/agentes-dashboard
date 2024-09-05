import { useState } from "react";
import { Layout } from "antd";
import "./styles.css";
import { Outlet } from "react-router-dom";
import useDeviceType from "@/insurtech/hooks/useDeviceType";
import HeaderDashboard from "./components/HeaderDashboard";
import SiderDasboard from "./components/SiderDasboard";

const DashBoardLayout = () => {
  type DeviceType = "mobile" | "desktop" | "tablet" | undefined;
  const deviceType: DeviceType = useDeviceType();
  const [collapsed, setCollapsed] = useState(
    deviceType === "mobile" ? true : false
  );
  const { Content } = Layout;
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout className="h-screen">
      <SiderDasboard deviceType={deviceType} collapsed={collapsed} />
      <Layout>
        <HeaderDashboard
          deviceType={deviceType}
          setCollapsed={setCollapsed}
          collapsed={collapsed}
        />
        <Content
          className="bg-gradient-to-b from-[#8de6c241] to-[#4e806c41]"
          style={{
            margin: 0,
            padding: 24,
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
