import React from 'react';

import { Devline } from './styles';

export default function DevItem({ dev }) {
  return (
    <Devline>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div>
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Assesar perfil no Github
      </a>
    </Devline>
  );
}
