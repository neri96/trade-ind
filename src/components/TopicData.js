import React, { Component } from 'react';
import CountryList from './CountryList';
import ChartSettings from './ChartSettings';
import './TopicData.scss';
import { Link } from 'react-router-dom';
import { countries } from './countries';


class TopicData extends Component {

    state = {
        dates: [],
        values: [],
        country: 'nld',
        countryName: 'Netherlands',
        isLoading: true,
        noDataFound: false
    }


    fetchData = () => {
        const { match } = this.props;

        fetch(`http://api.worldbank.org/v2/country/${this.state.country}/indicator/${match.params.id}?format=json`)
            .then(res => res.json())
            .then((res) => {

                    if(res.length >= 2) {

                        let dates = [];
                        let values = [];

                        res[res.length - 1].map((data) => {
                            return {
                                dates: dates.push(data.date),
                                values: values.push(data.value)
                            }
                        })

                        dates.splice(dates.length - 39, 50);
                        values.splice(values.length - 39, 50);

                        this.setState({ dates, values, isLoading: false });

                    } else {
                        this.setState({ noDataFound: true })
                    }
            })
    }


    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(_, prevState) {
        if(this.state.country !== prevState.country && prevState.country) {
            this.fetchData();
        }
    }


    getIso = (iso, name) => {
        this.setState({ country: iso, countryName: name })
    }



    render() {
        const { topicName }= this.props.location.state;
        const { country, countryName, isLoading, dates, values, noDataFound } = this.state;


        return (
            <React.Fragment>
                    <div className='stat-wrap'>
                        <div className='stat'>
                            <div className='back-topics'>
                                <Link to='/topics' className='back-topics-link'>topics</Link>
                                <Link to='/' className='back-home-link-2'>
                                    <span className="fas fa-home"></span>
                                </Link>
                            </div>

                            <div className='topic-name-det'>
                                <h4>{ topicName } of</h4>
                                <span className='small-devices topic-name-top'>{ topicName } of</span>
                                { country && <img src={require(`../images/large/${country}.gif`)} alt='anim' /> }
                                <h4 className='country-name'>{ countryName }</h4>
                                <span className='small-devices country-name-small'>{ countryName }</span>
                            </div>

                            <div className='chart-info'>
                                <div className='chart'>
                                    { !noDataFound ?
                                        <ChartSettings
                                            isLoading={isLoading}
                                            dates={dates}
                                            values={values}
                                        /> :

                                        <h2 className='nodata'>
                                            No data for this topic :( <br />
                                            Please, try another one!
                                        </h2>
                                    }
                                </div>

                                <div className='top-countries'>
                                    <ul>
                                        {
                                            countries.map((country) => {
                                                return <CountryList
                                                    key={country.id}
                                                    country={country}
                                                    getIso={this.getIso}
                                                />
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default TopicData;
