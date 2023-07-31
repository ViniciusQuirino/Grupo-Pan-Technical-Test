import styled from "styled-components";

export const StyledResetPassword = styled.div`
  width: 90%;
  background-color: var(--grey-3);
  padding: 2rem 0;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 100px;

  form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h3 {
    color: var(--grey-0);
    font: var(--font-title-2);
    text-align: center;
  }

  label {
    color: var(--grey-0);
    font: var(--font-text-1);
  }

  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    position: relative;
  }
  
  .input input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: var(--grey-2);
    border: none;
    padding: 0px 2.5rem 0px 0.8rem;
    box-sizing: border-box;
    color: var(--grey-0);
    font: var(--font-text-3);
  }
  div p {
    color: var(--negative);
    font: var(--font-text-1);
  }

  input:focus {
    outline: 2px solid var(--color-primary);
  }

  button {
    height: 40px;
    background-color: var(--color-primary);
    color: var(--grey-0);
    border: none;
    border-radius: 5px;
    width: 100%;
    font: var(--font-text-1);
  }

  button:hover {
    background-color: rgb(134, 142, 150, 0.7);
  }

  input::placeholder {
    color: var(--grey-1);
  }
`;
