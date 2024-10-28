import * as React from "react";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Menu = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50;
  left: 0;
  z-index: 1000;
  width: 70% li {
    padding: 5px 0;
  }

  li a {
    &:hover {
      color: yellow;
      text-decoration: underline;
    }
  }
`;

export const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <CiMenuBurger
        size={30}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      {isOpen && (
        <Menu>
          <ul>
            <li>
              <a className="catalog">カタログ</a>
            </li>
            <li>
              <a className="onlineshop">オンラインショップ</a>
            </li>
            <li>
              <a className="access">アクセス</a>
            </li>
            <li>
              <a className="company">会社概要</a>
            </li>
            <li>
              <a className="recruit">採用情報</a>
            </li>
          </ul>
        </Menu>
      )}
    </>
  );
};
