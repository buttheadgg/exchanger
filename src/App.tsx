import React from 'react';
import './App.module.scss';
import './application/styles/global.scss'
import Exchanger from './application/pages/exchanger/Exchanger';
import Header from './application/components/Header/Header';
import Footer from './application/components/Footer/Footer';
import RunningLine from './application/components/RunningLine/RunningLine';
import { observer } from 'mobx-react-lite';



const App = observer(() => {
  return (
    <body>
      <Header/>
      <RunningLine/>
      <Exchanger/>
      <Footer/>
    </body>
  );
});

export default App;
