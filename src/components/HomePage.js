import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

class HomePage extends Component {
    
    state = {
        scrollHeight: 0
    }
    
    getHeightRef = React.createRef();

    componentDidMount() {
        this.setState({ scrollHeight: this.getHeightRef.current.scrollHeight })
    }

    render() {
        const minMargin = {
            marginTop: `-${this.state.scrollHeight}px`
        }
        return (  
            <div className='home-page'>
                <div className='hp-descr' ref={this.getHeightRef} style={minMargin}>
                    <p>
                        This web-application represents a bunch of indicators in the trading industry in 20 different countries of the world with the largest economies for past 10 years.
                    </p>

                    <p className='trade-info-hp'>
                        Trade is a key means to fight poverty and achieve the Millennium Development Goals, specifically by improving developing country access to markets, and supporting a rules based, predictable trading system.
                    </p>

                    <p>
                        In order to fetch all indicators projects.worldbank.org API has been used.
                    </p>
                </div>

                <div className='hp-btn'>
                    <Link to='/topics' className='go-btn-hp'>go!</Link>
                </div>
            </div>
        )
    }
}
 
export default HomePage;

