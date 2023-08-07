import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: var(--grey-3);
  padding: 2rem 0;
  border-radius: 5px;
  max-width: 400px;
  margin: 30px auto;

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
    gap: 0.3rem;
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

  div svg {
    position: absolute;
    right: 0.8rem;
    top: 36px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: var(--grey-1);
    cursor: pointer;
  }

  div p {
    color: var(--negative);
    font: var(--font-text-1);
  }

  input:focus {
    outline: 2px solid var(--color-primary);
  }

  input::placeholder {
    color: var(--grey-1);
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

  .bottom {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .link {
    text-decoration: none;
    color: var(--grey-1);
    font: var(--font-text-1);
  }

  .register {
    margin-top: 8px;
    padding-top: 12px;
    background-color: var(--grey-1);
    text-decoration: none;
    color: var(--grey-0);
    height: 40px;
    border: none;
    border-radius: 5px;
    font: var(--font-text-1);
  }

  .forget-password {
    font: var(--font-text-1);
    color: var(--grey-0);
    text-align: right;
    cursor: pointer;
  }
  .forget-password:hover {
    color: var(--grey-1);
  }

  .register:hover {
    background-color: rgb(134, 142, 150, 0.7);
  }

  @media (max-width: 425px) {
    width: 90%;
  }
`;

export default Container;
