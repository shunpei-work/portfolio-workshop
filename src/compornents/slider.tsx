import * as React from "react";
import Slider from "react-slick";
import Background1 from "../images/スライダーサンプル1.png";
import Background2 from "../images/スライダーサンプル2.png";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  height:600;
`;
const SlideContainer = styled.div`
  min-width: 100%; /* 最小幅を100%に設定 */
  display: flex;
`;

export const ImageSlider: React.FC = () => {
  
  const settings = {
    dots: true, // スライダー下のドット表示
    infinite: true, // スライダーを無限にループさせる
    speed: 500, // スライドのスピード（ミリ秒）
    slidesToShow: 1, // 表示するスライド数
    slidesToScroll: 1, // 一度にスクロールするスライド数
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生のスピード
    arrows: true, // 左右の矢印を表示
  };

  return (
    <>
      <p style={{ 
        fontSize: '20px',
        textAlign: 'center'
        }}>自動スライダー</p>
      <Container>
        <Slider {...settings}>
          <SlideContainer>
          <img src={Background1} style={{ width: "100%" }}></img>
          </SlideContainer>
          <SlideContainer>
          <img src={Background2} style={{ width: "100%" }}></img>
          </SlideContainer>
        </Slider>
      </Container>
    </>
  );
};
