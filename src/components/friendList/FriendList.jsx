import React from 'react';
import PropTypes from 'prop-types';
// !Componente Renderizado ITEM(LI)
import { FriendListItem } from './FriendListItem';
// !CSS styled-components
import {
  ListFriends,
} from './FriendList.styled';

// *componente FriendList
export const FriendList = ({ friends }) => {
  return (
    <>
      <ListFriends>
          {/* Mapear y renderizar cada elemento de amigos */}
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ListFriends>
    </>
  );
};

// *Proporciona prop-types para validar los datos pasados al componente FriendList.
FriendList.prototype = {
   //  *un arreglo de objetos que contienen información sobre cada AMIGO.
  // *y se usa PropTypes.arrayOf() para especificar que esperamos un arreglo de objetos  PropTypes.Shape({})
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
