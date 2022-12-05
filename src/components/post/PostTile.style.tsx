import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
`;

export const InnerPostTile = styled.div`
  grid-column: 2/8;
  place-self: center;
  width: 400px;
  margin: 2em 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 0 0 15px 0;
  @media (min-width: 768px) {
      width: 600px;
  }
  }
`;


export const CustomImage = styled.img`
  height: 200px;
  width: 100%;
  @media (min-width: 768px) {
    width: 100%;
    object-fit: cover;
    margin: 0 0%;
  }
  }
`;
export const TextBody = styled.p`
  text-align: center;
  font-size: 1em;
  padding: 10px 16px;
  opacity: 0.5;
  @media (min-width: 768px) {
    font-size: 1.1em;
  }
  }
`;
export const Title = styled.h1`
    font-size: 1.3em;
    margin: 10px 0;
    text-align: center;
  @media (min-width: 768px) {
    font-size: 1.8em;
    
  }
  }
`;
