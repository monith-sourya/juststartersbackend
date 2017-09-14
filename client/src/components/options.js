import React, {Component} from 'react'
import {connect} from 'react-redux'
import { RadioGroup, RadioButton } from 'react-radio-buttons'

var configs = [
    {
        title: "Choose you Serving",
        options: [{
            subtitle: "For 4",
            price: 0
        },{
            subtitle: "For 8",
            price: 20
        },{
            subtitle: "For 16",
            price: 40
        }
        ]
    },
    {
        title: "Pick a Meat",
        options: [{
            subtitle: "No thanks",
            price: 0
        },{
            subtitle: "Chicken",
            price: 10
        },{
            subtitle: "Vegetarian",
            price: 4
        }
        ]
    },
    {
        title: "Add a Side",
        options: [{
            subtitle: "No thanks",
            price: 0
        },{
            subtitle: "Fries",
            price: 10
        },{
            subtitle: "Curly Fries",
            price: 4
        }
        ]
    },
    {
        title: "Add a Drink",
        options: [{
            subtitle: "No thanks",
            price: 0
        },{
            subtitle: "Coke",
            price: 10
        },{
            subtitle: "Shake",
            price: 4
        }
        ]
    }
]

class ProductOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.generateList = this.generateList.bind(this)
        this.generateRadio = this.generateRadio.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleTextArea = this.handleTextArea.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
    }
        
    handleRadioChange(title, e) {
        this.setState(
            {
                options: {...this.state.options, [title]: e}
            }, () => {
                this.updateTotal()
            }
        );
    }
    
    generateRadio(opt){
        return opt.map((option) => (
            <RadioButton padding="10" iconSize="1" iconInnerSize="0" pointColor="#50E3C2" value={{text: option.subtitle,
                                                                                                  price: option.price
                                                                                                 }}>
                {option.subtitle}<br/>+ AED {option.price}
            </RadioButton>
        ))
    }
    
    handleTextArea(e){
        this.setState({custom: e.target.value})
    }
 
    generateList(){
        return configs.map((option) =>
            (
                <div>
                <div className="optionTitle">{option.title}</div>
                <RadioGroup onChange={(e) => this.handleRadioChange(option.title, e)}  className="configContainer" horizontal>
                    {this.generateRadio(option.options)}
                </RadioGroup>
                </div>
            )
        )
    }
    
    updateTotal(){
        console.log("Update Total")
        var price = 0
        var options = this.state.options
        for (var key in options){
            if (options.hasOwnProperty(key)) {
                price += options[key].price
            }
        }
        this.setState({total: price})
    }

    
    render()
    {
        return (
            <div className="configContainer">
                <div className="confTitle">Configure your Burger:</div>
                {this.generateList()}
                <div className="optionTitle">Anything else?</div>
                <textarea className="textArea" onChange={this.handleTextArea}></textarea>
            </div>
        )
    }
}

export default ProductOptions