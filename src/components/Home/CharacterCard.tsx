import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Result } from '../../interfaces/rickAndMorty';

interface CharacterCardProps {
  character: Result;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const [statusColor, setStatusColor] = useState<string>('');

  const handleStatusColor = () => {
    switch (character.status) {
      case 'Alive':
        return 'bg-green-600';
      case 'Dead':
        return 'bg-red-600';
      default:
        return 'bg-gray-400';
    }
  };

  useLayoutEffect(() => {
    const color = handleStatusColor();
    setStatusColor(color);
  }, [character]);

  return (
    <NavLink
      to={`./character/${character.id}`}
      className="xs:min-w-56 border-solid border-2 border-gray-600"
    >
      <img src={character.image} alt="character" />
      <div className="p-2 flex flex-col gap-2">
        <span>{character.name}</span>
        <div className="flex justify-between text-sm ">
          <span className=" opacity-70">{character.gender}</span>
          <span className={`pl-1 pr-1 rounded-sm ${statusColor}`}>
            {character.status}
          </span>
        </div>
      </div>
    </NavLink>
  );
};
