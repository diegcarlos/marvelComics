import React, { useState, ReactNode } from "react";

import { Container, Menu } from "./styled";

interface TypeBtnRight {
  children?: ReactNode;
  options: {
    label: string;
    onClick?: () => void;
  }[];
}

const ClickBtnRight: React.FC<TypeBtnRight> = (props) => {
  const { options } = props;

  const [hideMenu, setHideMenu] = useState(true);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handelContextMenu = (e: any) => {
    e.preventDefault();
    console.log(e);
    setPosition({
      top: e.clientY,
      left: e.clientX,
    });
    setHideMenu(false);
  };
  return (
    <Container
      onClick={() => setHideMenu(true)}
      onContextMenu={handelContextMenu}
    >
      <Menu
        hidden={hideMenu}
        position={{ left: position.left, top: position.top }}
        onClick={() => setHideMenu(true)}
      >
        <ul>
          {options.map((data) => (
            <li>
              <a href="#" onClick={data.onClick}>
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </Menu>
    </Container>
  );
};

export default ClickBtnRight;
