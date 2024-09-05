import { Menu, ConfigProvider, MenuProps } from "antd";
import React from "react";

// Definición de tipos para las props del componente
interface CustomMenuProps {
  items: MenuProps["items"];
  onClick: MenuProps["onClick"];
  className?: string;
  defaultSelectedKeys?: string;
  theme?: "light" | "dark";
  mode:
    | "vertical"
    | "vertical-left"
    | "vertical-right"
    | "horizontal"
    | "inline";
  style?: React.CSSProperties;
}

const CustomMenu: React.FC<CustomMenuProps> = ({
  items,
  onClick,
  className,
  defaultSelectedKeys,
  theme = "dark",
  // mode,
  style,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ffffff",
        },
      }}
    >
      <Menu
        onClick={onClick}
        theme={theme}
        // mode={mode}
        defaultSelectedKeys={defaultSelectedKeys ? [defaultSelectedKeys] : []}
        items={items}
        className={className}
        style={style}
        // overflowedIndicator={
        //   <MenuOutlined
        //     style={{ fontSize: "26px", color: "#08A262", padding: "5px 2px" }}
        //   />
        // }
      />
    </ConfigProvider>
  );
};

export default CustomMenu;
