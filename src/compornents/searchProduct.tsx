import * as React from "react";
import { useState } from "react";
import tshirt from "../images/Tシャツ_100.jpg";
import sweatshirt from "../images/スウェット_100.jpg";
import slacks from "../images/スラックス_100.jpg";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex; /* Flexboxを使用 */
  list-style: none; /* リストマーカーを非表示 */
`;

const LinkCardContainer = styled.li`
  flex-direction: column;
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  justify-content: center; /* 横方向中央 */
  align-items: center; /* 縦方向中央 */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

interface Product {
  id: number;
  productName: string;
  price: number;
  imageUrl: string;
}

const SearchProduct = () => {
  // データリストと検索キーワードの状態を管理
  const [searchTerm, setSearchTerm] = useState("");

  const products: Product[] = [
    { id: 1, productName: "Tshirt", price: 1500, imageUrl: tshirt },
    { id: 2, productName: "Sweatshirt", price: 1500, imageUrl: sweatshirt },
    { id: 3, productName: "Slacks", price: 1500, imageUrl: slacks },
  ];

  // 検索キーワードに基づいてリストをフィルタリング
  const filteredList = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="探したい商品を検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 入力が変更される度に状態を更新
        />
        <StyledList>
          {filteredList.length > 0 ? (
            filteredList.map((product) => (
              <LinkCardContainer key={product.id}>
                {/* 商品詳細ページへのリンク */}
                <a
                  href={"https://twitter.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={product.imageUrl}></img>
                  <br />
                  {product.productName}:{product.price}円
                </a>
              </LinkCardContainer>
            ))
          ) : (
            <li>該当する商品が見つかりませんでした</li>
          )}
        </StyledList>

        <a
          href={"https://twitter.com/"}
          className="link-card-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          もっと見る
        </a>
      </div>
    </>
  );
};

export default SearchProduct;
