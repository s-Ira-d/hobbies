import styled from "styled-components";

export const Main = styled.article`
  padding: 30px;
  max-width: 800px;
  margin: 40px auto;
  background: linear-gradient(145deg, #f9f9f9, #e0e0ff);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Article = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #444;
  border-left: 5px solid #ff7e5f;
  padding-left: 10px;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: #666;
  font-style: italic;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: #333;
  line-height: 1.6;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 8px 12px;
    margin-bottom: 8px;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      background: #fffae6;
    }
  }
`;
