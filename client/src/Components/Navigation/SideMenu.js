import React from "react";

//importing 3rd party....
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import zones from "../../Resources/Zone.js";
import { slugs, ISO } from "../../Resources/ISOCode.js";
const { SubMenu } = Menu;

const SideMenu = (e) => {
  const stateSelectHandler = (slug) => {
    //get the slugs index...
    const slugIndex = slugs.indexOf(slug);
    console.log(ISO[slugIndex]);
  };

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="East Zone">
        {zones.EastZone.map((curr) => {
          return (
            <Menu.Item
              key={curr.code}
              onClick={() => stateSelectHandler(curr.slug)}
            >
              {curr.name}
            </Menu.Item>
          );
        })}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="North East Zone">
        <Menu.Item key="ne1">Sikkim</Menu.Item>
        <Menu.Item key="ne2">Arunacahal Pradesh</Menu.Item>
        <Menu.Item key="ne3">Assam</Menu.Item>
        <Menu.Item key="ne4">Mizoram</Menu.Item>
        <Menu.Item key="ne5">Meghalaya</Menu.Item>
        <Menu.Item key="ne6">Nagaland</Menu.Item>
        <Menu.Item key="ne7">Manipur</Menu.Item>
        <Menu.Item key="ne8">Tripura</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<AppstoreOutlined />} title="South Zone">
        <Menu.Item key="se1">Andhra Pradesh</Menu.Item>
        <Menu.Item key="se2">Telangana</Menu.Item>
        <Menu.Item key="se3">Tamil Nadu</Menu.Item>
        <Menu.Item key="se4">Kerala</Menu.Item>
        <Menu.Item key="se5">Karnataka</Menu.Item>
        <Menu.Item key="se6">Puducherry</Menu.Item>
        <Menu.Item key="se7">Lakshadweep</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<AppstoreOutlined />} title="Central India">
        <Menu.Item key="ce1">Madhya Pradesh</Menu.Item>
        <Menu.Item key="ce2">Chhattisgarh</Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" icon={<AppstoreOutlined />} title="West Zone">
        <Menu.Item key="we1">Rajasthan</Menu.Item>
        <Menu.Item key="we2">Gujarat</Menu.Item>
        <Menu.Item key="we3">Maharashtra</Menu.Item>
        <Menu.Item key="we4">Goa</Menu.Item>
        <Menu.Item key="we5">Dadra, Daman-Diu</Menu.Item>
        <Menu.Item key="we6">Puducherry</Menu.Item>
        <Menu.Item key="we7">Lakshadweep</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideMenu;
