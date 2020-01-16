import React, { useState, useEffect } from 'react';

import { FormDev, InputBlock, InputGrup } from './styles';

export default function DevForm({ onSubmit }) {
  const [devLatitude, setDevLatitude] = useState('');
  const [devLongitude, setDevLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setDevLatitude(latitude);
        setDevLongitude(longitude);
      },
      err => {},
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    onSubmit({
      github_username,
      techs,
      latitude: devLatitude,
      longitude: devLongitude,
    });
    setGithubUsername('');
    setTechs('');
  }

  return (
    <FormDev onSubmit={handleAddDev}>
      <InputBlock>
        <small>Usuário do Github</small>
        <input
          type="text"
          name="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </InputBlock>
      <InputBlock>
        <small>Tecnologias</small>
        <input
          type="text"
          name="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </InputBlock>
      <InputGrup>
        <InputBlock>
          <small>Latitude</small>
          <input
            type="nunber"
            name="Latitude"
            required
            onChange={e => setDevLatitude(e.target.value)}
            value={devLatitude}
          />
        </InputBlock>
        <InputBlock>
          <small>Longitude</small>
          <input
            type="nunber"
            name="Longtude"
            required
            onChange={e => setDevLongitude(e.target.value)}
            value={devLongitude}
          />
        </InputBlock>
      </InputGrup>
      <button type="submit">Salvar</button>
    </FormDev>
  );
}
