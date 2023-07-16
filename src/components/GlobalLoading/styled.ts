import styled from "styled-components";

export const LoadingStyled = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #e4e4ed;
  border-right-color: #4f4b81;
  animation: s2 0.5s infinite linear;

  @keyframes s2 {
    to {
      transform: rotate(1turn);
    }
  }
`;
