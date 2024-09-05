import { Button, Divider, Layout, Row } from "antd";

import {
  AppstoreOutlined,
  HeartOutlined,
  MessageOutlined,
  ProfileOutlined,
  DatabaseOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import EcuasuizaLogo from "@/assets/svgCustoms/EcuasuizaLogo";
import LogoWithOutText from "@/assets/svgCustoms/LogoWithOutText";
import ClockIcon from "@/assets/svgCustoms/ClockIcon";
import CustomMenu from "@/insurtech/UI/customMenu/CustomMenu";

interface SiderDasboardProps {
  deviceType: "mobile" | "desktop" | "tablet" | undefined;
  collapsed: boolean;
}

const SiderDasboard: React.FC<SiderDasboardProps> = ({
  deviceType,
  collapsed,
}) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const onClick = (e: { key: string }) => {
    navigate(`/${e.key}`);
  };

  const sideItems = [
    {
      key: "seguros",
      icon: <AppstoreOutlined />,
      label: "Seguros",
    },
    {
      key: "2",
      icon: <HeartOutlined />,
      label: "Favoritos",
    },
    {
      key: "3",
      icon: <MessageOutlined />,
      label: "Inbox",
    },
    {
      key: "4",
      icon: <ProfileOutlined />,
      label: "Lista de Clientes",
    },
    {
      key: "5",
      icon: <DatabaseOutlined />,
      label: "Pólizas y seguros",
    },
  ];
  return (
    <Sider
      className={`sider-custom relative`}
      width={deviceType === "mobile" ? 200 : 250}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical mt-2 lg:py-5 flex justify-center">
        {!collapsed ? <EcuasuizaLogo /> : <LogoWithOutText />}
      </div>
      <div className="flex mt-5 flex-col  gap-y-5">
        <Link
          to="/"
          className={`flex w-[96%] hover:text-black rounded-md ml-[0.4rem] pl-6 items-center gap-x-4 py-4 bg-[#ffffff99] ${
            collapsed && "hidden"
          }`}
        >
          <ClockIcon width={20} height={20} />
          <h2 className="font-bold text-[16px] lg:text-[22px]">Dashboard</h2>
        </Link>
        <CustomMenu
          onClick={onClick}
          className={`${collapsed ? "px-0" : "px-3"} side-menu-custom`}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={"1"}
          items={sideItems}
        />
      </div>
      <div className="w-[95%] mx-auto">
        <Divider className="h-[3px] bg-white" />
      </div>
      <div
        className={`text-white mx-4 px-4 lg:p-4 bg-gradient-to-b from-[#247654] to-[#43DC9D] rounded-lg ${
          collapsed && "hidden"
        }`}
      >
        <div className="flex flex-col gap-y-2 lg:gap-y-5 py-5">
          <h3 className=" text-[16px] lg:text-xl">
            Comparte tu link de referido
          </h3>
          <p className="text-[14px] lg:text-[16px]">
            Con esto tienes acceso a tus cartera de clientes
          </p>
        </div>
        <div className="lg:mt-4 flex items-center relative justify-between  ">
          <div className="relative -left-7 hidden lg:block">
            <LogoWithOutText color="#ffffff80" width={150} height={100} />
          </div>
          <div className="relative lg:hidden">
            <LogoWithOutText color="#ffffff80" width={40} />
          </div>
          <img
            className="lg:absolute lg:-right-8 lg:block h-24 lg:h-[135px]"
            src="/img-png/girl-dasboard.png"
            alt="girl-support"
          />
        </div>
      </div>
      <Row justify={"center"} className=" w-full absolute px-4 bottom-2 ">
        <Button className="button py-7" block>
          {collapsed ? <LogoutOutlined /> : "Logout - Desconectarse"}
        </Button>
      </Row>
    </Sider>
  );
};

export default SiderDasboard;
