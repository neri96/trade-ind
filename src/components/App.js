import React, { Component } from 'react';
import HomePage from './HomePage';
import Topics from './Topics';
import TopicData from './TopicData';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

class App extends Component {

    render() {
        return (
            <Route render={({ location }) => (
                <div className='app'>
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames='multi'
                        >
                            <Switch location={location}>
                                <Route path='/' exact component={ HomePage } />
                                <Route path='/topics' component={ Topics } />
                                <Route path='/topic/:id' component={ TopicData } />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            )} />
        )
    }
}

export default App;
