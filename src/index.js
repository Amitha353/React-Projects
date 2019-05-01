import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import HighChartDemo from './HighChartDemo';
import HighStockDemo from './HighStockDemo';
import HighMapsDemo from './HighMapsDemo';
import GanttChartDemo from './GanttChartDemo';
import lineChartDemo from './lineChartDemo';
import MyStockChart from './MyStockChartDemo';

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/highChart" component={HighChartDemo} />
                <Route path="/stockChart" component={HighStockDemo} />
                <Route path="/mapChart" component={HighMapsDemo} />
                <Route path="/ganttChart" component={GanttChartDemo} />
                <Route path="/lineChart" component={lineChartDemo} />
                <Route path="/myStockChart" component={MyStockChart} />
            </React.Fragment>
        </BrowserRouter>
        , document.getElementById('root'));
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
