import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    aside {
      width: 100%;
    }
    main {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;

export const DevRegistration = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 30px 20px;
`;

export const DevList = styled.main`
  flex: 1;
  margin-left: 20px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style: none;
  }
  @media only screen and (max-width: 600px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;
