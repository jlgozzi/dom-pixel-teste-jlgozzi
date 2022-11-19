import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    color: var(--grey-4);
    font-weight: 500;
    font-size: 1rem;
  }
  .div-input {
    display: flex;
    align-items: center;
    background-color: var(--platinum);
    border: 1px solid transparent;
    border-radius: 4px;

    position: relative;
  }
  input {
    width: 100%;
    background-color: var(--platinum);
    border: 1px solid transparent;
    border-radius: 4px;
    height: 48px;
  }
  input:disabled {
    color: var(--grey-1);
  }
  input:focus {
    outline: none;
    background-color: transparent;
    border: 1px solid var(--grey-1);
    transition: 0.4s;
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Error = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  position: absolute;
  top: 0;
  right: 0;

  &&:hover div {
    opacity: 100%;
    transition: 0.7s;
  }
  svg {
    margin-right: 10px;
    color: var(--gold);
    height: 100%;
    width: 25px;
  }
  div {
    background-color: var(--gold);
    color: #ffffff;

    height: 120%;
    width: 100px;
    padding: 10px;

    border-radius: 4px;
    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 40px;
    top: 0px;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: var(--gold) transparent;
      transform: rotate(90deg);
      position: absolute;
      top: 5px;
      left: -7px;
    }

    @media (max-width: 630px) {
      top: -80px;
      left: -60px;
      width: 80px;
      &::before {
        transform: rotate(0deg);
        top: 80px;
        left: 66px;
      }
    }
  }
`;
