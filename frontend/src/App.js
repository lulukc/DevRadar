import React, { useEffect, useState } from 'react';

import api from '~/config/api';
import GlobalStyles from './styles/global';
import { Container, DevRegistration, DevList } from './styles/pageStyles';
import DevItem from '~/components/DevItem';
import DevForm from '~/components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDev() {
      const respose = await api.get('devs');
      setDevs(respose.data);
    }
    loadDev();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <DevRegistration>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev} />
        </DevRegistration>
        <DevList>
          <ul>
            {devs.map(dev => (
              <DevItem dev={dev} key={dev._id} />
            ))}
          </ul>
        </DevList>
      </Container>
    </>
  );
}

export default App;
