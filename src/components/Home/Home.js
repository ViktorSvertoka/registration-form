import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import styles from './Home.module.css';

const Home = props => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Раді Вас Бачити Знову!</h1>
      <Button onClick={ctx.onLogout}>Вихід</Button>
    </Card>
  );
};

export default Home;
