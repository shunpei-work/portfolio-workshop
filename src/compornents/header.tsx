import * as React from "react";
import styled from "styled-components";
import { DropdownMenu } from "./menu";
import {
  FaTwitter,
  FaLine,
  FaTiktok,
  FaInstagramSquare,
  FaPhone,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import companyLogo from "../images/companyLogo.png";

const Header = styled.header`
  max-width: 1920px;
  background-color: orange;
  position: fixed;
  width: 100%;
  top: 0;
  height: 55;
  z-index: 1000;
`;
const HeaderWrapper = styled.div`
  max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
`;
const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 10px;
`;

const CompanyLogoConfig = styled.div`
  display: fixed;
  position: absolute;
  left: 50;
`;

const SocialIcons = styled.div`
  margin-left: auto;
  ul {
    display: flex;
  }

  li a {
    padding: 0px 13px;
    display: block;
  }
`;

const CampanyName = styled.a`
  font-size: 35px;
  font-family: "Brush Script MT", cursive;
  color: black;
  font-weight: bold;
  display: fixed;
  position: absolute;
  left: 45%;
  top: 7;
`;

export const HeaderMain: React.FC = (props) => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderContainer>
          <DropdownMenu />
          <CompanyLogoConfig>
            <img
              src={companyLogo}
              style={{ width: "70px", height: "auto" }}
            ></img>
          </CompanyLogoConfig>
          <CampanyName href="https://twitter.com/">BULLS</CampanyName>
          <SocialIcons>
            <ul className="social-icons">
              {/* 各リンクを変更する */}
              <li className="icon-tel">
                <a href="https://twitter.com/">
                  <FaPhone color="black" size="2rem" />
                </a>
              </li>
              <li className="icon-mail">
                <a href="https://twitter.com/">
                  <CiMail color="black" size="2rem" />
                </a>
              </li>
              <li className="icon-twitter">
                <a href="https://twitter.com/">
                  <FaTwitter color="black" size="2rem" />
                </a>
              </li>
              <li className="icon-tiktok">
                <a href="https://twitter.com/">
                  <FaTiktok color="black" size="2rem" />
                </a>
              </li>
              <li className="icon-line">
                <a href="https://twitter.com/">
                  <FaLine color="black" size="2rem" />
                </a>
              </li>
              <li className="icon-instagram">
                <a href="https://twitter.com/">
                  <FaInstagramSquare color="black" size="2rem" />
                </a>
              </li>
            </ul>
          </SocialIcons>
        </HeaderContainer>
      </HeaderWrapper>
    </Header>
  );
};
