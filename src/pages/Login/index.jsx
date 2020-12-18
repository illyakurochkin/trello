import React, {useEffect} from 'react';
import {startFirebaseUI} from '../../lib/firebase';
import {Layout} from '../../components/Layout';

const Login = () => {
  useEffect(() => {
    startFirebaseUI('#fui');
  }, [])

  return (
    <Layout>
      <div id="fui" />
    </Layout>
  );
};

export default Login;
