import React, { Component } from 'react';

class CountryList extends Component {

    state = {
        countryIso: ''
    }

    render() {
        const { countryName, iso } = this.props.country;
        const { getIso } = this.props;

        return (  
            <React.Fragment>
                <li onClick={() => getIso(iso, countryName)} >
                    <img src={require(`../images/small/${iso}.svg`)} alt={iso} />
                    <span>{ countryName }</span>
                </li>
            </React.Fragment>
        )
    }
}
 
export default CountryList;