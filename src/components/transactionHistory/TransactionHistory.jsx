import React from 'react';
import PropTypes from 'prop-types';

// !CSS styled-components
import {
  TableHistory,
  TheadHistory,
  StyledTr,
  ThHistory,
} from './TransactionHistory.styled';

// *Componente TransactionHistory
export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <TableHistory>
        <TheadHistory>
          <tr>
            <ThHistory>Type</ThHistory>
            <ThHistory>Amount</ThHistory>
            <ThHistory>Currency</ThHistory>
          </tr>
        </TheadHistory>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <StyledTr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </StyledTr>
          ))}
        </tbody>
      </TableHistory>
    </div>
  );
};

// *Proporciona prop-types para validar los datos pasados al componente TransactionHistory.
TransactionHistory.prototype = {
  //  *un arreglo de objetos que contienen información sobre cada TRANSACCION.
  // *y se usa PropTypes.arrayOf() para especificar que esperamos un arreglo de objetos  PropTypes.Shape({}).
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
