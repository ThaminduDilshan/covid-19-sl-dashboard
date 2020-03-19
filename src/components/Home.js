import React, {Component} from 'react';
import {connect} from 'react-redux';
import LocalStat from './LocalStat';

class Home extends Component {
    render() {
        const {data, pending, error} = this.props;

        if(data !== null) {
            return (
                <div className="home container">
                    <LocalStat data={this.props.data}/>
                </div>
            );
        } else {
            return (
                <div className="center">
                    <br/>
                    {error ? (
                        <span className="white-text">ERROR</span>
                    ) : pending ? (
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
        pending: state.pending,
        error: state.error
    }
}

export default connect(mapStateToProps)(Home);
