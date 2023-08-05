import styled from "styled-components";

export const StyledResetPassword = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 80px;

  h3 {
    font: var(--font-title-2);
    color: var(--grey-0);
    text-align: center;
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
`;
