import * as React from "react";
import { useState } from "react";
import tshirt from "../images/Tシャツ_100.jpg";
import sweatshirt from "../images/スウェット_100.jpg";
import slacks from "../images/スラックス_100.jpg";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const StyledList = styled.ul`
  display: flex; /* Flexboxを使用 */
  list-style: none; /* リストマーカーを非表示 */
  align-items: center; /* 横方向中央 */
`;

const LinkCardContainer = styled.li`
  display: flex; /* Flexboxを使用 */
  flex-direction: column;
  justify-content: center; /* 横方向中央 */
  align-items: center; /* 縦方向中央 */
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 縦に並べる */
  align-items: center; /* 横方向中央 */
  justify-content: center; /* 縦方向中央（必要に応じて調整） */
  min-height: 40vh; /* ビューポートの高さを確保 */
`

interface Product {
  id: number;
  productName: string;
  price: number;
  imageUrl: string;
}

const SearchProduct = () => {
  // データリストと検索キーワードの状態を管理
  const [searchTerm, setSearchTerm] = useState("");
  // お気に入り機能の状態を管理
  const [favorites, setFavorites] = useState([]);

  const products: Product[] = [
    { id: 1, productName: "Tシャツ", price: 1500, imageUrl: tshirt },
    { id: 2, productName: "スウェット", price: 1500, imageUrl: sweatshirt },
    { id: 3, productName: "スラックス", price: 1500, imageUrl: slacks },
  ];

  // 検索キーワードに基づいてリストをフィルタリング
  const filteredList = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // お気に入りに追加または削除する関数
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        // 既にお気に入りの場合は削除
        return prevFavorites.filter((id) => id !== id);
      } else {
        // お気に入りに追加
        return [...prevFavorites, id];
      }
    });
  };

  return (
    <>
      <Container>
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
                <div>
                  {favorites.includes(product.id) ? 
                  (<FaHeart
                    onClick={() => toggleFavorite(product.id)}
                    style={{ color: 'red'}} // お気に入りにする
                  />) : 
                  (<FaRegHeart 
                    onClick={() => toggleFavorite(product.id)}
                    style={{ color: 'red'}} // お気に入り解除
                  />)}
                </div>
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
      </Container>
    </>
  );
};

export default SearchProduct;
