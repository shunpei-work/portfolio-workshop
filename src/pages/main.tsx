import * as React from "react";
import styled from "styled-components";
import { HeaderMain } from "../compornents/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageSlider } from "../compornents/slider";
import SearchProduct from "../compornents/searchProduct";
import Top from "../images/top.png";

const Container = styled.div`
  margin-bottom: 20px; /* 下に20pxの隙間を追加 */
`;

export const Editor: React.FC = () => {
  return (
    <>
      <HeaderMain />
      <Container>
        <img src={Top} style={{ width: "100%" }}></img>
        <ImageSlider />
      </Container>
      <Container>
        <SearchProduct />
      </Container>
    </>
  );
};
