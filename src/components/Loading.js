import React, { Component } from 'react';

class Loading extends Component {
    render() { 
        return (  
            <div className='loading' style={styleLoading}>
                <img src={require(`../images/spinner.svg`)} alt='loading...' />
            </div>
        )
    }
}
 
export default Loading;

const styleLoading = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}