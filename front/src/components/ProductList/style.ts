import styled from "styled-components";

export const ProductListContainer = styled.div`
  font-size: 0.8rem;

  .empty-products {
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }

  ul {
    padding-bottom: 30px;
    width: 100%;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ListHeader = styled.div`
  width: 90%;
  max-width: 1000px;

  margin: 0 auto;
  margin-top: 50px;

  overflow-x: auto;

  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-4);
  color: var(--grey-0);
  font-weight: 500;

  span {
    width: 20%;
    text-align: center;
  }
`;

export const StyledLi = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;

  padding: 10px;
  overflow-x: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--platinum);
  color: var(--grey-4);
  font-weight: 500;
  > span {
    width: 20%;
  }
  > div {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }
  > div svg {
    height: 15px;
    width: 15px;

    cursor: pointer;
  }

  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
  }
  > div svg:hover {
    color: var(--gold);
    transition: 0.3s;
  }
  > div svg:active {
    transform: scale(0.9);
    transition: 0.3s;
  }
`;
