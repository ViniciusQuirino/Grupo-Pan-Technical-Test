import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  .positive {
    scale: 10;
    color: var(--secess);
  }

  .negative {
    scale: 10;
    color: var(--negative);
  }

  p {
    font: var(--font-title-1);
    color: var(--grey-0);
    padding-top: 85px;
    text-align: center;
  }

  a {
    margin-top: 30px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: none;
    font-size: 20px;
    border-radius: 5px;
    padding: 0.56rem 1rem;
    text-decoration: none;
  }

  a:hover {
    background-color: var(--grey-4);
  }
`;
