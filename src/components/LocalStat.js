import React from 'react';

const LocalStat = ({data}) => {
    return (
        <div className="stat card col s6 left">
            <div className="card-content">
                <h4 className="white-text">Local Statistics</h4>
                <h5>New Cases: <span className="right">{data.local_new_cases}</span></h5>
                <h5>Total Cases: <span className="right">{data.local_total_cases}</span></h5>
                <h5>Recovered: <span className="right">{data.local_recovered}</span></h5>
                <h5>New Deaths: <span className="right">{data.local_new_deaths}</span></h5>
                <h5>Total Deaths: <span className="right">{data.local_deaths}</span></h5>
            </div>
        </div>
    );
}

export default LocalStat;
