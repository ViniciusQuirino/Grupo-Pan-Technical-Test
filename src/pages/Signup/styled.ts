import styled, { css } from "styled-components";

export const General = styled.div<{
  $borderClient?: boolean;
  $borderSeller?: boolean;
}>`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 30px;

  .top {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .top h3 {
    font: var(--font-title-2);
    color: var(--grey-0);
  }

  .top span {
    font: var(--font-text-1);
    color: var(--grey-1);
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    padding: 2rem 1rem;
    gap: 1.2rem;
    margin-bottom: 30px;
    border-radius: 5px;
  }

  form div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  div p {
    color: var(--negative);
    font: var(--font-text-1);
  }

  form div input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    background: var(--grey-2);
    border: none;
    padding: 0px 2.5rem 0px 0.8rem;
    box-sizing: border-box;
    color: var(--grey-0);
    font: var(--font-text-3);
  }

  input:focus {
    outline: 2px solid var(--color-primary);
  }

  input::placeholder {
    color: var(--grey-1);
  }

  label {
    color: var(--grey-0);
    font: var(--font-text-1);
  }

  div svg {
    position: absolute;
    right: 0.8rem;
    top: 37px;
    cursor: pointer;
    color: var(--grey-1);
    cursor: pointer;
  }

  form button {
    background: var(--color-primary);
    color: var(--grey-0);
    font: var(--font-text-1);
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 5px;
  }

  .type {
    display: flex;
    flex-direction: row;
  }

  .type :nth-child(1) {
    border: ${(props) => (props.$borderClient ? "1px solid white" : "none")};
  }

  .type :nth-child(2) {
    border: ${(props) => (props.$borderSeller ? "1px solid white" : "none")};
  }

  .register:hover {
    background-color: rgb(134, 142, 150, 0.7);
  }

  @media(max-width: 425px){
    width:90%;
  }
`;
