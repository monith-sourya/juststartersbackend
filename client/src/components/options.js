import React, {Component} from 'react'
import {connect} from 'react-redux'
import { RadioGroup, RadioButton } from 'react-radio-buttons'

var configs = [
    {
        title: "Pick a Meat",
        options: [{
            subtitle: "Chicken",
            price: 10
        },{
            subtitle: "Vegetarian",
            price: 4
        },{
            subtitle: "No thanks",
            price: 0
        }
        ]
    },
    {
        title: "Pick Sides",
        options: [{
            subtitle: "Fries",
            price: 10
        },{
            subtitle: "Curly Fries",
            price: 4
        }
        ]
    },
    {
        title: "Pick a Drink",
        options: [{
            subtitle: "Coke",
            price: 10
        },{
            subtitle: "Shake",
            price: 4
        }
        ]
    }
]

function generateList(){
    var list = []  
    for (var i in configs){
        var option = configs[i]
        list.push(
            <div>
            <div className="optionTitle">{option.title}</div>
            <RadioGroup className="configContainer" horizontal>
                {generateRadio(option.options)}
            </RadioGroup>
            </div>
        ) 
    }
    return list
}

function generateRadio(opt){
    var list = []
    for (var i in opt){
        list.push(
            <RadioButton padding="10" iconSize="0" iconInnerSize="0" value="apple">
                {opt[i].subtitle}<br/>+ AED {opt[i].price}
            </RadioButton>
        )
    }
    return list
}


class ProductOptions extends Component {
    render()
    {
        return (
            <div className="configContainer">
                <div className="confTitle">Configure your Burger:</div>
                {generateList()}
                <div className="optionTitle">Anything else?</div>
                <textarea></textarea>
            </div>
        )
    }
}

export default ProductOptions