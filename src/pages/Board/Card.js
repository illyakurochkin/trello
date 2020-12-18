import React from 'react';
import {selectUser} from '../../store/user';
import {useSelector} from 'react-redux';

const Card = ({dragging, onCardRemove, onJoin, children: card}) => {
  const email = useSelector(selectUser);

  const renderJoin = () => {
    if(card.members && card.members.includes(email)) {
      return <div onClick={onJoin} style={{
        alignSelf: 'flex-end',
        border: '1px solid red',
        borderRadius: 10,
        padding: 4,
        fontSize: 10,
      }}>LEAVE-</div>;
    }

    return (
      <div onClick={onJoin} style={{
        alignSelf: 'flex-end',
        border: '1px solid green',
        borderRadius: 10,
        padding: 4,
        fontSize: 10,
      }}>JOIN+</div>
    );
  }

  console.log('card.members', card.members);
  return (
    <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
      <span>
        <div className='react-kanban-card__title'>
          <span>{card.title}</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
              ×
            </span>
        </div>
      </span>
      <div className='react-kanban-card__description'>{card.description}</div>
      <div style={{fontSize: 10, paddingTop: 20}}><b>members</b></div>
      {(!card.members || !card.members.length) && <div>-</div>}
      {card.members && card.members.map && card.members.map(member => (
        <div key={member} style={{fontSize: 10}}>{member}</div>
      ))}
      {renderJoin()}
    </div>
  );
};

export default Card;
