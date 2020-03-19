import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';

import LocalStat from './LocalStat';
import GlobalStat from './GlobalStat';
import HospitalList from './HospitalList';

class Statistics extends Component {
    render() {
        if(this.props.data !== null) {
            return (
                <div className="stat home container row">
                    <span className="update-time card-title yellow-text">
                        Last Updated At: <span>
                        <Moment format="dddd, DD MMM YYYY hh:mm A">
                            {new Date(this.props.update_dt)}
                        </Moment>
                        </span>
                    </span>
                    <div className="stat-boxes col s12">
                        <LocalStat data={this.props.data}/>
                        <GlobalStat data={this.props.data}/>
                    </div>
                    <div className="stat-boxes col s12">
                        <HospitalList hosplist={this.props.data.hospital_data}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="center">
                    <br/>
                    {this.props.error ? (
                        <span className="white-text">ERROR</span>
                    ) : this.props.pending ? (
                        <div>Loading ...</div>
                    ) : (
                        <span>No data available</span>
                    )}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        update_dt: state.update_dt,
        pending: state.pending,
        error: state.error
    }
}

export default connect(mapStateToProps)(Statistics);
