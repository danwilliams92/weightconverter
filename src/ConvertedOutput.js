import React from 'react';
import PropTypes from 'prop-types';


const ConvertedOutput = (props) => {
    const { output } = props;

    var unit;
        switch(props.unit){
        case 'kgtolbs':
            unit = 'lbs';
            break;
        case 'lbstokg':
            unit = 'kg';
            break;
        case 'gramtoounce':
            unit =  'oz';
            break;
        case 'ouncetogram':
            unit =  'g';
            break;
        case 'celsiustofahrenheit':
            unit = 'F';
            break;
        case 'fahrenheittocelsius':
            unit = 'C';
            break;
        case 'celsiustokelvin':
            unit = 'K';
            break;
        }
    
    return(
            <div>
                <p>{output} {unit}</p>
            </div>
        );
}

ConvertedOutput.proptypes = {
    output: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}


export default ConvertedOutput;