import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//importing 3rd party....
import { Menu } from "antd";
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import zones from "../../Resources/Zone.js";
import { slugs, ISO } from "../../Resources/ISOCode.js";
const { SubMenu } = Menu;

const SideMenu = (e) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateSelectHandler = (slug) => {
    //get the slugs index...
    const slugIndex = slugs.indexOf(slug);
    dispatch({
      type: "STATE",
      payload: ISO[slugIndex],
    });
    //now navigate..........
    navigate(`/state/${slug}`);
  };

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MenuOutlined />} title="East India">
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
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="North East India">
        {zones.NorthEastZone.map((curr) => {
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
      <SubMenu key="sub3" icon={<AppstoreOutlined />} title="South India">
        {zones.SouthZone.map((curr) => {
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
      <SubMenu key="sub4" icon={<AppstoreOutlined />} title="Central India">
        {" "}
        {zones.CentralZone.map((curr) => {
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
      <SubMenu key="sub5" icon={<AppstoreOutlined />} title="West India">
        {zones.WesternZone.map((curr) => {
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
      <SubMenu key="sub6" icon={<AppstoreOutlined />} title="North India">
        {zones.NorthernZone.map((curr) => {
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
    </Menu>
  );
};

export default SideMenu;
