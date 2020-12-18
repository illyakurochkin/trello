import React from 'react';
// import Board from 'react-trello'
import DefaultBoard from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../lib/firebase';
import {Redirect, useHistory} from 'react-router-dom';
import {selectUser} from '../../store/user';
import {selectBoard, setBoardAction} from '../../store/board';
import api from '../../lib/api';
import {Layout} from '../../components/Layout';

const Board = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector(selectUser);
  const board = useSelector(selectBoard);

  console.log('board 1', board);


  const onChange = async (b) => {
    await api.updateBoard(b)
    dispatch(setBoardAction(b));
  };

  if(!board) {
    return <Redirect to="/home" />
  }

  return (
    <Layout>
      <h1>BOARD: {board.name}</h1>
      <DefaultBoard
        initialBoard={board}
        onCardDragEnd={onChange}
        onColumnDragEnd={onChange}
        allowRenameColumn
        onColumnRename={onChange}
        allowAddColumn
        allowRemoveCard
        onCardRemove={onChange}
        allowAddCard={{on: 'top'}}
      />
      <button onClick={() => history.push('/home')} style={{color: 'blue'}}>Home</button>
      <button onClick={logout} style={{color: 'red'}}>Log out</button>
    </Layout>
  );
};

export default Board;
