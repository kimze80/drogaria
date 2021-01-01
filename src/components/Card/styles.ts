import styled, { keyframes } from 'styled-components';

interface CardProps {
  backgroundColor: string;
  scrollMoreText?: string;
  expand?: boolean;
}

const collapseFromUp = keyframes`
  from {
    opacity: 0;
    /* transform: translateY(0); */
  }
  to {
    opacity: 1;
    /* transform: translateY(1px); */
  }
`;

export const CardContainer = styled.div`
  max-width: 360px;
  letter-spacing: -1.5px;
`;

export const CardHeader = styled.div<CardProps>`
  width: 100%;
  background: ${(props) => props.backgroundColor};
  padding: 15px 30px;

  div {
    margin: 0 auto;
    width: fit-content;

    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin: 32px 0 0;
    text-align: center;
    text-shadow: none;
  }
`;

export const CardContent = styled.div<CardProps>`
  width: 100%;
  color: #868686;
  font-size: 18px;
  /* height: 112px; */
  padding: 7px 7px 15px;
  margin-bottom: 18px;
  background: #fff;
  height: ${(props) => (props.expand ? '200px' : '130px')};
  transition: ${(props) =>
    props.expand ? 'all 0.2s ease-in' : 'all 0.2s ease-out'};

  .toScroll {
    color: #ff0000;
    max-height: 100%;
    line-height: 1.25;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    button {
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      padding: 2px;
      margin: 5px 5px 0 0;
      border: none;
      letter-spacing: -1.5px;
      background: ${(props) => props.backgroundColor};
    }
  }
`;
