import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  h2 {
    font-size: 3.8rem;
    margin: 50px 0;
    color: #007f56;
    line-height: 60px;
    letter-spacing: -2.5px;

    span {
      font-weight: 700;
    }
  }
`;

export const InContainer = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: #868686;
  line-height: 40px;
  letter-spacing: -2.5px;

  .color {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    display: inline-block;
    margin-bottom: 5px;
  }

  .green {
    background: #007f56;
  }

  .grey {
    background: #868686;
  }

  .coral {
    background: #fe9481;
  }

  .yellow {
    background: #fcda92;
  }

  .lilac {
    background: #9c8cb9;
  }
`;
