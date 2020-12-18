import React, {useEffect, useState} from 'react';
import DefaultBoard from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import {useDispatch, useSelector} from 'react-redux';
import  {Redirect, useHistory, useParams} from 'react-router-dom';
import {selectUser} from '../../store/user';
import {selectBoard, setBoardAction} from '../../store/board';
import api from '../../lib/api';
import {Layout} from '../../components/Layout';
import Card from './Card';
import Members from '../../components/Members';

const Board = () => {
  const {id: boardId} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector(selectUser);
  const board = useSelector(selectBoard);
  const [loading, setLoading] = useState(true);

  console.log('board 1', board);

  useEffect(() => {
    (async () => {
      const bs = await api.fetchBoards();
      const bo = bs.find(b => b._id === boardId);
      dispatch(setBoardAction(bo));
      setLoading(false);
    })()
  }, [dispatch]);


  const onChange = async (b) => {
console.log('change', b);
    try {
      console.log('new b', b);
      await api.updateBoard(b)
      dispatch(setBoardAction(b));
    } catch (e) {
      console.log('e', e);
    }
  };

  const onNew = (o) => ({id: Math.random() * 10000, ...o});

  const onJoin = (c) => () => {
    console.log('j');

    const toggleMembers = (m) => {
      if(m.includes(email)) {
        return m.filter(mm => mm !== email);
      }

      return [...m, email];
    }
    return onChange({
      ...board, columns: board.columns.map(column => ({
        ...column, cards: column.cards.map(card => ({
          ...card, members: c.id === card.id ? toggleMembers(card.members) : card.members
        })),
      })),
    });
  };

  if (loading) {
    return (
      <Layout>
        <div>LOADING...</div>
      </Layout>
    )
  }

  if(!board.members.includes(email)) {
    return <Redirect to="/home" />
  }

  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'row', paddingBottom: 20}}>
      <button onClick={() => history.push('/home')} style={{color: 'blue', marginRight: 10, padding: 10}}>Home</button>
        <h1>BOARD: {board.name}</h1>
      </div>
      <Members members={board.members} onChange={m => onChange({...board, members: m})}/>
      <DefaultBoard
        key={JSON.stringify(board)}
        renderCard={(card, {dragging, removeCard, ...n}) => {
          console.log('n', n);
          return (
            <Card
              onJoin={onJoin(card)}
              onCardRemove={removeCard}
              dragging={dragging}
            >{card}</Card>
          );
        }}
        initialBoard={board}
        onCardDragEnd={onChange}
        onColumnDragEnd={onChange}
        allowRemoveColumn onColumnRemove={onChange}
        allowRenameColumn onColumnRename={onChange}
        allowRemoveCard onCardRemove={onChange}
        allowAddCard={{on: 'top'}} onNewCardConfirm={onNew} onCardNew={onChange}
        allowAddColumn onNewColumnConfirm={onNew} onColumnNew={onChange}
      />
    </Layout>
  );
};

export default Board;
