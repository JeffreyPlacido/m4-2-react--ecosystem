import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FruitProducts = styled.div`
  display: inline-block;
  width: 28%;
  text-align: center;
  padding: 20px;
  img {
    height: 200px;
    width: 200px;
    border-radius: 20%;
  }
`;

const FruitName = styled.h2`
  color: darkorchid;
`;

const Latin = styled.h3`
  color: coral;
  margin-top: -20px;
`;

const ListingGrid = ({ itemList }) => {
  return itemList.map((item) => {
    return (
      <Link to={`/items/${item.id}`}>
        <FruitProducts>
          <img src={item.imageSrc} alt={item.name} />
          <FruitName>{item.name}</FruitName>
          <Latin>{item.latinName}</Latin>
        </FruitProducts>
      </Link>
    );
  });
};

export default ListingGrid;
