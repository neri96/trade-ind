import React, { useState, useEffect, useRef } from 'react';
import Loading from './Loading';
import { Line, Bar, Pie } from 'react-chartjs-2';

const ChartSettings = ({ dates, values, isLoading }) => {

    const useOnUpdate = useRef(false);

    const [data, setData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Trade Industry',
            backgroundColor: 'rgba(191, 191, 191, 0.2)',
            borderCapStyle: 'butt',
            borderColor: 'rgba(191, 191, 191, 1)',
            borderWidth: 1,
            pointBackgroundColor: '#666',
            pointHoverBackgroundColor: '#1a1a1a',
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
          }
        ]
    });


    const [type, setType] = useState('line');


    useEffect(() => {
        if(useOnUpdate.current) {
            let newData = {...data};

            newData.labels = dates;
            newData.datasets[0].data = values;

            setData(newData);
            console.log('hook');

        } else {
            useOnUpdate.current = true;
        }

    }, [values, dates])



    const chartType = () => {
        switch (type) {
            case 'line':
                return (
                    <Line
                        data={data}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                )

            case 'bar':
                return (
                    <Bar
                        data={data}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                )

            case 'pie':
                return (
                    <Pie
                        data={data}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                )

            default: return 'line'
          }
    }


    return (
        <React.Fragment>
            { isLoading ? <Loading /> :
                chartType()
            }

            <div className='chart-types'>
                <button onClick={() => setType('line')}>
                    <span className="fas fa-chart-line"></span>
                </button>

                <button onClick={() => setType('bar')}>
                    <span className="far fa-chart-bar"></span>
                </button>

                <button onClick={() => setType('pie')}>
                    <span className="fas fa-chart-pie"></span>
                </button>
            </div>
        </React.Fragment>
    )
}


export default ChartSettings;
