import React from 'react';
import logo from './logo.svg';
// import Chart from './Charts';
import './App.css';
//import CanvasJSReact from './canvasjs.react';
import Header from './header/Header.js';
import Chart from './charts/Chart.js';
import GetData from './data/GetData.js'

import ChartNew from './charts/ChartNew.js';
import GetDataNew from './data/GetDataNew.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Chart />
        <GetData />



        <ChartNew />
        <GetDataNew />
      </div>

    );
  }
}

export default App;
