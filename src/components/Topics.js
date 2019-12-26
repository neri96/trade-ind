import React, { Component } from 'react';
import Topic from './Topic';
import Loading from './Loading';
import './Topics.scss';
import { Link } from 'react-router-dom';

class Topics extends Component {

    state = {
        topics: [],
        isLoading: true
    }

    componentDidMount() {
        fetch('http://api.worldbank.org/v2/topic/21/indicator?format=json')
            .then(res => res.json())
            .then(res => this.setState({ topics: res[1], isLoading: false }))
    }

    handleTopics = () => {
        return this.state.topics.map((topic) => {
            return <Topic key={topic.id} data={topic} />
        })
    }

    render() {
        console.log(this.state.topics);
        const { isLoading } = this.state;
        return (  
            <React.Fragment>
                { isLoading ? <Loading /> :
                    <div className='topics'>
                        <div className='back-home'>
                            <Link to='/' className='back-home-link'>home page</Link>
                        </div>

                        <div className='descr-topics'>
                            <h3>trade industry topics</h3>
                        </div>
                        
                        <div className='topics-list'>
                            <ul>
                                {this.handleTopics()}
                            </ul>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
 
export default Topics;


// "Trade is a key means to fight poverty and achieve the Millennium Development Goals, specifically by improving developing country access to markets, and supporting a rules based, predictable trading system. In cooperation with other international development partners, the World Bank launched the Transparency in Trade Initiative to provide free and easy access to data on country-specific trade policies.