import React from 'react';
import PropTypes from 'prop-types';


const ConvertedOutput = (props) => {
    const { output } = props;

    var unitOutput;
        switch(props.unit){
        case 'kgtolbs':
            unitOutput = `${output} lbs`;
            break;
        case 'lbstokg':
            unitOutput = `${output} kg`;
            break;
        case 'gramtoounce':
            unitOutput =  `${output} oz`;
            break;
        case 'ouncetogram':
            unitOutput =  `${output} g`;
            break;
        case 'celsiustofahrenheit':
            unitOutput = `${output} F`;
            break;
        case 'fahrenheittocelsius':
            unitOutput = `${output} C`;
            break;
        case 'celsiustokelvin':
            unitOutput = `${output} K`;
            break;
        }
    
    return(
            <div>
                <p>{unitOutput}</p>
            </div>
        );
}

ConvertedOutput.proptypes = {
    output: PropTypes.number.isRequired
}


export default ConvertedOutput;