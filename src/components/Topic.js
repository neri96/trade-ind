import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import TopicData from './TopicData';

class Topic extends Component {

    state = {
        arrowSpin: false
    }
    

    render() { 
        const { data } = this.props;
        const { arrowSpin } = this.state;
        
        return (  
            <li style={{ display: data.name.length >= 85 && 'none' }}>
                <div 
                    className='topic-name' 
                    onMouseEnter={() => this.setState({ arrowSpin: true })} 
                    onMouseLeave={() => this.setState({ arrowSpin: false })}
                >
                    <Link className='topic-name-link'
                        to={{ 
                            pathname: `/topic/${data.id}`, 
                            state: { topicName: data.name }
                        }}
                        >
                            { data.name }
                    </Link>
                </div>
                <span 
                    className="far fa-arrow-alt-circle-right arrow-li"
                    style={arrowSpin ? iconStyles : null}
                ></span>
            </li>
        )
    }
}

const iconStyles = {
 right: '10px',
 transform: 'translateY(-50%) rotate(-180deg)'     
}
 
export default Topic;