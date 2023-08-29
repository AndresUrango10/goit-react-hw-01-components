import React from 'react'
import PropTypes from 'prop-types'
// !CSS styled components
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsContainer,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled';

//*Componente perfil de USER
export const Profile = ({ userName, tag, location, avatar, stats: {followers,views,likes} }) => {
  return (
    <ProfileContainer>

      {/* Informacion del USER */}
      <Description>
        <Avatar src={avatar} alt={userName} />
        <Name>{userName}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      {/* Estadisticas del USER */}
      <StatsContainer>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatItem>
          </StatsContainer>
          
    </ProfileContainer>
  );
};

// *Proporciona proptypes para validar los datos pasados al componente Profile.
Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
    // *Las estadísticas son un objeto con información sobre seguidores, vistas y likes.
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
};