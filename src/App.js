import './App.css';
import React, {useEffect, useState} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import {getAuthorizedEmail} from './lib/firebase';
import {setUserAction} from './store/user';
import {useDispatch} from 'react-redux';
import Board from './pages/Board';
import {Layout} from './components/Layout';

function App() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const e = await getAuthorizedEmail()
      setEmail(e);
      setLoading(false);

      dispatch(setUserAction(e));
    })()
  }, []);

  if(loading) {
    return (
      <Layout>
        <div>LOADING...</div>
      </Layout>
    )
  }

  const renderSwitch = () => {
    if(email) {
      return (
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/board" component={Board}/>
          <Route path="*" render={() => <Redirect to="/home" />}/>
        </Switch>
      )
    }

    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="*" render={() => <Redirect to="/login" />}/>
      </Switch>
    )
  };


  return (
    <HashRouter>
      {renderSwitch()}
    </HashRouter>
  );
}

export default App;
