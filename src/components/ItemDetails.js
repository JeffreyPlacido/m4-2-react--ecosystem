import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

const Button = styled.button``;

const Market = styled.div`
  display: flex;
  text-align: center;
  padding: 20px;
`;

const FruitPicture = styled.div`
  img {
    height: 600px;
    width: 600px;
    border-radius: 20%;
  }
`;
const InfoProduct = styled.div`
  margin-left: 80px;
`;

const Seller = styled.div`
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-top: 20px;
  }
`;

const FruitName = styled.h2`
  font-size: 34px;
  color: gray;
  margin-top: 150px;
`;

const FruitLatinName = styled.h3`
  font-style: italic;
  color: lightblue;
  font-size: 18px;
  margin-top: -30px;
`;

const SoldBy = styled.div`
  display: flex;
`;

const SellerInfo = styled.p`
  margin-top: 50px;
  margin-left: 20px;
`;

const SoldCountry = styled.p`
  font-style: italic;
  color: lightseagreen;
`;

const BuyNow = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  background-color: darkviolet;
  border-radius: 10px;
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const fruit = items[itemId];
  if (fruit.quantity > 0) {
    return (
      <Market>
        <FruitPicture>
          <img src={fruit.imageSrc} />
        </FruitPicture>
        <InfoProduct>
          <FruitName>{fruit.name}</FruitName>
          <FruitLatinName>{fruit.latinName}</FruitLatinName>
          <p>{fruit.description}</p>
          <SoldCountry>
            Product of <b>{fruit.countryOfOrigin}</b>
          </SoldCountry>
          <BuyNow>${fruit.price} - Buy now</BuyNow>
          <SoldBy>
            <Seller>
              <img
                src={sellers[fruit.sellerId].avatarSrc}
                alt={sellers[fruit.sellerId].id}
              />
            </Seller>
            <SellerInfo>
              Sold by: <b>{sellers[fruit.sellerId].storeName}</b>
            </SellerInfo>
          </SoldBy>
        </InfoProduct>
      </Market>
    );
  } else {
  }
};
export default ItemDetails;
