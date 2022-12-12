import styled from "styled-components";

type maxWidth = {
  maxWidth: string
}

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerPostTile = styled.div`
  width: 75%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 0 0 15px 0;
  min-height: 450px;
  margin: 25px 0;
  height : auto;
  @media (min-width: 768px) {
      max-width: ${(props: maxWidth) =>
    props.maxWidth};
  }
  }
`;
export const PosttEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 3em;
  }
  }
`;

export const FormWrapper = styled.div`
    width: 75%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 20px 0;
    padding: 10px 0;
    text-align: center;
    @media (min-width: 768px) {
        width: ${(props: maxWidth) =>
    props.maxWidth};
        max-width: 700px
  }
  }
`;

export const CustomImage = styled.img`
  min-height: 200px;
  max-height: 250px;
  width: 100%;
  @media (min-width: 768px) {
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
