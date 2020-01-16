import styled from 'styled-components';

export const FormDev = styled.form`
  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }
  button {
    width: 100%;
    border: 0;
    margin-top: 20px;
    background: #7d40e7;
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #eee;
    transition: background 0.5s;

    :hover {
      background: #6931ca;
    }
  }
`;
export const InputBlock = styled.div`
  small {
    margin-top: 20px;
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }
  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }
`;

export const InputGrup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
