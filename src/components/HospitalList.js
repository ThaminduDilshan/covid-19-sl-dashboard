import React from 'react';

const HospitalList = ({hosplist}) => {
    const hospList = hosplist.map(hospital => {
        return (
            <div className="hosp-comp card col s6" key={hospital.id}>
                <div className="card-content">
                    <div className="hosp-name card-title yellow-text">{hospital.hospital.name}</div>
                    <div className="bold-text">Current Count on Treatments/ Observations</div>
                    <div>Treatment Local Patients: <span className="right">{hospital.treatment_local}</span></div>
                    <div>Treatment Foreign Patients: <span className="right">{hospital.treatment_foreign}</span></div>
                    <div>Total Count: <span className="right bold-text">{hospital.treatment_total}</span></div>
                    <br/>
                    <div className="bold-text">Cumulative Count on Treatments/ Observations</div>
                    <div>Local Patients: <span className="right">{hospital.cumulative_local}</span></div>
                    <div>Foreign Patients: <span className="right">{hospital.cumulative_foreign}</span></div>
                    <div>Total Count: <span className="right bold-text">{hospital.cumulative_total}</span></div>
                </div>
            </div>
        )
    });

    return (
        <div className="hosps row">
            <h4 className="white-text" id="hosp-heading">Hospital Data</h4>
            <div className="container col s12">
                {hospList}
            </div>
        </div>
    );
}

export default HospitalList;
