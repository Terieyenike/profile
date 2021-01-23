import styled from 'styled-components';

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  background: url('https://www.pngrepo.com/png/155474/512/down-arrow.png');
  background-repeat: no-repeat;
  background-size: 16px 17px;
  background-position: right;
  background-origin: content-box;
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  color: #040f16;
  margin-top: 1em;
  background-color: #fff;
  &.gender {
    margin-bottom: 1em;
  }
  @media screen and (min-width: 768px) {
    margin: 1em 0 0;
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
  }
`;
