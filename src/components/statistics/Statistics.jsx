import React from 'react'
import PropTypes from 'prop-types' 
// !CSS styled components
import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled'

// ?funcion para color aleatorio
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};


// *Componente de estadísticas
export const Statistics = ({ title, stats }) => {
  
  return (
    <StatisticsSection>
   {/* Renderizar el título si se proporciona */}
            {title && <Title>{title}</Title>}              

      <StatList>
          {/* Mapear y renderizar cada elemento de estadísticas */}
            {stats.map(item =>
              <Item key={item.id}
                style={{
                backgroundColor: getRandomHexColor()
              }}>
                <Label>{item.label}</Label>
                <Percentage>{item.percentage}%</Percentage>
            </Item> )}
        </StatList>
    </StatisticsSection>
  )
}

// *Proporciona prop-types para validar los datos pasados al componente Statistics.
Statistics.propTypes = {
  title: PropTypes.string, 
  //  *Las estadísticas son un arreglo de objetos que contienen información sobre cada estadística.
  // *y se usa PropTypes.arrayOf() para especificar que esperamos un arreglo de objetos Prottypes.Shape({}).
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      label: PropTypes.string.isRequired, 
      percentage: PropTypes.number.isRequired, 
    })
  )
};