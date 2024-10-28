import * as React from "react";
import { useState,useEffect } from "react";
import tshirt from "../images/Tシャツ.jpg";
import sweatshirt from "../images/スウェット.jpg";
import slacks from "../images/スラックス.jpg";
import styled from "styled-components";
import { FaRegHeart,FaSearch,FaHeart } from "react-icons/fa";
import axios from 'axios';

const ContainerItem = styled.div`
  display: flex;
  flex-direction: column; /* 縦に並べる */
  align-items: center; /* 横方向中央 */
  justify-content: center; /* 縦方向中央（必要に応じて調整） */
  min-height: 30vh; /* ビューポートの高さを確保 */
`
const Input = styled.div`
  display: flex;
  align-items: center; /* 横方向中央 */
  justify-content: center; /* 縦方向中央（必要に応じて調整） */
  margin-top:50;
  margin-bottom:20;
`

const StyledList = styled.ul`
  display: flex; /* Flexboxを使用 */
  list-style: none; /* リストマーカーを非表示 */
  align-items: center; /* 横方向中央 */
  flex-wrap: wrap; /* 折り返しを有効化 */
`;

const LinkCardContainer = styled.li`
  display: flex; /* Flexboxを使用 */
  flex-direction: column;
  justify-content: center; /* 横方向中央 */
  align-items: center; /* 縦方向中央 */
  width: 450px;
  height:420px;
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

const More = styled.a`
color:black;
  font-size:20px;
  display: inline-block;
  margin-top:50;
  border: 2px solid #2c120a;
  line-height: 1.6em;
  transition: background-color 0.5s ease; /* 背景色の変更にスライド効果を追加 */
  &:hover {
    background-color: #FFC800; /* ホバー時の背景色 */
    color:black;
  }
`

const APIItem = styled.div`
  display: flex;
  flex-direction: column; /* 縦に並べる */
  align-items: center; /* 横方向中央 */
  justify-content: center; /* 縦方向中央（必要に応じて調整） */
  margin-top:100;
`

interface Product {
  id: number;
  productName: string;
  price: number;
  imageUrl: string;
  favoriteFlag: boolean;
}

const SearchProduct = () => {
  // データリストと検索キーワードの状態を管理
  const [searchTerm, setSearchTerm] = useState("");
  // お気に入り機能の状態を管理
  const [favorites, setFavorites] = useState([]);
  // 検索キーワードの状態を一時的に管理
  const [tempInputTerm, setTempInputTerm] = useState("");
  // ローディング状態を管理 
  const [isLoading, setIsLoading] = useState(true); 
  // APIから商品データを管理
  const [apiProducts, setApiProducts] = useState([]);

  const products: Product[] = [
    { id: 1, productName: "Tシャツ", price: 1500, imageUrl: tshirt, favoriteFlag:false},
    { id: 2, productName: "スウェット", price: 1500, imageUrl: sweatshirt, favoriteFlag:false },
    { id: 3, productName: "スラックス", price: 1500, imageUrl: slacks, favoriteFlag:false },
    { id: 4, productName: "Tシャツ", price: 1500, imageUrl: tshirt, favoriteFlag:false },
    { id: 5, productName: "スウェット", price: 1500, imageUrl: sweatshirt, favoriteFlag:false },
    { id: 6, productName: "スラックス", price: 1500, imageUrl: slacks, favoriteFlag:false },
  ];

  // 検索キーワードに基づいてリストをフィルタリング
  const filteredList = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // 検索ボタンが押された時の処理
  const handleSearch = () => {
    setSearchTerm(tempInputTerm);
  }

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

  // 楽天APIのURLとAPIキー
  const API_URL = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706';
  const APP_ID = '1026143293384315202'; 

  // APIからデータを取得
  useEffect(() =>{
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL,{
          params: {
            applicationId: APP_ID, // アプリID
            keyword: "古着", // 検索キーワード
            hits: 6, // 表示件数
          },
        });
        setApiProducts(response.data.Items);
        console.log(response.data.Items);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      } finally {
        // データ取得が完了したらローディング終了
        setIsLoading(false); 
      }
    };
    fetchProducts();
  },[])

  // ローディング中の表示
  if (isLoading) return <p>読み込み中...</p>; 

  return (
    <>
      <Input>
        <input
          type="text"
          placeholder="探したい商品を検索"
          value={tempInputTerm}
          onChange={(e) => setTempInputTerm(e.target.value)} // 入力が変更される度に状態を更新
        />
        <button onClick={handleSearch}><FaSearch /></button>
        </Input>
      <ContainerItem>
        <p style={{ fontSize: '20px' }}>商品リストから取得</p>
        <StyledList>
          {filteredList.length > 0 ? (
            filteredList.map((product) => (
              <LinkCardContainer key={product.id}>
                <div style={{ position: 'relative', display: 'inline-block'}}>
                  {favorites.includes(product.id) ? 
                   // お気に入りにする
                  (<FaHeart
                    size={25}
                    onClick={() => toggleFavorite(product.id)}
                    style={{ color: 'red',position: 'absolute', top: 0, left: 200}}
                  />) : 
                  // お気に入り解除
                  (<FaRegHeart 
                    size={25}
                    onClick={() => toggleFavorite(product.id)}
                    style={{ color: 'red',position: 'absolute', top: 0, left: 200}} 
                  />)}
                </div>
                {/* 商品詳細ページへのリンク */}
                <a href={"https://twitter.com/"} style={{ display: 'block', textAlign: 'center' }}>
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

        <More
          href={"https://twitter.com/"}
          className="link-card-button"
        >
          {"　"+"More"+"　"}
        </More>
      </ContainerItem>


      <APIItem>
        <p style={{ fontSize: '20px' }}>楽天商品APIから取得</p>
        <StyledList>
          {apiProducts.map((apiProducts) => (
          <LinkCardContainer key={apiProducts.Item.itemCode}>
            <div style={{ position: 'relative', display: 'inline-block'}}>
                  {favorites.includes(apiProducts.id) ? 
                   // お気に入りにする
                  (<FaHeart
                    size={25}
                    onClick={() => toggleFavorite(apiProducts.id)}
                    style={{ color: 'red',position: 'absolute', top: 0, left: 200}}
                  />) : 
                  // お気に入り解除
                  (<FaRegHeart 
                    size={25}
                    onClick={() => toggleFavorite(apiProducts.id)}
                    style={{ color: 'red',position: 'absolute', top: 0, left: 200}} 
                  />)}
                </div>
            <a href={apiProducts.Item.itemUrl} style={{ display: 'block', textAlign: 'center' }}>
              <img src={apiProducts.Item.mediumImageUrls[0].imageUrl} alt={apiProducts.Item.itemName} />
              <p>{apiProducts.Item.itemName}</p>
              <p>価格: {apiProducts.Item.itemPrice}円</p>
            </a>
          </LinkCardContainer>
        ))}
        </StyledList>
        <More
          href={"https://twitter.com/"}
          className="link-card-button"
        >
          {"　"+"More"+"　"}
        </More>
      </APIItem>
    </>
  );
};
export default SearchProduct;
