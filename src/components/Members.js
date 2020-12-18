import React from 'react';

const Members = ({members, onChange}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid black',
      marginBottom: 10,
      padding: 4,
      width: 500,
    }}>
      {members.map(member => (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 10,
        }}>
          <div style={{paddingRight: 4}}>{member}</div>
          <span style={{cursor: 'pointer'}} onClick={() => onChange(members.filter(m => m !== member))}>
              ×
          </span>
        </div>
      ))}
      <span style={{cursor: 'pointer'}} onClick={() => {
        const m = prompt('enter member name', '');
        if(m) {
          onChange([...members, m]);
        }
      }}>
        +
      </span>
    </div>
  )
};

export default Members;
