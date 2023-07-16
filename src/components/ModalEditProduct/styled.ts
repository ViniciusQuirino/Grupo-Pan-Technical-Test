import styled from "styled-components";

export const EditProductStyled = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 0;
  background-color: var(--grey-3);
  border-radius: 10px;
  position:relative;

  h1 {
    margin:15px 0 20px 25px;
    font: var(--font-title-2);
    color: var(--grey-0);
  }

  .closed {
    position: absolute;
    top: 5%;
    right: 8%;
    font-size: 30px;
    color: var(--grey-0);
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 5px;
  }

  div input {
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

  label {
    color: var(--grey-0);
    font: var(--font-text-1);
  }

  button {
    width: 90%;
    margin: 0 auto;
    background: var(--color-primary);
    color: var(--grey-0);
    font: var(--font-text-1);
    border: none;

    height: 40px;
    border-radius: 5px;
  }

  .upload {
    width: 50%;
    background-color: var(--grey-2);
  }

  .upload:hover,
  button:hover {
    background-color: rgb(134, 142, 150, 0.7);
  }

  .error-image {
    margin: 0 auto;
    color: var(--negative);
  }

  @media (min-width: 762px) {
    width: 500px;
    gap: 0px;
    position:relative;

    .closed {
      position: absolute;
      top: 3%;
      left: 90%;
    }
  }
`;
