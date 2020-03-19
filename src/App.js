import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import Statistics from './components/Statistics';
import About from './components/About';
import fetchStatsAction from './action/fetchStats';

class App extends Component {
  componentDidMount() {
    this.props.fetchStats();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <br/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/info" component={Info}/>
            <Route exact path="/stats" component={Statistics}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchStats: () => { dispatch(fetchStatsAction()) }
  }
}

export default connect(null, mapDispatchToProps)(App);
