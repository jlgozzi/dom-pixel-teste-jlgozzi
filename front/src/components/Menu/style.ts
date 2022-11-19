import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: var(--grey-4);
  color: var(--grey-0);

  width: 90%;
  height: 30px;
  max-width: 1000px;
  border-radius: 4px;

  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  > button {
    border: none;
    font-weight: 500;
    padding: 5px;

    background-color: var(--grey-0);

    &:hover {
      background-color: var(--gold);
      transition: 0.5s;
    }
  }
`;
