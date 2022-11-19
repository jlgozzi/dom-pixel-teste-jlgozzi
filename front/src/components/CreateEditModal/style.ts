import styled from "styled-components";

export const EditModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    height: 500px;
    width: 90%;
    max-width: 300px;

    position: relative;

    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    background-color: var(--grey-0);
  }

  .button-back {
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    margin: 20px;

    &:hover {
      color: var(--gold);
      transition: 0.5s;
      cursor: pointer;
    }
  }
  .button-edit {
    border: none;
    padding: 15px;
    font-weight: 500;
    border-radius: 4px;
    background-color: var(--grey-4);
    color: var(--grey-0);

    &:hover {
      background-color: var(--grey-3);
      transition: 0.5s;
    }
  }
`;

export const FormStyled = styled.form`
  width: 90%;
  height: 90%;
  padding: 15px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
