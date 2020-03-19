import React from 'react';

const GlobalStat = ({data}) => {
    return (
        <div className="stat card col s6 right">
            <div className="card-content">
                <h4 className="white-text">Global Statistics</h4>
                <h5>New Cases: <span className="right">{data.global_new_cases}</span></h5>
                <h5>Total Cases: <span className="right">{data.global_total_cases}</span></h5>
                <h5>Recovered: <span className="right">{data.global_recovered}</span></h5>
                <h5>New Deaths: <span className="right">{data.global_new_deaths}</span></h5>
                <h5>Total Deaths: <span className="right">{data.global_deaths}</span></h5>
            </div>
        </div>
    );
}

export default GlobalStat;
