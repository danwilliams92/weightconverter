import React, { Component } from 'react';
import ConvertedOutput from './ConvertedOutput';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            kg: 0,
            lbs: 0,
            grams: 0,
            ounces: 0,
            celsius: 0,
            fahrenheit: 0,
            kelvin: 0,
            value: 'kgtolbs',
            userInput: '',
            userOutput: ''
        }

        this.convertKgToLbs.bind(this);
        this.convertLbsToKg.bind(this);
        this.handleOption.bind(this);
        this.handleChange.bind(this);
        this.convertGramToOunce.bind(this);
        this.convertOunceToGram.bind(this);
        this.convertCelsiusToFahrenheit.bind(this);
        this.convertFahrenheitToCelsius.bind(this);
        this.convertCelsiusToKelvin.bind(this);
    }

    handleOption(event){
        
        const selectedValue = event.target.value;
        const inputField = document.querySelector('#input');
        inputField.value = '0';

        this.setState({
            value: selectedValue
        });
    }

    handleChange(event){

            this.setState({
                userInput: event.target.value
            }, function(){
                switch(this.state.value){
                    case 'kgtolbs':
                        this.convertKgToLbs();
                        break;
                    case 'lbstokg':
                        this.convertLbsToKg();
                        break;
                    case 'gramtoounce':
                        this.convertGramToOunce();
                        break;
                    case 'ouncetogram':
                        this.convertOunceToGram();
                        break;
                    case 'celsiustofahrenheit':
                        this.convertCelsiusToFahrenheit();
                        break;
                    case 'fahrenheittocelsius':
                        this.convertFahrenheitToCelsius();
                        break;
                    case 'celsiustokelvin':
                        this.convertCelsiusToKelvin();
                        break;
                }
            })
    }

    convertKgToLbs () {
        const kg = this.state.userInput;
        const lbsConversion = kg * 2.205;
        this.setState({
          lbs: lbsConversion.toFixed(1),
          userOutput: lbsConversion.toFixed(1)
        });
    }

    convertLbsToKg () {
        const lb = this.state.userInput;
        const kgConversion = lb * 0.45;
        this.setState({
            kg: kgConversion.toFixed(1),
            userOutput: kgConversion.toFixed(1)
        });
    }

    convertGramToOunce(){
        const gram = this.state.userInput;
        const ozConversion = gram * 0.035274;
        this.setState({
            ounces: ozConversion.toFixed(2),
            userOutput: ozConversion.toFixed(2)
        });
    }

    convertOunceToGram(){
        const ounce = this.state.userInput;
        const gramConversion = ounce * 28.3495;
        this.setState({
            grams: gramConversion.toFixed(2),
            userOutput: gramConversion.toFixed(2)
        });
    }

    convertCelsiusToFahrenheit(){
        const celsius = this.state.userInput;
        const fahrenheitConversion = celsius * 9 / 5 + 32;
        this.setState({
            fahrenheit: fahrenheitConversion.toFixed(2),
            userOutput: fahrenheitConversion.toFixed(2)
        });
    }

    convertFahrenheitToCelsius(){
        const fahrenheit = this.state.userInput;
        const celsiusConversion = ( fahrenheit - 32 ) * 5 / 9;
        this.setState({
            celsius: celsiusConversion.toFixed(2),
            userOutput: celsiusConversion.toFixed(2)
        });
    }

    convertCelsiusToKelvin(){
        const celsius = parseInt(this.state.userInput);
        const kelvinConversion = celsius + 273.15;
        this.setState({
            kelvin: kelvinConversion.toFixed(2),
            userOutput: kelvinConversion.toFixed(2)
        });
    }

    render(
    ){

        return(
        
            <div className="search-bar">
                <input className="input" type="number" id="input" onChange={this.handleChange.bind(this)} />
                <select onChange={this.handleOption.bind(this)}>
                    <option value="kgtolbs">Kg to Lbs</option>
                    <option value="lbstokg">Lbs to kg</option>
                    <option value="gramtoounce">Gram to Ounce</option>
                    <option value="ouncetogram">Ounce to Gram</option>
                    <option value="celsiustofahrenheit">Celsius to Fahrenheit</option>
                    <option value="fahrenheittocelsius">Fahrenheit to Celsius</option>
                    <option value="celsiustokelvin">Celsius to Kelvin</option>

                </select>
                <ConvertedOutput 
                    unit={this.state.value}
                    output={this.state.userOutput}
                    />
            </div>
      
        );
    }
}

export default SearchBar;