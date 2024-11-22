import React from 'react';
import Exchanger from './application/pages/exchanger/Exchanger';
import Header from './application/components/header/Header';
import Footer from './application/components/footer/Footer';
import './App.module.scss';
import RunningLine from './application/components/running_line/RunningLine';


const App = () => {
  return (
    <body>
      <Header/>
      <RunningLine/>
      <Exchanger/>
      <Footer/>
    </body>
  );
};

export default App;
