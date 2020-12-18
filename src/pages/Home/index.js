import React, {useEffect, useState} from 'react';
import '@lourenci/react-kanban/dist/styles.css'
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../lib/firebase';
import api from '../../lib/api';
import {selectUser} from '../../store/user';
import {setBoardAction} from '../../store/board';
import {Layout} from '../../components/Layout';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector(selectUser);
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const b = await api.fetchBoards();
      setBoards(b);
      setLoading(false);
    })()
  }, [history]);

  if (loading) {
    return (
      <Layout>
        <div>LOADING...</div>
      </Layout>
    )
  }

  const renderBoards = () => boards.map(board => (
    <h3 style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {
      dispatch(setBoardAction(board));
      history.push(`/board/${board._id}`)
    }}>
      {board.name}
    </h3>
  ))

  const onCreateBoard = async () => {
    const boardName = prompt('enter board name', '');
    await api.createBoard(boardName);
    setLoading(true);
    const b = await api.fetchBoards();
    setBoards(b);
    setLoading(false);
  }

  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>TRELLO</h1>
        <button onClick={logout} style={{color: 'red', paddingLeft: 10, paddingRight: 10}}>Log out</button>
      </div>
      <h3 style={{paddingBottom: 30}}>{email}</h3>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

        <h3 style={{paddingRight: 20}}>Your boards:</h3>
        <button onClick={onCreateBoard} style={{color: 'green', paddingLeft: 10, paddingRight: 10}}>CREATE BOARD+</button>
      </div>
      {renderBoards()}
    </Layout>
  );
};

export default Home;
