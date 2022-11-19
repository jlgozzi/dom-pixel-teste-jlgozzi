import styled from "styled-components";

export const DeleteModalContainer = styled.div`
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
    height: 200px;
    width: 90%;
    max-width: 300px;

    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    background-color: var(--grey-0);

    > span {
      width: 70%;
      font-weight: 600;
    }
    > div {
      width: 80%;
      display: flex;
      gap: 5px;

      > button {
        background-color: var(--grey-4);
        color: var(--grey-0);
        width: 100%;
        border: none;
        padding: 10px;
        font-weight: 550;
        border-radius: 4px;
      }
    }
  }

  .button-cancel:hover {
    transition: 0.5s;
    background-color: var(--grey-2);
  }
  .button-confirm:hover {
    transition: 0.5s;
    background-color: var(--negative);
  }
`;
