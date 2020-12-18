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
      history.push('/board')
    }}>
      {board.name}
    </h3>
  ))

  return (
    <Layout>
      <h1>TRELLO</h1>
      <h3>{email}</h3>
      {renderBoards()}
      <button onClick={logout} style={{color: 'red'}}>Log out</button>
    </Layout>
  );
};

export default Home;
