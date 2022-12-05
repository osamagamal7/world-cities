import styled from "styled-components";
import { theme } from "../../theme/theme";

type CustomButtonType = {
  dangerBackground?: boolean;
};

export const CustomButton = styled.button`
  border: none;
  font-weight: 600;
  background-color: ${(props: CustomButtonType) =>
    props.dangerBackground ? theme.danger : theme.primary};
  border-radius: 20px;
  color: ${theme.white};
  padding: 10px 20px;
  text-align: center;
  display: inline;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin-top: 10px;
  width: 30%;

  &:hover {
    background-color: ${(props: CustomButtonType) =>
    props.dangerBackground ? theme.dangerExtra : theme.secondary};
  }
  @media (min-width: 768px) {
    width: 22%;
  }

`;
