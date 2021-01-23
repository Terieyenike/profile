import styled from 'styled-components';

export const Section = styled.section`
  padding: 1em 0;
  margin-top: 2em;
`;

export const Bg = styled.div`
  background: #051620;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5em;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1.5em;
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
  h3 {
    align-self: center;
    margin: 1em 0 0.5em;
    color: #ffc857;
  }
  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    p {
      font-size: 1.3rem;
    }
    span {
      font-size: 1.1rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    p,
    span {
      font-size: 1rem;
    }
  }
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icons = styled.div`
  a {
    color: #fdfffc;
    cursor: pointer;
  }
  a + a {
    margin-left: 1em;
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 1.5rem;
    }
  }
`;

export const Type = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 700;
  }
`;

export const Category = styled.div`
  margin: 0 0 2.5em;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

// Tablet and big screen size media query
export const Grid = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
    grid-auto-flow: dense;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Loading = styled.h2`
  display: grid;
  place-items: center;
  min-height: 50vh;
`;
