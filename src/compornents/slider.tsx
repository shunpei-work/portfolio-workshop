import * as React from "react";
import Slider from "react-slick";
import Background1 from "../images/bg_01a.png";
import Background2 from "../images/bg_01b.png";
import styled from "styled-components";

const Image = styled.div``;
const Container = styled.div`
  min-width: 100%; /* 最小幅を100%に設定 */
  min-height: 100%;
  display: flex;
`;

export const ImageSlider: React.FC = () => {
  const settings = {
    dots: true, // スライダー下のドット表示
    infinite: true, // スライダーを無限にループさせる
    speed: 500, // スライドのスピード（ミリ秒）
    slidesToShow: 1, // 表示するスライド数
    slidesToScroll: 1, // 一度にスクロールするスライド数
  };
  return (
    <>
      <Image>
        <Slider {...settings}>
          <Container>
            <img src={Background1} style={{ width: "1920px" }}></img>
          </Container>
          <Container>
            <img src={Background2} style={{ width: "1920px" }}></img>
          </Container>
        </Slider>
      </Image>
    </>
  );
};
