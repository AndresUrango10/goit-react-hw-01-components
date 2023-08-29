import React from 'react';
import PropTypes from 'prop-types';
// !CSS styled-components
import { Item, AvatarImg, Name, Status } from './FriendListItem.styled';

//componente FriendListItem
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Item>
        {/* Condiconal: si esta activo mostrar color VERDE sino ROJO */}
        <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
        <AvatarImg src={avatar} alt={name} />
        <Name>{name}</Name>
      </Item>
    </>
  );
};

// *Proporcionar prop types para validar los datos pasados al componente FriendListItem.
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
