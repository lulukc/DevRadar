import styled from 'styled-components';

export const Devline = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 20px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
  }
  div {
    margin-left: 10px;
  }
  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }
  span {
    font-size: 14px;
    color: #999;
    margin-top: 2px;
  }
  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }
  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;
    :hover {
      color: #5a23a6;
    }
  }
`;
