import styled from 'styled-components';

export const HeaderMenu = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  height: 90px;
  width: 100%;
  margin-top: 10px;
`;

export const Logo = styled.div`
  a {
    img {
      width: 100%;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    margin: 1rem 0;
    padding: 0 5px 0 20px;
    list-style-type: none;

    li {
      display: inline;
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #007f56;
        font-size: 1.4rem;
        font-weight: 300;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: -2px;

        &:hover {
          color: #fe9481;
          text-decoration: underline;
        }
      }
    }
  }
`;
