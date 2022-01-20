import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//importing 3rd party components....
import { useDispatch } from "react-redux";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState("home");
  const handleClick = (e) => {
    console.log(e);
    setState(e.key);
  };
  const clickHandler = (e) => {
    //first dispatch the hook to redux.........
    dispatch({
      type: "STATE",
      payload: null,
    });
    navigate("/");
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[state]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />} onClick={clickHandler}>
        Home
      </Menu.Item>
    </Menu>
  );
};

export default Header;
