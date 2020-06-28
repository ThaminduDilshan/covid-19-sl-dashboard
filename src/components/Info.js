import React from 'react';

import SympImage_1 from '../images/symptoms_1.jpg';
import SympImage_2 from '../images/symptoms_2.jpg';
import SympImage_3 from '../images/symptoms_3.jpg';
import SympImage_4 from '../images/symptoms_4.jpg';
import SympImage_5 from '../images/symptoms_5.jpg';


const infoData = {
    facts: [
        {
            id: 1,
            title: "What is Corona Virus",
            body: [
                "Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).",
                "Coronavirus disease (COVID-19) is a new strain that was discovered in 2019 and has not been previously identified in humans."
            ]
        },
        {
            id: 2,
            title: "What is COVID-19",
            body: [
                "COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019."
            ]
        },
        {
            id: 3,
            title: "How it Spreads",
            body: [
                "Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth."
            ]
        },
        {
            id: 4,
            title: "Symptoms of the Disease",
            body: [
                "Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death."
            ]
        },
        {
            id: 5,
            title: "How to Prevent",
            body: [
                "Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing."
            ]
        }
    ],
    symptoms: [
        {
            id: 1,
            title: "Fever",
            body: "",
            imageComp: SympImage_1
        },
        {
            id: 2,
            title: "Cough",
            body: "",
            imageComp: SympImage_2
        },
        {
            id: 3,
            title: "Sore throat",
            body: "",
            imageComp: SympImage_3
        },
        {
            id: 4,
            title: "Sneezing and runny nose",
            body: "",
            imageComp: SympImage_4
        },
        {
            id: 5,
            title: "Difficulty in breathing",
            body: "",
            imageComp: SympImage_5
        }
    ],
    prevention: [
        {
            id: 1,
            title: "Wash your hands frequently",
            body: [
                "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Because washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands"
            ]
        },
        {
            id: 2,
            title: "Maintain social distancing",
            body: [
                "Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. Because when someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease."
            ]
        },
        {
            id: 3,
            title: "Avoid touching eyes, nose and mouth",
            body: [
                "Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick."
            ]
        },
        {
            id: 4,
            title: "Practice respiratory hygiene",
            body: [
                "Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.",
                "Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19."
            ]
        },
        {
            id: 5,
            title: "If you have fever, cough and difficulty breathing, seek medical care early",
            body: [
                "Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.",
                "National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections."
            ]
        },
        {
            id: 6,
            title: "Stay informed and follow advice given by your healthcare provider",
            body: [
                "Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19."
            ]
        }
    ],
    protection_visited: [
        {
            id: 1,
            title: "Protection measures",
            body: [
                "Follow the guidance outlined above under prevention",
                "Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight runny nose, until you recover. Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.",
                "If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers. Why? Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses."
            ]
        }
    ]
};


const factList = infoData.facts.map(obj => {
    return (
        <div className="info-box card" key={obj.id}>
            <div className="card-content">
                <span className="card-title yellow-text">{obj.title}</span>
                { obj.body.map(fact => {
                    return (
                        <p>{fact}</p>
                    )
                }) }
            </div>
        </div>
    )
});

const symptomList = infoData.symptoms.map(obj => {
    return (
        <div className="sym-box" key={obj.id}>
            <div>
                <img src={obj.imageComp} alt="Symptom Cartoon"/>
                <h5 className="yellow-text">{obj.title}</h5>
                <p>{obj.body}</p>
                <br/>
            </div>
        </div>
    )
});

const preventList = infoData.prevention.map(obj => {
    return (
        <div className="info-box card" key={obj.id}>
            <div className="card-content">
                <span className="card-title yellow-text">{obj.title}</span>
                { obj.body.map(fact => {
                    return (
                        <p>{fact}</p>
                    )
                }) }
            </div>
        </div>
    )
});

const Info = () => {
    return (
        <div className="info container row">
            <div className="info-boxes col s12">
                <div className="col s8">
                    {factList}
                    <h3 className="heading white-text">Prevention</h3>
                    {preventList}
                </div>
                <div className="sym-boxes col s4 card">
                    <div className="card-content">
                        <h3 className="white-text">Symptoms</h3>
                        {symptomList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
