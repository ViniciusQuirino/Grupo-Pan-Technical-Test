import styled from "styled-components";

export const DeleteProductStyled = styled.section`
  width: 90%;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  background-color: var(--grey-3);
  border-radius: 10px;

  h3 {
    margin: 0 auto;
    text-align: center;
    font: var(--font-text-0);
    color: var(--grey-0);
  }

  button {
    width: 85%;
    margin: 0 auto;
    background: var(--color-primary);
    color: var(--grey-0);
    font: var(--font-text-1);
    border: none;
    height: 40px;
    border-radius: 5px;
  }

  button:hover {
    background-color: rgb(134, 142, 150, 0.7);
  }

  @media (min-width: 762px) {
    width: 500px;
  }
`;
